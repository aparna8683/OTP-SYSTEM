import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Name is required"],
        trim:true,

    },
    
        email:{
            type:String,
            required:[true, "Email is required"],
            unique:true,
            lowercase:true,
            trim:true,
        },
        password:{
            type:string,
            required:[true, "password is required"],
            select:false,
        },

        isEmailVerified:{
            type:boolean,
            default:false,

        },
        timestamps:true,

        
    
 
}
);
const user = mongoose.model("User", userSchema)
export default user