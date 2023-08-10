import { getEnumValues } from "@src/models/modelenums";
import { errorHandler, ErrorMessageCode } from "@src/utils/default";

const errors = getEnumValues(ErrorMessageCode);

function getErrorCode(message: string) {
	if (errors.includes(message as ErrorMessageCode)) {
		return message as ErrorMessageCode;
	}
	return ErrorMessageCode.INTERNAL_SERVER_ERROR;
}

export default (err: any, req, res, next) => {
	let errorResponse: {
		statusCode: number;
		displayMessage: string;
		errorCode: string;
		errorMessage: string;
		errors: any;
	};
	if (err.errors) {
		errorResponse = {
			statusCode: err.status,
			errorCode: "INVALID_REQUEST_BODY",
			displayMessage: "Invalid Request Body",
			errorMessage: "Invalid Request Body",
			errors: err?.errors ?? [],
		};
	} else {
		errorResponse = {
			statusCode: 400,
			displayMessage: "Internal Server Error",
			errorCode: getErrorCode(err.message),
			errorMessage: err.message,
			errors: err?.errors ?? [],
			...errorHandler(err.message),
		};
	}
	res.status(errorResponse?.statusCode || 500).json(errorResponse);
	next();
};
