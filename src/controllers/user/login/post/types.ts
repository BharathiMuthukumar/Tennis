// Request Body Parameter

export interface RequestBody {
  /**
   * Email of the user
   */
  email: string;
  /**
   * Password defined by the user
   */
  password: string;
}
// Query Parameter

export interface QueryParams {}
// PathParams Parameter

export interface PathParams {}
// Response Body

export interface ResponseBody {
  success?: boolean;
  statusCode?: number;
  /**
   * Token used to authenticate other endpoints. Pass 'Authentication' in Header.
   */
  accessToken?: string;
  /**
   * Refresh Token used to generate new access token
   */
  refreshToken?: string;
}
