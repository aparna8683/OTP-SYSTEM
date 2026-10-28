import {randomInt, createHmac, timingSafeEqual} from 'node:crypto'

export const generateOTP = () =>{ 

    return randomInt(0, 1_000_000).toString().padStart(6, "0");


} ;

export const hashOTP =(otp)=>{
    const secret = process.env.OTP_SECRET;

    if(!secret){
        throw new Error("OTP_SECRET is missing from env variables");

    }

    return createHmac("sha256", secret).update(otp).digest("hex")



}
 export const verifyOTP = (otp, storedHash) => {
  const calculatedHash = hashOTP(otp);

  const calculatedBuffer = Buffer.from(calculatedHash, "hex");
  const storedBuffer = Buffer.from(storedHash, "hex");

  if (calculatedBuffer.length !== storedBuffer.length) {
    return false;
  }

  return timingSafeEqual(calculatedBuffer, storedBuffer);
};