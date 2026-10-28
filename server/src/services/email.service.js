import nodemailer from 'nodemailer'

const createTransporter = ()=>{
    return nodemailer.createTransport(
        {
            host:process.env.SMTP_HOST,
            port:Number(process.env.SMTP_PORT),

            secure:process.env.SMTP_PORT ==="465",
            auth:{
                user:process.env.SMTP_USER,
                pass:process.env.SMTP_PASS,
            }
        }
    )
}
export const sendVerificationEmail = async({email, otp})=>{
    const transporter = createTransporter();
    const result = await transporter.sendMail({
        from:process.env.MAIL_FROM,
        to:email,
        subject:"Verify your email address",
        text:`Your OTP is ${otp}. It will expire in 5 minutes.`,
        html:`
          <div style="font-family: Arial, sans-serif; max-width: 480px; margin: auto;">
        <h2>Verify your email</h2>
        <p>Use the following code to verify your email address:</p>
        <h1 style="letter-spacing: 8px;">${otp}</h1>
        <p>This code expires in 5 minutes.</p>
        <p>If you did not request this, you can ignore this email.</p>
      </div>
    
        `

    })
    return result;
}
