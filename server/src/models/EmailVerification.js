import mongoose from "mongoose"

const emailVerificationSchema = new mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true,
            unique:true,
        },
        optHash:{
            type:String,
            required:true,
            select:false,

        },
        expiresAt:{
            type:Date ,
            required: true,
        },
        attempts:{
            type:Number,
            default:0,

        },
    },
    {
        timestamps:true,
    }
)
const EmailVerification = mongoose.model(
    "EmailVerification"
, emailVerificationSchema)


export default EmailVerificaation;