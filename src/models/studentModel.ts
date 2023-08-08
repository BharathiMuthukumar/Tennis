import mongoose from "mongoose";
import { Schema, model, Types } from "mongoose";
export interface IStudents {

    _id?: Types.ObjectId;
    save: any;
    firstName?: string;
	lastName?: string;
    email?: string;
	password?: string;
    studentId?: string;
    dateOfBirth?: Date;
    gender?: string;
    bloodGroup?: string;
    contact?: number;
    department?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    zipcode?: number;
    isDeleted?: boolean;


}
const studentSchema =new Schema<IStudents>({
    firstName: {
        require : true,
        type: String
    },
    lastName: {
        require : true,
        type: String
    },
    email : {
        require : true,
        type: String,
        unique : true
    },
    password : {
        require : true,
        type: String,
    },
    contact :{
        require : true,
        type: Number
    },
    studentId : {
        type: String,
        unique : true,
        require : true,
    },
    dateOfBirth:{
        type: Date,
        require : true,
        
    },
    gender:{
        require : true,
        type: String
    },
    bloodGroup:{
        require : true,
        type: String
    },
    department:{
        require : true,
        type: String
    },
    address: {
        type: String,
        require : true,
    },
    city: {
        type: String,
        require : true,
    },
    state: {
        type: String,
        require : true,
    },
    country: {
        type: String,
        require : true,
    },
    zipcode: {
        type: Number,
        require : true,
    },
    isDeleted : {
        type: Boolean,
        require : true,
    }
}
)

export default model<IStudents>('StudentInfo', studentSchema)