import mongoose from 'mongoose'
const connectDB = async()=>{
    try{
        const connection=await mongoose.connect(process.env.MONGO_URI)
          console.log("MONGO Connection successful")

       }

    catch(error){
        console.log("MonoDB connection failed:", error.message)
        process.exit(1);

    }

}
export default connectDB
