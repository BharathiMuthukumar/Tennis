import { ResponseBody } from "../../controllers/user/login/types"
import { HydratedDocument } from "mongoose";
import { Iusers } from "../../models/userModel";
import { generateForUser } from "../jwt";

export async function generateUserLoginResponse(
	user: HydratedDocument<Iusers> ,
	
): Promise<ResponseBody > {
	console.log("Helper enter")

		const token = generateForUser(user);
	  console.log(token);
	// response
	const response: ResponseBody = {
		success: true,
		statusCode: 200,
		accessToken: token,
		
	};
    console.log("response", response);

	return response;
}


