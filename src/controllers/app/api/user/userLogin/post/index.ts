import { Request, Response, NextFunction } from "express";
import { RequestBody, PathParams, QueryParams, ResponseBody } from "./types";
import users from '@src/models/userModel';
import bcrypt from "bcryptjs";
import { ErrorMessageCode, logger } from "@src/utils/default";
import { HydratedDocument } from "mongoose";
import { generateUserLoginResponse} from "@helpers/auth/LoginHelper";
export default  () =>
async (
  req: Request<RequestBody>,
  res: Response<ResponseBody>,
  next: NextFunction,
) => {
  try{
    console.log("enter user login");
    let user: any;
            let user1: HydratedDocument<any>
            user = await users.findOne({ email: req.body.email,
              isDeleted: false, });
          	if (!user) throw new Error(ErrorMessageCode.USER_NOT_FOUND);
	
            if(user){

              const isValid = await bcrypt.compare(req.body.password, user.password);
                    console.log("isValid,",isValid)
              if (!isValid) throw new Error(ErrorMessageCode.INCORRECT_PASSWORD);
              user1 = {
                _id : user._id .toString(),
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName
              }
              const response = await generateUserLoginResponse(user1              
                );
                      console.log(response);
                logger.debug(` ${user.email} logged in.`);
                return res.status(response.statusCode).json(response);
              }
            }catch (err) {
              logger.error("An Error occurred during e-mail login", err);
                    console.log(err);
              next(err);
            }
          };


 

