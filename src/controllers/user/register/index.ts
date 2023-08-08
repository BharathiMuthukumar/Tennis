
import { Request, Response, NextFunction } from "express";
import { RequestBody, PathParams, QueryParams, ResponseBody } from "./types";
import users,{Iusers} from '../../../models/userModel';
import bcrypt from "bcryptjs";
import { ErrorMessageCode, logger } from "../../../utils/default";
export default  () =>
  async (
	req: Request<RequestBody>,
	res: Response<ResponseBody>,
	next: NextFunction,
) =>{
  try{
    console.log("enter user register")
    req.body.email = req.body.email.toLowerCase();
    const existinguser = await users.findOne({ email: req.body.email });
    if (existinguser) {
      throw new Error(ErrorMessageCode.USER_ALREADY_EXISTS);
    } 
   
    req.body.password = await bcrypt.hash(req.body.password, parseInt(process.env.BCRYPT_SALT_ROUNDS));
    const newuser: Iusers = new users({
			...req.body   
		});
    const saveduser = await newuser.save();
		logger.debug(
			`user ${saveduser.email} created. ID: ${saveduser._id}`,
		);  
  const resp = {
    success: true,
    statusCode: 201,
    successMessage: "user registered successfully",
  };
  return res.status(201).json(resp)
  }
  catch(error){
    console.log(error)
    logger.error("Error while registering user.", error);
    return next(error);
  }
}

  
