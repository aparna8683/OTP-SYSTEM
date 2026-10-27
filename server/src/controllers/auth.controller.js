export const signup= async(req, res)=>{
    const {name, email, password} = req.body 

    if(!name || !email || !password){
        return res.status(400).json({
            success: false,
            message:"Name, email and passwords are required"
        })
    }
    return res.status(200).json({
        success:true,
        message:"User registered successfully",
        nextStep:"account creation will be implemented next"
    })
}