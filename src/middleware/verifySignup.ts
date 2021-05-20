import User from "../routes/Users/User";
import { ROLES } from "../routes/Roles/Role";

const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  try {
    const email = await User.findOne({ email: req.body.email });
    if (email)
      return res.status(404).send({ message: "The email already exists" });
    next();
  } catch (error) {
    res.status(500).json({ message: error });
  } 
};

const checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        return res.status(404).json({
          message: `Role ${req.body.roles[i]} does not exist`,
        });
      }
    }
  }

  next();
};

export { checkDuplicateUsernameOrEmail, checkRolesExisted };