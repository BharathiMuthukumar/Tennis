import { Request, Response, NextFunction } from "express";
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
		console.log("enter get API ");
        const query: any = {
            isDeleted: false,
        };

        let userList = await users.find(query)
            let result = JSON.stringify(userList);
			console.log("res", result);
			return res.json({
				success: true,
				statusCode: 200,
				data: JSON.parse(result),
				successMessage: "userList Retrieved Successfully",
			});
        }
    
    catch (err) {
        next(err);
        logger.error("Error while getting user list.", err);
    }
}


