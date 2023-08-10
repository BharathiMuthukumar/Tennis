import { Request, Response, NextFunction } from "@express-types";
import { RequestBody, PathParams, QueryParams, ResponseBody } from "./types";
import users from '@src/models/userModel';
import { ErrorMessageCode, logger } from "@src/utils/default";

export default () =>
	async (
		req: Request<RequestBody,QueryParams, PathParams>,
		res: Response<ResponseBody>,
		next: NextFunction,
	) => {
    try {
      console.log("req.params",req.params)
      // console.log("req.params2",req.openapi.pathParams)

      const user = await users.findOne({
				_id: req.params._id
				
			});
      console.log("user = ", user );
  
      if (!user) throw Error(ErrorMessageCode.USER_NOT_FOUND);
     
				const updateduser = await users.updateOne({
                    _id: user._id,
                }, {
                    $set: {
                       ...req.body
                    },
                });
                console.log("updateduser =", updateduser)
                const resp: ResponseBody = {
                  success: true,
                  statusCode: 200,
                  successMessage: "Profile Updated Successfully",
                };
                console.log("updateduser =", updateduser)
                return res.status(200).json(resp);
    
   }  catch (err) {
			next(err);
			logger.error("Error while updating user.", err);
		}
  }
  

