import { RequestHandler, Response, Request } from "express";
import config from "../../config";
import User from "./User";
import Role from "../Roles/Role";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";


export const createUser: RequestHandler = async (
  req: Request,
  res: Response
) => {
   const userFound = await User.findOne({ email: req.body.email });
  if (userFound) {
    return res.status(204).json({ message: "User already exist..." });
  } else {
    const {
      name,
      email,
      lastName,
      password,
      city,
      address,
      roles,
      phone,
    } = req.body;
  try {    
      const passCrypt = await bcrypt.hash(password, 12);
      const newUser:any = new User({
        email,
        name,
        lastName,
        password: passCrypt,
        city,
        address,
        roles,
        phone,
      });

      // checking for roles
    if (req.body.roles) {
      const foundRoles = await Role.find({ name: { $in: roles } });
      newUser.roles = foundRoles.map((role) => role._id);
    } else {
      const role = await Role.findOne({ name: "user" });
      newUser.roles = [role?._id];
    }

      const savedUser = await newUser.save();
      const token: string = jwt.sign(
        {
          id: savedUser._id,
          name: name,
          lastName: lastName,
          rol: savedUser.rol
        },
        config.SECRET,
        { expiresIn: 86400 }
      );
      res.status(200).json(token);
    } catch (error) {
      res.status(500).json({ message: "Algo salio mal..." });
    }
  }
};

export const loginUser: RequestHandler = async (req: Request, res: Response) => {
  const { email, password } = req.params;
  try {
    
    const userFound: any = await User.findOne({ email });
    if (!userFound) {
      return res.sendStatus(204);
    } else {
      const isPassCorrect = await bcrypt.compare(password, userFound.password);
      if (!isPassCorrect) {
       // return res.status(400).json({ message: "Invalid credentials" });
       res.status(204).json({
        token: null,
        message: "Usuario no encontrado",
      });
      } else {
        const token: string = jwt.sign(
          {
            id: userFound._id,
            name: userFound.name,
            lastName: userFound.lastName,
          },
          config.SECRET,
          { expiresIn: 86400 }
        );

        res.status(200).json(token);
      }
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getUser: RequestHandler = async (req: Request, res: Response) => {
  const users = await User.findById(req.params.id);
  try {
    return res.json(users);
  } catch (error) {
    return res.json(error);
  }
};
export const getUsers: RequestHandler = async (req: Request, res: Response) => {
  const users = await User.find();
  try {
   
    return res.json(users);
  } catch (error) {
    return res.json(error);
  }
};

export const sendEmail: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const cod = JSON.stringify(req.body.random) ;
  const codigo = cod.replace(/[^a-zA-Z0-9]/g, '')
  const contentHTML = `
  <h1>Hola ${req.body.user.name} ${req.body.user.lastName}</h1><p> Su codigo de verificación es: ${codigo}</p> <br></br> <p> Equipo tecnico GREEN</p>
  ` ;
  const transporter = nodemailer.createTransport(smtpTransport({
    service: 'outlook',
    host: 'smtp-mail.outlook.com',
    port: 587,
    requireTLS: true,
    //authMethod: "STARTTLS",
    auth: {
        type: "login",
        user: "carlosquijano@outlook.com",
        pass: 'Pxndx3124047140'
    }
}));
  const mailOptions = {
    from: "carlosquijano@outlook.com",
    to: req.body.user.email,
    subject: "Correo de verificación cuenta GREEN",
    text: "Hola mundo",
    html: contentHTML,

  };
  transporter.sendMail(mailOptions,(error, info)=>{
      if (error) {

         res.status(500).json(error.message)
      } else {
          res.status(200).jsonp(req.body)
      }
  })
};
export const deleteUsers: RequestHandler = async (req, res) => {
  const userDelete = await User.findByIdAndDelete(req.params.id);
  if (!userDelete) {
    return res.status(204).json({ message: " resource not found..." });
  } else {
    return res.json({ message: "User Deleted..." });
  }
};

