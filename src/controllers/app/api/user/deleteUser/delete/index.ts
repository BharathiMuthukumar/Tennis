
import { Request, Response, NextFunction } from "@express-types";
import { RequestBody, PathParams, QueryParams, ResponseBody } from "./types";
import users from '@src/models/userModel';
import { ErrorMessageCode, logger } from "@src/utils/default";


export default () =>
	async (
		req: Request<RequestBody, QueryParams, PathParams>,
		res: Response<ResponseBody>,
		next: NextFunction,
	) => {
  
    
      try {
        const user = await users.findOneAndUpdate(
                  {
                    _id: req.params._id,
                  },
                  {
                    $set: {
                      isDeleted: true,
                    },
                  },
                  { new: true }
                );
                
        if (!user) throw Error(ErrorMessageCode.USER_NOT_FOUND);
  
        const resp: ResponseBody = {
          success: true,
          statusCode: 200,
          successMessage: "user Account  Deleted Successfully",
        };
        res.status(200).json(resp);
      } catch (err) {
        next(err);
        logger.error("Error while deleting user account.", err);
      }
  }
  
