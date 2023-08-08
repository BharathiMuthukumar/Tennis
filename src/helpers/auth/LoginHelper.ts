
import { ResponseBody } from "../../controllers/student/login/post/types"


import { HydratedDocument } from "mongoose";


import { IStudents } from "../../models/studentModel";
import { generateForCustomer } from "../jwt";



export async function generateCustomerLoginResponse(

	student: HydratedDocument<IStudents> ,
	
): Promise<ResponseBody > {
	console.log("Helper enter")

		const token = generateForCustomer(student);
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


