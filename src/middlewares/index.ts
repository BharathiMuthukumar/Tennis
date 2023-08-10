import authenticator from "./validateToken";
import cors from "./cors";
import expresserrorhandler from "./expresserrorhandler";
export const validationAuthenticator = authenticator;
export default  {
    expresserrorhandler,
    cors
}