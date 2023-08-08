import jwt from "jsonwebtoken";
const secret = process.env.JWT_SECRET;
const timeout = process.env.JWT_TIMEOUT;

export interface JwtStudentLoginType {
	_id: string;
	email: string;
	firstName: string;
	lastName: string;
	type: "access-token";
}

export const generateForCustomer = <TData = JwtStudentLoginType>(student: TData) => {
	let token: string;
	console.log("TData", student);
	console.log("process env enter", process.env.JWT_SECRET);
  
	token = jwt.sign(
	  { student },
	  process.env.JWT_SECRET, // Use the correct secret key from environment variables
	  {
		expiresIn: timeout, // Make sure 'timeout' is defined with the desired expiration time
	  }
	);
  
	console.log("student", student);
	console.log("token", token);
  
	return token;
  };
  
  export const verifyAsyncCustomer = <TData = JwtStudentLoginType>(
	token: string,
): Promise<TData> =>
	new Promise((res, rej) => {
		console.log("enter verify async customer",token);
		const validate = jwt.verify(
			token,
			secret,
			(err: Error, decoded: { customer: TData }) => {
				if (err) {
					console.log("err",err)
					rej(err);
				} else {
					console.log("decoded.data",decoded.customer)
					res(decoded.customer);
				}
			},
		);
		console.log("validate",validate)
		return validate;
	});