// Request Body Parameter

export interface RequestBody {}
// Query Parameter

export interface QueryParams {}
// PathParams Parameter

export interface PathParams {}
// Response Body

export interface ResponseBody {
  /**
   * Success Status
   */
  success?: boolean;
  /**
   * Success Status Code
   */
  statusCode?: number;
  /**
   * List of users
   */
  data?: {
    _id?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    contact?: number;
    gender?: string;
    dateOfBirth?: string;
    bloodGroup?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    zipcode?: number;
    isDeleted?: boolean;
  }[];
  /**
   * Success Message of the request
   */
  successMessage?: string;
}
