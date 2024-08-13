import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { VandorPayload } from '../dto/index.js'
import dotenv from 'dotenv';

dotenv.config();

// Generate salt
export const GenerateSalt = async() => {
    // Generate a new salt
    return await bcrypt.genSalt()
}

// Generate password
export const GeneratePassword = async(password, salt) => {
    // Hash the password
    return await bcrypt.hash(password, salt);
}

// Validate password
export const ValidatePassword = async(enteredPassword, savedPassword) => {
    return await bcrypt.compare(enteredPassword, savedPassword);
}

// Generate signature
export const GenerateSignature = async (VandorPayload) => {
    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET is not defined");
      process.exit(1);
    }
  // Generate a new signature
  const signature = jwt.sign(VandorPayload, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return signature;
};