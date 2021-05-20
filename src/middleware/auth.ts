import jwt from "jsonwebtoken";
import config from '../config'
import User from "../routes/Users/User";
import Role from "../routes/Roles/Role"; 

export const verifyToken = async (req, res, next) => {
  let token: any 
  console.log(res.body)

  if (req.params.token) {
    token = req.params.token.replace(/['"]+/g, '')
  } else {
    token = req.body.token.replace(/['"]+/g, '')
  }

  if (!token) return res.status(403).json({ message: "No token provided" });

  try {
    let decodedData
    decodedData = jwt.verify(token, config.SECRET);
    req.userId = decodedData?._id;
    const user = await User.findById(decodedData.id);
    if (!user) return res.status(404).json({ message: "No user found" });
    next();
  } catch (error) {

    return res.status(401).json({ message: "Unauthorized!" });
  }
};

export const isModerator = async (req, res, next) => {
  let token: any 

  if (req.params.token) {
    token = req.params.token.replace(/['"]+/g, '')
  } else {
    token = req.body.token.replace(/['"]+/g, '')
  }
  try {
    let decodedData
    decodedData = jwt.verify(token, config.SECRET);
    const user:any = await User.findById(decodedData.id);
    const roles:any = await Role.find({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "moderator") {
        next();
        return;
      }
    }

    return res.status(403).json({ message: "Require Moderator Role!" });
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};

export const isAdmin = async (req, res, next) => {
  let token: any 

  if (req.params.token) {
    token = req.params.token.replace(/['"]+/g, '')
  } else {
    token = req.body.token.replace(/['"]+/g, '')
  }
  try {
    let decodedData
    decodedData = jwt.verify(token, config.SECRET);
    const user:any = await User.findById(decodedData.id);
    const roles:any = await Role.find({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "admin") {
        next();
        return;
      }
    }

    return res.status(403).json({ message: "Require Admin Role!" });
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};
