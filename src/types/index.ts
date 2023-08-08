import {
	Response as ExpressResponse,
	NextFunction as ExpressNextFunction,
} from "express";
import { Request as ExpressRequest } from "express";
import {
	JwtUserLoginType
} from "../helpers/jwt";
import { ErrorMessageCode } from "../utils/default/errormessagecode";
export type Request<R, Q, P> = {
	body: R;
	query: Q;
	params: P;
	files?: any;
	headers?: {
		authorization?: string;
		"x-forwarded-for"?: string;
		[key: string]: any;
	};

	openapi?: {
		pathParams: P;
	};
	errorCode?: ErrorMessageCode;
	rawBody?: string;
	// TODO: remove Union and fix type errors
} & ExpressRequest;

export type ErrorMessage = { errorMessage: string };
export type Response<R = any> = ExpressResponse<R | ErrorMessage>;

export type NextFunction = ExpressNextFunction;




export type UnwrapArray<T> = T extends Array<infer R> ? R : never;