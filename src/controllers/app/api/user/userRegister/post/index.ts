
import { Request, Response, NextFunction } from "express";
import { RequestBody, PathParams, QueryParams, ResponseBody } from "./types";
import users,{Iusers} from '@src/models/userModel';
import bcrypt from "bcrypt";
import { ErrorMessageCode, logger } from "@src/utils/default";
export default  () =>
  async (
	req: Request<RequestBody>,
	res: Response<ResponseBody>,
	next: NextFunction,
) =>{
  try{
    console.log("enter user register")
    req.body.email = req.body.email.toLowerCase();
    console.log("enter user register2", req.body.email)

    const existinguser = await users.findOne({ email: req.body.email });
    console.log("enter user register3")

    if (existinguser) {
      throw new Error(ErrorMessageCode.USER_ALREADY_EXISTS);
    } 
    console.log("userooo" )
    req.body.password = await bcrypt.hash(req.body.password, parseInt(process.env.BCRYPT_SALT_ROUNDS));
    const newuser: Iusers = new users({
			...req.body   
		});
        console.log("user",newuser )
    const saveduser = await newuser.save();
		logger.debug(
			`user ${saveduser.email} created. ID: ${saveduser._id}`,
		);  
  const resp = {
    success: true,
    statusCode: 201,
    successMessage: "user registered successfully",
  };
  console.log("resp",resp)
  return res.status(201).json(resp)
  }
  catch(error){
    console.log(error)
    logger.error("Error while registering user.", error);
    return next(error);
  }
}

  
