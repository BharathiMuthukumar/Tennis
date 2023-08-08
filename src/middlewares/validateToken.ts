import { ErrorMessageCode, logger } from "../utils/default";
import models from "../models";
import { Types } from "mongoose";

import { verifyAsyncUser } from "../helpers/jwt";

export default () => async (req, res, next) =>{

    try {
		const accessToken = req.headers.authorization;
        if (accessToken) {
        try{
            let loggedInUser: any;
                console.log("enter user authenticator")
				const decoded = await verifyAsyncUser(
					accessToken
				);
				req.user = decoded;
                console.log("decoded",decoded)
				if (decoded.type === "access-token") {		
                    loggedInUser = await models.Users
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