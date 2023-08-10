// Request Body Parameter

export interface RequestBody {
  /**
   * email of the user
   */
  email?: string;
  /**
   * firstName of the user
   */
  firstName?: string;
  /**
   * lastName of the user
   */
  lastName?: string;
  /**
   * password of the user
   */
  password?: string;
  /**
   * phoneNo of the user
   */
  contact?: number;
  /**
   * BloodGroup of the user
   */
  bloodGroup?: string;
  /**
   * dateOfBirth of the user
   */
  dateOfBirth?: string;
  /**
   * gender of the user
   */
  gender?: string;
  /**
   * address of the user
   */
  address?: string;
  /**
   * city of the user
   */
  city?: string;
  /**
   * state of the user
   */
  state?: string;
  /**
   * country of the user
   */
  country?: string;
  /**
   * zipcode of the user
   */
  zipcode?: number;
  /**
   * delete status of the account
   */
  isDeleted?: boolean;
}
// Query Parameter

export interface QueryParams {}
// PathParams Parameter

export interface PathParams {
  _id?: string;
}
// Response Body

export interface ResponseBody {
  success?: boolean;
  statusCode?: number;
  /**
   * Success Message of the request
   */
  successMessage?: string;
}
