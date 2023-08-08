import { ErrorMessageCode, logger } from "../utils/default";
import models from "../models";
import { Types } from "mongoose";

import { verifyAsyncCustomer } from "../helpers/jwt";

export default () => async (req, res, next) =>{

    try {
		const accessToken = req.headers.authorization;
        if (accessToken) {
        try{
            let loggedInStudent: any;
                console.log("enter customer authenticator")
				const decoded = await verifyAsyncCustomer(
					accessToken
				);
				req.student = decoded;
                console.log("decoded",decoded)
				if (decoded.type === "access-token") {		
                    loggedInStudent = await models.Students
							.findOne({
								_id: new Types.ObjectId(decoded._id),
							})
							.lean()
							.exec();
					}				
				}
                catch (err) {
                    throw new Error(ErrorMessageCode.INVALID_TOKEN);
                }
        }
        next();
}
catch (error) {
    logger.error(`Unable to authorize token`, error);
    next(error);
}
}