import { RequestHandler, Response, Request } from "express";
import Role from "./Role";

export const getRol: RequestHandler = async (req: Request, res: Response) => {
    const rol:any = await Role.findById(req.params.id);
    try {
      return res.json(rol.name);
    } catch (error) {
      return res.json(error);
    }
  };
  export const getRoles: RequestHandler = async (req, res) => {
    const roles = await Role.find();
    try {
        return res.json(roles);
    } catch (error) {
        return res.json(error);
    }
};