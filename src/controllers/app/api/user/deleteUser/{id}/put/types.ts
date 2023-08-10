// Request Body Parameter

export interface RequestBody {}
// Query Parameter

export interface QueryParams {}
// PathParams Parameter

export interface PathParams {
  id?: string;
}
// Response Body

/**
 * This schema defines the request to delete user account
 */
export interface ResponseBody {
  success?: boolean;
  statusCode?: number;
  /**
   * Success Message of the request
   */
  successMessage?: string;
}
