// Request Body Parameter

export interface RequestBody {
  /**
   * email of the Student
   */
  email?: string;
  /**
   * firstName of the Student
   */
  firstName?: string;
  /**
   * lastName of the Student
   */
  lastName?: string;
  /**
   * password of the Student
   */
  password?: string;
  /**
   * of the Student
   */
  studentId?: string;
  /**
   * phoneNo of the Student
   */
  contact?: number;
  /**
   * BloodGroup of the Student
   */
  bloodGroup?: string;
  /**
   * dateOfBirth of the Student
   */
  dateOfBirth?: string;
  /**
   * gender of the Student
   */
  gender?: string;
  /**
   * address of the Student
   */
  address?: string;
  /**
   * city of the Student
   */
  city?: string;
  /**
   * state of the Student
   */
  state?: string;
  /**
   * country of the Student
   */
  country?: string;
  /**
   * zipcode of the Student
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
