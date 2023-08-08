import jwt from "jsonwebtoken";
const secret = process.env.JWT_SECRET;
const timeout = process.env.JWT_TIMEOUT;

export interface JwtUserLoginType {
	_id: string;
	email: string;
	firstName: string;
	lastName: string;
	type: "access-token";
}

export const generateForUser = <TData = JwtUserLoginType>(user: TData) => {
	let token: string;
	console.log("TData", user);
	console.log("process env enter", process.env.JWT_SECRET);
  
	token = jwt.sign(
	  { user },
	  process.env.JWT_SECRET, // Use the correct secret key from environment variables
	  {
		expiresIn: timeout, // Make sure 'timeout' is defined with the desired expiration time
	  }
	);
  
	console.log("user", user);
	console.log("token", token);
  
	return token;
  };
  
  export const verifyAsyncUser = <TData = JwtUserLoginType>(
	token: string,
): Promise<TData> =>
	new Promise((res, rej) => {
		console.log("enter verify async user",token);
		const validate = jwt.verify(
			token,
			secret,
			(err: Error, decoded: { user: TData }) => {
				if (err) {
					console.log("err",err)
					rej(err);
				} else {
					console.log("decoded.data",decoded.user)
					res(decoded.user);
				}
			},
		);
		console.log("validate",validate)
		return validate;
	});