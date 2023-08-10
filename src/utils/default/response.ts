/* eslint-disable @typescript-eslint/naming-convention */
import { constants, getEnumValues } from "@src/models/modelenums";
import { ErrorMessageCode } from "./errormessagecode";

export const errorHandler = (code: ErrorMessageCode) => {
	let response: {
		statusCode: number;
		errorMessage: string;
		displayMessage: string;
	};
	switch (code) {
		case ErrorMessageCode.INCORRECT_PASSWORD:
			response = {
				statusCode: 401,
				errorMessage: "Invalid Password",
				displayMessage:
					"You have entered an invalid username/password.", // "Password Is Incorrect"
			};
			break;
		case ErrorMessageCode.UNAUTHORIZED_ACCESS:
			response = {
				statusCode: 401,
				errorMessage: "Unauthorized Access",
				displayMessage: "Unauthorized Access",
			};
			break;
		case ErrorMessageCode.TOKEN_EXPIRED:
			response = {
				statusCode: 401,
				errorMessage: "Token Expired",
				displayMessage: "Token Expired",
			};
			break;
		case ErrorMessageCode.USER_NOT_FOUND:
			response = {
				statusCode: 404,
				errorMessage: "User Does Not Exist",
				displayMessage: "User Not Found",
			};
			break;
		case ErrorMessageCode.ADMIN_ALREADY_EXISTS:
			response = {
				statusCode: 409,
				errorMessage: "Admin Already Exist",
				displayMessage: "Admin Already Exist",
			};
			break;
		case ErrorMessageCode.INCORRECT_EMAIL:
			response = {
				statusCode: 403,
				errorMessage: "Email Id Is Incorrect",
				displayMessage: "Invalid Username",
			};
			break;
		case ErrorMessageCode.ACCOUNT_DEACTIVATED_CONTACT_ADMINISTRATOR:
			response = {
				statusCode: 400,
				errorMessage: "Account Deactivated, Contact Administrator",
				displayMessage:
					"Account that has been temporarily deactivated. Please contact admin at support@rightlife.com for more information",
			};
			break;
		case ErrorMessageCode.SIGNUP_PROCESS_NOT_COMPLETED:
			response = {
				statusCode: 400,
				errorMessage: "Complete Your Sign Up/Onboarding Process",
				displayMessage: "Complete Your Sign Up/Onboarding Process",
			};
			break;
		case ErrorMessageCode.INVALID_OLD_PASSWORD:
			response = {
				statusCode: 400,
				errorMessage: "Incorrect Old Password",
				displayMessage: "Incorrect Old Password",
			};
			break;
		case ErrorMessageCode.OLD_NEW_SIMILAR_PASSWORD:
			response = {
				statusCode: 400,
				errorMessage: "Old and New Password Are Same",
				displayMessage: "Old and New Password Are Same",
			};
			break;
		case ErrorMessageCode.OLD_EMAIL:
			response = {
				statusCode: 400,
				errorMessage:
					"You're Trying To Login With Old Email, Please Verify Your New Email",
				displayMessage: "Trying To Login With Old Email",
			};
			break;
		case ErrorMessageCode.RESET_PASSWORD_TOKEN_EXPIRED:
			response = {
				statusCode: 400,
				errorMessage: "Reset Password Link Had Been Expired",
				displayMessage: "Reset Password Link Had Been Expired",
			};
			break;
		case ErrorMessageCode.UPDATE_EMAIL_TOKEN_EXPIRED:
			response = {
				statusCode: 403,
				errorMessage: "Update Mail Link Had Been Expired",
				displayMessage: "Update Mail Link Had Been Expired",
			};
			break;
		case ErrorMessageCode.DATA_NOT_FOUND:
			response = {
				statusCode: 404,
				errorMessage: "Data Not Found in ES",
				displayMessage: "Processed record not found in ES",
			};
			break;
		case ErrorMessageCode.INSTRUCTOR_ALREADY_EXISTS:
			response = {
				statusCode: 409,
				errorMessage: "Host Already Exists",
				displayMessage: "Host Already Exists",
			};
			break;
		case ErrorMessageCode.ADMIN_NOT_FOUND:
			response = {
				statusCode: 404,
				errorMessage: "Admin Does Not Exist",
				displayMessage: "Admin Not Found",
			};
			break;
		case ErrorMessageCode.ACCOUNT_ACTIVATED:
			response = {
				statusCode: 400,
				errorMessage: "Account Have Been Already Activated",
				displayMessage: "Account Have Been Activated",
			};
			break;
		case ErrorMessageCode.ACCOUNT_DEACTIVATED:
			response = {
				statusCode: 400,
				errorMessage: "This Account is Deactivated",
				displayMessage: "Account Have Been Deactivated",
			};
			break;
		case ErrorMessageCode.TAG_NAME_EXISTS:
			response = {
				statusCode: 400,
				errorMessage: "Tag Name already exists",
				displayMessage:
					"Tag Already Exists with respect to the concerned App",
			};
			break;
		case ErrorMessageCode.TAG_NOT_FOUND:
			response = {
				statusCode: 404,
				errorMessage: "Tag Not Found",
				displayMessage: "Tag Not found",
			};
			break;
		case ErrorMessageCode.PROMPT_ORDER_EXISTS:
			response = {
				statusCode: 400,
				errorMessage: "Order Already Exists",
				displayMessage: "Priority Order Already Exists",
			};
			break;
		case ErrorMessageCode.APP_NOT_SUPPORTED:
			response = {
				statusCode: 400,
				errorMessage: "Tags Cannot be Created Against to these Apps",
				displayMessage: "Tags Cannot be Created Against to these Apps",
			};
			break;
		case ErrorMessageCode.PROMPT_NOT_FOUND:
			response = {
				statusCode: 404,
				errorMessage: "Prompt Not Found",
				displayMessage: "Prompt Not Found",
			};
			break;
		case ErrorMessageCode.PROMOTIONAL_SCREENS_EXISTS:
			response = {
				statusCode: 400,
				errorMessage: "Promotional Screens Already Exists",
				displayMessage:
					"Promotional Screens and Sub-screens Already Exists",
			};
			break;
		case ErrorMessageCode.PROMOTION_NOT_FOUND:
			response = {
				statusCode: 404,
				errorMessage: "Promotion Not Found",
				displayMessage: "Promotion Not Found",
			};
			break;
		case ErrorMessageCode.PROMOTION_UPDATE_TYPE_NOT_FOUND:
			response = {
				statusCode: 404,
				errorMessage: "Promotion Update Type Not Found",
				displayMessage: `Promotion update Type should be (${getEnumValues(
					constants.PromotionUpdateType,
				).join(", ")})`,
			};
			break;
		case ErrorMessageCode.DEVICE_NOT_FOUND:
			response = {
				statusCode: 404,
				errorMessage: "Device not found",
				displayMessage: "Device not found",
			};
			break;
		case ErrorMessageCode.USER_ALREADY_EXISTS:
			response = {
				statusCode: 409,
				errorMessage: "User Already Exists",
				displayMessage: "User Already Exists",
			};
			break;
		case ErrorMessageCode.RETRY_TOO_EARLY:
			response = {
				statusCode: 425,
				errorMessage: "Retry too Early",
				displayMessage: "Retry too Early",
			};
			break;
		case ErrorMessageCode.INVALID_OTP:
			response = {
				statusCode: 401,
				errorMessage: "Invalid OTP",
				displayMessage: "Invalid OTP",
			};
			break;
		case ErrorMessageCode.TOO_MANY_LOGIN_ATTEMPTS:
			response = {
				statusCode: 429,
				errorMessage: "Too many failed login attempts",
				displayMessage: "Too many failed login attempts",
			};
			break;
		case ErrorMessageCode.INVALID_TOKEN:
			response = {
				statusCode: 401,
				errorMessage: "Invalid Token",
				displayMessage: "Invalid Token",
			};
			break;
		case ErrorMessageCode.UNSUPPORTED_OAUTH_PROVIDER:
			response = {
				statusCode: 404,
				errorMessage: "Unsupported OAuth Provider",
				displayMessage: "Unsupported OAuth Provider",
			};
		case ErrorMessageCode.INSTRUCTOR_NOT_FOUND:
			response = {
				statusCode: 404,
				errorMessage: "Instructor Does Not Exist",
				displayMessage: "Instructor Not Found",
			};
			break;
		case ErrorMessageCode.PERMISSIONS_NOT_FOUND:
			response = {
				statusCode: 404,
				errorMessage: "Permission Does Not Exist",
				displayMessage: "Permission Not Found",
			};
			break;
		case ErrorMessageCode.PRICING_NOT_FOUND:
			response = {
				statusCode: 404,
				errorMessage: "Pricing not found",
				displayMessage: "Pricing not found",
			};
			break;
		case ErrorMessageCode.SUBSCRIPTION_PLAN_NOT_FOUND:
			response = {
				statusCode: 404,
				errorMessage: "Subscription Plan not found",
				displayMessage: "Subscription Plan not found",
			};
			break;
		case ErrorMessageCode.APP_ID_NOT_FOUND:
			response = {
				statusCode: 404,
				errorMessage: "App Id not found",
				displayMessage: "App Id not found",
			};
			break;
		case ErrorMessageCode.INSTRUCTOR_CATEGORIES_NOT_FOUND:
			response = {
				statusCode: 404,
				errorMessage: "Instructor Categories not found",
				displayMessage: "Instructor Categories not found",
			};
			break;
		case ErrorMessageCode.ENTITY_ID_MISSING:
			response = {
				statusCode: 400,
				errorMessage: "Entity Id is missing",
				displayMessage: "Entity Id is missing",
			};
			break;
		case ErrorMessageCode.ENTITY_ID_NOT_FOUND:
			response = {
				statusCode: 404,
				errorMessage: "Entity Id not found",
				displayMessage: "Entity Id not found",
			};
			break;
		case ErrorMessageCode.INVALID_ENTITY_NAME:
			response = {
				statusCode: 400,
				errorMessage: "Invalid Entity Name",
				displayMessage: "Invalid Entity Name",
			};
			break;
		case ErrorMessageCode.USER_HAS_ALREADY_TAKEN_TRIAL:
			response = {
				statusCode: 403,
				errorMessage: "User has already taken trial",
				displayMessage: "User has already taken trial",
			};
			break;
		case ErrorMessageCode.USER_PAYMENT_ID_NOT_FOUND:
			response = {
				statusCode: 404,
				errorMessage: "User Payment Id not found",
				displayMessage: "User Payment Id not found",
			};
			break;
		case ErrorMessageCode.PAYMENT_INTENT_CREATION_FAILED:
			response = {
				statusCode: 500,
				errorMessage: "Payment Intent Creation Failed",
				displayMessage: "Payment Intent Creation Failed",
			};
			break;
		case ErrorMessageCode.PAYMENT_INTENT_FETCH_FAILED:
			response = {
				statusCode: 500,
				errorMessage: "Payment Intent Fetch Failed",
				displayMessage: "Payment Intent Fetch Failed",
			};
			break;
		case ErrorMessageCode.PAYMENT_INTENT_NOT_FOUND:
			response = {
				statusCode: 404,
				errorMessage: "Payment Intent Not Found",
				displayMessage: "Payment Intent Not Found",
			};
			break;
		case ErrorMessageCode.PAYMENT_INTENT_STATUS_NOT_SUPPORTED:
			response = {
				statusCode: 500,
				errorMessage: "Payment Intent Status Not Supported",
				displayMessage: "Payment Intent Status Not Supported",
			};
			break;
		case ErrorMessageCode.SUB_SCREEN_ID_NOT_FOUND:
			response = {
				statusCode: 404,
				errorMessage: "SubScreen Id Not Found",
				displayMessage: "SubScreen Id Not Found",
			};
			break;
		case ErrorMessageCode.PROMPT_ORDER_NOT_FOUND:
			response = {
				statusCode: 404,
				errorMessage: "Prompt Order Not Found",
				displayMessage: "Prompt Order Not Found",
			};
			break;
		case ErrorMessageCode.INSTRUCTOR_NOT_ASSOCIATED_WITH_APP:
			response = {
				statusCode: 400,
				errorMessage: "Instructor not associated with the app",
				displayMessage: "Instructor not associated with the app",
			};
			break;
		case ErrorMessageCode.CATEGORY_NOT_ASSOCIATED_WITH_APP:
			response = {
				statusCode: 400,
				errorMessage: "Category not associated with app",
				displayMessage: "Category not associated with app",
			};
			break;
		case ErrorMessageCode.TAGS_NOT_ASSOCIATED_WITH_APP:
			response = {
				statusCode: 400,
				errorMessage: "Tags not associated with app",
				displayMessage: "Tags not associated with app",
			};
			break;
		case ErrorMessageCode.PAYMENT_INTENT_STATUS_UPDATE_FAILED:
			response = {
				statusCode: 500,
				errorMessage: "Payment Intent Status Update Failed",
				displayMessage: "Payment Intent Status Update Failed",
			};
			break;
		case ErrorMessageCode.INVALID_OPTIONS:
			response = {
				statusCode: 400,
				errorMessage:
					"Given Option Id's is Invalid Against the Questions",
				displayMessage:
					"Given Option Id's is Invalid Against the Questions",
			};
			break;
		case ErrorMessageCode.INVALID_ANSWER_ID:
			response = {
				statusCode: 400,
				errorMessage: "Invalid Answer Id",
				displayMessage: "Invalid Answer Id",
			};
			break;
		case ErrorMessageCode.QUESTION_NOT_FOUND:
			response = {
				statusCode: 404,
				errorMessage: "Question Not Found",
				displayMessage: "Question Not Found",
			};
			break;
		case ErrorMessageCode.USER_ANSWER_ALREADY_EXIST:
			response = {
				statusCode: 400,
				errorMessage: "User Answer Already Exists",
				displayMessage: "User Answer Already Exists",
			};
			break;
		case ErrorMessageCode.ACTIVATION_LINK_HAS_BEEN_EXPIRED:
			response = {
				statusCode: 401,
				errorMessage: "Activation Link Has Been Expired",
				displayMessage: "Activation Link Has Been Expired",
			};
			break;
		case ErrorMessageCode.ADDRESS_NOT_FOUND:
			response = {
				statusCode: 404,
				errorMessage: "Address Not Found",
				displayMessage: "Address Not Found",
			};
			break;
		case ErrorMessageCode.ACCOUNT_VERIFIED:
			response = {
				statusCode: 403,
				errorMessage: "Account Have Been Already Verified",
				displayMessage: "Account Have Been Already Verified",
			};
			break;
		case ErrorMessageCode.NEED_BOTH_HEIGHT_AND_WEIGHT:
			response = {
				statusCode: 404,
				errorMessage: "Height and Weight are Mandatory",
				displayMessage: "Height and Weight are Mandatory",
			};
			break;
		case ErrorMessageCode.CONTENT_NOT_FOUND:
			response = {
				statusCode: 404,
				errorMessage: "Content Not Found",
				displayMessage: "Content Not Found",
			};
			break;
		case ErrorMessageCode.INVALID_SORT_VALUE:
			response = {
				statusCode: 400,
				errorMessage: "Sort value should be 'ASC' or 'DESC'",
				displayMessage: "Sort value should be 'ASC' or 'DESC'",
			};
			break;
		case ErrorMessageCode.INSTRUCTOR_IS_NOT_A_MASTER:
			response = {
				statusCode: 400,
				errorMessage: "Instructor is not a Master",
				displayMessage: "Instructor is not a Master",
			};
			break;
		case ErrorMessageCode.INSTRUCTOR_IS_NOT_AFFIRMATED:
			response = {
				statusCode: 400,
				errorMessage: "Instructor is not Affirmated",
				displayMessage: "Instructor is not Affirmated",
			};
			break;
		case ErrorMessageCode.MISSING_DATE_TIME:
			response = {
				statusCode: 400,
				errorMessage:
					"Missing Daily guided title, startTime, endTime, startDate, endDate for daily guided content",
				displayMessage:
					"Missing Daily guided title, startTime, endTime, startDate, endDate for daily guided content",
			};
			break;
		case ErrorMessageCode.INVALID_CATEGORY:
			response = {
				statusCode: 400,
				errorMessage:
					"Master Category is not applicable without instructor",
				displayMessage:
					"Master Category is not applicable without instructor",
			};
			break;
		case ErrorMessageCode.DAILY_GUIDED_CONTENT_EXISTS:
			response = {
				statusCode: 400,
				errorMessage:
					"Daily guided content Already exists for the given date and time",
				displayMessage:
					"Daily guided content Already exists for the given date and time",
			};
			break;
		case ErrorMessageCode.PRICING_UPDATE_ONLY_FOR_VIDEO:
			response = {
				statusCode: 400,
				errorMessage: "Pricing Update only for Video Contents",
				displayMessage: "Pricing Update only for Video Contents",
			};
			break;
		case ErrorMessageCode.INACTIVE_INSTRUCTOR:
			response = {
				statusCode: 400,
				errorMessage: "Instructor Status is not in Active state",
				displayMessage: "Instructor Status is not in Active state",
			};
			break;
		case ErrorMessageCode.NOT_A_DAILY_GUIDED_CONTENT:
			response = {
				statusCode: 400,
				errorMessage: "Category is not a Daily Guided Content",
				displayMessage: "Category is not a Daily Guided Content",
			};
			break;
		case ErrorMessageCode.CATEGORY_DOES_NOT_EXIST:
			response = {
				statusCode: 404,
				errorMessage: "Category not found",
				displayMessage: "Category not found",
			};
			break;
		case ErrorMessageCode.USER_MEAL_PLAN_NOT_FOUND:
			response = {
				statusCode: 404,
				errorMessage: "User Meal Plan Not Found",
				displayMessage: "User Meal Plan Not Found",
			};
			break;
		case ErrorMessageCode.USER_VOICE_ACTIVITY_NOT_FOUND:
			response = {
				statusCode: 404,
				errorMessage: "User Voice Activity Not Found",
				displayMessage: "User Voice Activity Not Found",
			};
			break;
		case ErrorMessageCode.USER_MEAL_PLAN_NOTIFICATION_FAILED_TO_UPDATE:
			response = {
				statusCode: 500,
				errorMessage: "User Meal Plan Notification Failed To Update",
				displayMessage: "User Meal Plan Notification Failed To Update",
			};
			break;
		case ErrorMessageCode.JOURNAL_NOT_FOUND:
			response = {
				statusCode: 404,
				errorMessage: "Journal Not Found",
				displayMessage: "Journal Not Found",
			};
			break;
		case ErrorMessageCode.NOT_AFFIRMATED_BY_USER:
			response = {
				statusCode: 400,
				errorMessage: "This Content is not affirmated by the user",
				displayMessage: "This Content is not affirmated by the user",
			};
			break;
		case ErrorMessageCode.TIME_SLOT_ALREADY_FILLED:
			response = {
				statusCode: 409,
				errorMessage: "Time Slot Already Filled",
				displayMessage: "Time Slot Already Filled",
			};
			break;
		case ErrorMessageCode.EVENT_RATING_ALREADY_EXIST:
			response = {
				statusCode: 400,
				errorMessage: "Event already rated",
				displayMessage: "Event already rated",
			};
			break;

		case ErrorMessageCode.INVALID_ID:
			response = {
				statusCode: 400,
				errorMessage: "Invalid Id",
				displayMessage: "Invalid Id",
			};
			break;
		case ErrorMessageCode.EVENT_ID_NOT_FOUND:
			response = {
				statusCode: 404,
				errorMessage: "Invalid Event Id",
				displayMessage: "Invalid Event Id",
			};
			break;
		case ErrorMessageCode.EVENT_SHOULD_START_AFTER_SEVEN_DAYS:
			response = {
				statusCode: 400,
				errorMessage: "Event Should Start After Seven Days",
				displayMessage: "Event should start after seven days from now",
			};
			break;
		case ErrorMessageCode.USER_INACTIVE:
			response = {
				statusCode: 501,
				errorMessage: "USER NOT ACTIVE PLEASE CONTACT SYSTEM ADMIN",
				displayMessage: "USER NOT ACTIVE PLEASE CONTACT SYSTEM ADMIN",
			};
			break;
		case ErrorMessageCode.QUESTIONNAIRE_INACTIVE:
			response = {
				statusCode: 500,
				errorMessage: "QUESTIONNAIRE IS NOT ACTIVE",
				displayMessage: "QUESTIONNAIRE IS NOT ACTIVE",
			};
			break;
		case ErrorMessageCode.QUESTIONARIES_NOT_FOUND:
			response = {
				statusCode: 500,
				errorMessage: "Questionaries Not Found",
				displayMessage: "Questionaries Not Found",
			};
			break;
		case ErrorMessageCode.EMAIL_DOES_NOT_EXIST:
			response = {
				statusCode: 404,
				errorMessage: "Email does not exist",
				displayMessage: "Email does not exist",
			};
			break;
		case ErrorMessageCode.EITHER_ONE_REQUIRED:
			response = {
				statusCode: 400,
				errorMessage:
					"EIther Screen Id or App Id and Position required",
				displayMessage:
					"EIther Screen Id or App Id and Position required",
			};
			break;
		case ErrorMessageCode.BOTH_APPID_POSITION_REQUIRED:
			response = {
				statusCode: 400,
				errorMessage: "Both App Id and Position required",
				displayMessage: "Both App Id and Position required",
			};
			break;
		case ErrorMessageCode.POSITION_NOT_FOUND:
			response = {
				statusCode: 404,
				errorMessage: "Given Position not Found",
				displayMessage: "Given Position not Found",
			};
			break;
		case ErrorMessageCode.ONBOARDING_QUESTION_NOT_FOUND:
			response = {
				statusCode: 404,
				errorMessage: "Onboarding Question not Found",
				displayMessage: "Onboarding Question not Found",
			};
			break;
		case ErrorMessageCode.NO_ACTIVE_SUBSCRIPTIONS_PLANS:
			response = {
				statusCode: 400,
				errorMessage:
					"This user not having any Active Subscription Plans",
				displayMessage: "Not having any Active Subscription Plans",
			};
			break;
		case ErrorMessageCode.INVALID_MODULE:
			response = {
				statusCode: 400,
				errorMessage:
					"Key Value should be profile, content and promotion",
				displayMessage:
					"Key Value should be profile, content and promotion",
			};
			break;
		case ErrorMessageCode.INVALID_FORMAT_TYPE:
			response = {
				statusCode: 400,
				errorMessage: "Applicable formats are jpeg, jpg, png, mp4",
				displayMessage: "Applicable formats are jpeg, jpg, png, mp4",
			};
			break;
		case ErrorMessageCode.EVENT_SHOULD_HAVE_AT_LEAST_ONE_SCHEDULE:
			response = {
				statusCode: 500,
				errorMessage: "Event should have at least one schedule",
				displayMessage: "Event should have at least one schedule",
			};
			break;
		case ErrorMessageCode.SOCIAL_MEDIA_LINK_NOT_FOUND:
			response = {
				statusCode: 404,
				errorMessage: "Social Media Link not found",
				displayMessage: "Social Media Link not found",
			};
			break;
		case ErrorMessageCode.QUALIFICATION_NOT_FOUND:
			response = {
				statusCode: 404,
				errorMessage: "Qualification not found",
				displayMessage: "Qualification not found",
			};
			break;
		case ErrorMessageCode.FORBIDDEN:
			response = {
				statusCode: 403,
				errorMessage: "Forbidden",
				displayMessage: "Forbidden",
			};
			break;
		case ErrorMessageCode.INVALID_TIME_SLOT:
			response = {
				statusCode: 409,
				errorMessage: "Invalid Time Slot",
				displayMessage: "Invalid Time Slot",
			};
			break;
		case ErrorMessageCode.SUBSCRIPTION_PLAN_LIMIT_EXCEEDED:
			response = {
				statusCode: 403,
				errorMessage: "Subscription Plan Limit Exceeded",
				displayMessage: "Subscription Plan Limit Exceeded",
			};
			break;
		case ErrorMessageCode.SUBSCRIPTION_PLAN_NOT_FOR_DIET_PLAN:
			response = {
				statusCode: 403,
				errorMessage: "Subscription Plan Not For Diet Plan",
				displayMessage: "Subscription Plan Not For Diet Plan",
			};
			break;
		case ErrorMessageCode.INSUFFICIENT_DATA:
			response = {
				statusCode: 400,
				errorMessage: "Given Data is insufficient",
				displayMessage: "Given Data is insufficient",
			};
			break;
		case ErrorMessageCode.FILE_NOT_FOUND:
			response = {
				statusCode: 404,
				errorMessage: "File Not Found",
				displayMessage: "File Not Found",
			};
			break;
		case ErrorMessageCode.PATH_ID_NOT_FOUND:
			response = {
				statusCode: 500,
				errorMessage: "Path Id Not Found",
				displayMessage: "Path Id Not Found",
			};
			break;
		case ErrorMessageCode.START_DATE_TIME_SHOULD_BE_GREATER_FROM_CURRENT_DATE_TIME:
			response = {
				statusCode: 500,
				errorMessage:
					"Start Date Time Should Be Greater Than Current Date And Time",
				displayMessage:
					"Start Date Time Should Be Greater Than Current Date And Time",
			};
			break;
		case ErrorMessageCode.END_DATE_TIME_RANGE_EXCEEDED:
			response = {
				statusCode: 500,
				errorMessage:
					"End Date And Time Should Not Exceed 45 Days from Current Date And Time",
				displayMessage:
					"End Date And Time Should Not Exceed 45 Days from Current Date And Time",
			};
			break;
		case ErrorMessageCode.NOT_A_SERIES_CONTENT:
			response = {
				statusCode: 400,
				errorMessage: "Not a Series content to Add Episodes",
				displayMessage: "Not a Series content to Add Episodes",
			};
			break;
		case ErrorMessageCode.EPISODE_NOT_FOUND:
			response = {
				statusCode: 404,
				errorMessage: "Episode Not Found",
				displayMessage: "Episode Not Found",
			};
			break;
		case ErrorMessageCode.INVALID_CONTENT_TYPE_UPDATE:
			response = {
				statusCode: 400,
				errorMessage: "Content Type of Series Cannot be updated",
				displayMessage: "Content Type of Series Cannot be updated",
			};
			break;
		case ErrorMessageCode.DGC_ONLY_FOR_AUDIO_VIDEO:
			response = {
				statusCode: 400,
				errorMessage:
					"Daily Guided Content applicable only for Audio and Video type Contents",
				displayMessage:
					"Daily Guided Content applicable only for Audio and Video type Contents",
			};
			break;
		case ErrorMessageCode.MISMATCH_TIME_PATTERN:
			response = {
				statusCode: 400,
				errorMessage: "Time Format should be in 12 hours",
				displayMessage: "Time Format should be in 12 hours",
			};
			break;
		case ErrorMessageCode.INSTRUCTOR_ALREADY_ASSOCIATED:
			response = {
				statusCode: 409,
				errorMessage:
					"Given email-id is registered in Host Account. Try with different email id",
				displayMessage:
					"Given email-id is registered in Host Account. Try with different email id",
			};
			break;
		case ErrorMessageCode.ADMIN_ALREADY_ASSOCIATED:
			response = {
				statusCode: 409,
				errorMessage:
					"Given email-id is registered in another rightlife Account. Try with different email id",
				displayMessage:
					"Given email-id is registered in another rightlife Account. Try with different email id",
			};
			break;
		case ErrorMessageCode.NOT_A_CONTENT:
			response = {
				statusCode: 400,
				errorMessage:
					"Pricing cannot be updated as it is not a Content",
				displayMessage:
					"Pricing cannot be updated as it is not a Content",
			};
			break;
		case ErrorMessageCode.EITHER_ONE_URL:
			response = {
				statusCode: 400,
				errorMessage: "Either upload a video or youtube url",
				displayMessage: "Either upload a video or youtube url",
			};
			break;
		case ErrorMessageCode.YOUR_ACCOUNT_ALREADY_SIGNED_UP:
			response = {
				statusCode: 400,
				errorMessage:
					"Your account is already been used to access to the sign-up process.if you think this is an error, please contact us at support@rightlife.com",
				displayMessage:
					"Your account is already been used to access to the sign-up process.if you think this is an error, please contact us at support@rightlife.com",
			};
			break;
		case ErrorMessageCode.ACCESS_DENIED:
			response = {
				statusCode: 403,
				errorMessage: "Access Denied to update or delete a default tag",
				displayMessage:
					"Access Denied to update or delete a default tag",
			};
			break;
		case ErrorMessageCode.REPORT_DATE_MIN_ERROR:
			response = {
				statusCode: 404,
				errorMessage: "Invalid Date",
				displayMessage: "Report date must be minimum 1 week",
			};
			break;

		case ErrorMessageCode.ANURA_SESSION_ID:
			response = {
				statusCode: 404,
				errorMessage: "Session id is required",
				displayMessage: "Session id is required",
			};
			break;
		case ErrorMessageCode.ANURA_SCAN_AWAITING:
			response = {
				statusCode: 404,
				errorMessage: "Scan Awaiting",
				displayMessage:
					"Scan url is generated already and awaiting for the result",
			};
			break;
		case ErrorMessageCode.ANURA_SCAN_CANCELLED:
			response = {
				statusCode: 404,
				errorMessage: "Report Cancelled",
				displayMessage: "The scan report has been cancelled by user",
			};
			break;
		case ErrorMessageCode.ANURA_REPORT_EXIST:
			response = {
				statusCode: 404,
				errorMessage: "Report already generated",
				displayMessage: "The scan report is already generated",
			};
			break;
		case ErrorMessageCode.AT_LEAST_1_SUB_SCREEN_NEEDED:
			response = {
				statusCode: 400,
				errorMessage: "At-least one sub-screen Needed",
				displayMessage:
					"At-least one sub-screen need to be associated with the Promotion",
			};
			break;
		case ErrorMessageCode.RECORD_NOT_FOUND:
			response = {
				statusCode: 404,
				errorMessage: "Not Found",
				displayMessage: "Record Not Found",
			};
			break;
		case ErrorMessageCode.RESULT_NOT_FOUND:
			response = {
				statusCode: 404,
				errorMessage: "Not Found",
				displayMessage: "Result Not Found",
			};
			break;
		case ErrorMessageCode.TYPE_NOT_FOUND:
			response = {
				statusCode: 404,
				errorMessage: "Not Found",
				displayMessage: "Type Not Found",
			};
			break;
		case ErrorMessageCode.CANT_BE_FAVOURITED:
			response = {
				statusCode: 400,
				errorMessage:
					"Daily Guided Content and series should not be favourited",
				displayMessage:
					"Daily Guided Content and series should not be favourited",
			};
			break;
		case ErrorMessageCode.CURRENTLY_NO_TAGS:
			response = {
				statusCode: 400,
				errorMessage: "No tags are associated",
				displayMessage:
					"Currently No Tags are associated with this Content",
			};
			break;
		case ErrorMessageCode.NOT_A_MASTER:
			response = {
				statusCode: 400,
				errorMessage: "Host is not a Master",
				displayMessage:
					"Host is not a Master to get workshop and contents",
			};
			break;
		case ErrorMessageCode.UNABLE_TO_DELETE:
			response = {
				statusCode: 400,
				errorMessage: "Access Denied to delete this tag",
				displayMessage:
					"You've have contents associated to this tag. Kindly change the tags in the content and try again.",
			};
			break;
		case ErrorMessageCode.TAGS_NOT_ASSOCIATED:
			response = {
				statusCode: 400,
				errorMessage: "Tags are not associated for Home page",
				displayMessage: "Tags are not associated for Home page",
			};
			break;
		case ErrorMessageCode.TOO_MANY_INVALID_RETRY:
			response = {
				statusCode: 429,
				errorMessage: "Too many invalid retry",
				displayMessage: "Too many invalid retry",
			};
			break;
		case ErrorMessageCode.OPTION_IS_MAPPED:
			response = {
				statusCode: 403,
				errorMessage:
					"This goal has been chosen by the user, unable to delete.",
				displayMessage:
					"This goal has been chosen by the user, unable to delete.",
			};
			break;
		case ErrorMessageCode.OPTION_NOT_FOUND:
			response = {
				statusCode: 404,
				errorMessage: "Option Not Found",
				displayMessage: "Option Not Found",
			};
			break;
		case ErrorMessageCode.INSTRUCTOR_IS_REQUIRED:
			response = {
				statusCode: 400,
				errorMessage: "Instructor is required for Master Categories",
				displayMessage: "Instructor is required for Master Categories",
			};
			break;
		case ErrorMessageCode.USER_GENDER_NOT_FOUND:
			response = {
				statusCode: 400,
				errorMessage: "Gender Not Found",
				displayMessage: "Gender Required for Generating Health Report",
			};
			break;
		case ErrorMessageCode.USER_WEIGHT_NOT_FOUND:
			response = {
				statusCode: 400,
				errorMessage: "Weight Not Found",
				displayMessage: "Weight Required for Generating Health Report",
			};
			break;
		case ErrorMessageCode.USER_HEIGHT_NOT_FOUND:
			response = {
				statusCode: 400,
				errorMessage: "Height Not Found",
				displayMessage: "Height Required for Generating Health Report",
			};
			break;
		case ErrorMessageCode.USER_DOB_NOT_FOUND:
			response = {
				statusCode: 400,
				errorMessage: "Date of Birth Not Found",
				displayMessage:
					"Date of Birth Required for Generating Health Report",
			};
			break;
		case ErrorMessageCode.USER_EMAIL_NOT_FOUND:
			response = {
				statusCode: 400,
				errorMessage: "Email not found",
				displayMessage: "Email not found",
			};
			break;
		case ErrorMessageCode.USER_FIRST_LOOK_REPORT_NOT_FOUND:
			response = {
				statusCode: 404,
				errorMessage: "First Look Report Not Found",
				displayMessage: "First Look Report Not Found",
			};
			break;
		case ErrorMessageCode.ALREADY_FAVOURITED:
			response = {
				statusCode: 400,
				errorMessage: "Already Favourited",
				displayMessage: "Already Favourited Content",
			};
			break;
		case ErrorMessageCode.ALREADY_AFFIRMATED:
			response = {
				statusCode: 400,
				errorMessage: "Already Affirmated",
				displayMessage: "Already Affirmated Content",
			};
			break;
		case ErrorMessageCode.SUBCATEGORY_NOT_FOUND:
			response = {
				statusCode: 404,
				errorMessage: "Sub Category Not Found",
				displayMessage: "Sub Category Not Found",
			};
			break;
		case ErrorMessageCode.INVALID_APP:
			response = {
				statusCode: 400,
				errorMessage: "Category or Sub-Category is invalid with app",
				displayMessage:
					"Category or Sub-Category is invalid with module",
			};
			break;
		case ErrorMessageCode.ANSWER_TAG_NOT_FOUND:
			response = {
				statusCode: 400,
				errorMessage: "Tags not found",
				displayMessage: "User answer tags not found",
			};
			break;
		case ErrorMessageCode.ACCOUNT_NOT_VERIFIED:
			response = {
				statusCode: 400,
				errorMessage:
					"Account is not Verified, Verify the Account to proceed",
				displayMessage:
					"Account is not Verified, Verify the Account to proceed",
			};
			break;
		case ErrorMessageCode.ACCOUNT_NOT_VERIFIED_IN_APPLE:
			response = {
				statusCode: 400,
				errorMessage: "Your account is not verified in apple",
				displayMessage: "Your account is not verified in apple",
			};
			break;
		case ErrorMessageCode.THIRD_PARTY_ERROR:
			response = {
				statusCode: 200,
				errorMessage: "Third Party Error",
				displayMessage: "Got Error from Third Party",
			};
			break;
		case ErrorMessageCode.INVALID_STATISTICS_CATEGORY:
			response = {
				statusCode: 400,
				errorMessage: "Invalid Statistics Category",
				displayMessage: "Invalid Statistics Category",
			};
			break;
		case ErrorMessageCode.EMAIL_NOT_VERIFIED:
			response = {
				statusCode: 400,
				errorMessage: "Email is not Verified",
				displayMessage: "Email is not Verified",
			};
			break;
		case ErrorMessageCode.PHONE_NUMBER_ALREADY_EXISTS:
			response = {
				statusCode: 409,
				errorMessage: "Phone Number Already Exists",
				displayMessage: "Phone Number Already Exists",
			};
			break;
		case ErrorMessageCode.ALREADY_ASSOCIATED_WITH_PHONE:
			response = {
				statusCode: 409,
				errorMessage:
					"This account is created using SSO or Phone number. User will not allowed to reset their password",
				displayMessage:
					"This account is created using SSO or Phone number. User will not allowed to reset their password",
			};
			break;
		case ErrorMessageCode.ALREADY_ASSOCIATED_WITH_EMAIL:
			response = {
				statusCode: 409,
				errorMessage: "User Already Exists",
				displayMessage: "User Already Exists",
			};
			break;
		case ErrorMessageCode.AGE_OUT_OF_RANGE:
			response = {
				statusCode: 409,
				errorMessage: "Age should be between 14 and 100.",
				displayMessage: "Age should be between 14 and 100.",
			};
			break;
		case ErrorMessageCode.HEIGHT_OUT_OF_RANGE:
			response = {
				statusCode: 409,
				errorMessage: "Height should be between 60 and 213.",
				displayMessage: "Height should be between 60 and 213.",
			};
			break;
		case ErrorMessageCode.WEIGHT_OUT_OF_RANGE:
			response = {
				statusCode: 409,
				errorMessage: "Weight should be between 20 and 250.",
				displayMessage: "Weight should be between 20 and 250.",
			};
			break;
		case ErrorMessageCode.WAIST_OUT_OF_RANGE:
			response = {
				statusCode: 409,
				errorMessage: "Waist should be between 50 and 150.",
				displayMessage: "Waist should be between 50 and 150.",
			};
			break;
		case ErrorMessageCode.SYSTOLIC_OUT_OF_RANGE:
			response = {
				statusCode: 409,
				errorMessage: "Systolic should be between 40 and 250.",
				displayMessage: "Systolic should be between 40 and 250.",
			};
			break;
		case ErrorMessageCode.DIASTOLIC_OUT_OF_RANGE:
			response = {
				statusCode: 409,
				errorMessage: "Diastolic should be between 30 and 200.",
				displayMessage: "User Already Exists",
			};
			break;
		case ErrorMessageCode.LOGOUT_FROM_ANOTHER_DEVICE:
			response = {
				statusCode: 403,
				errorMessage: "Logout from the other device you have logged in",
				displayMessage:
					"Logout from the other device you have logged in",
			};
			break;
		case ErrorMessageCode.YOU_CANNOT_APPROVE_EXPIRED_TIME_EVENT:
			response = {
				statusCode: 409,
				errorMessage:
					"You can't approve the past date events so it is cancelled",
				displayMessage:
					"You can't approve the past date events so it is cancelled",
			};
			break;
            case ErrorMessageCode.ADDRESS_ALREADY_EXISTS:
			response = {
				statusCode: 403,
				errorMessage: "This address already exists. Please use different address",
				displayMessage:
					"This address already exists. Please use different address",
			};
			break;
		default:
			response = {
				statusCode: 500,
				errorMessage: code,
				displayMessage: code,
			};
	}
	return response;
};
