import { Vandor } from "../models/index.js";
import { GeneratePassword, GenerateSalt } from "../utility/index.js";

// Creating a new Vandor
export const CreateVandor = async(req, res, next) => {
  const {
    name,
    address,
    pincode,
    foodtype,
    email,
    password,
    ownername,
    phone,
  } = req.body;

  const existingVondor = await Vandor.findOne({ email: email });

  if (existingVondor !== null) {
    return res.json({ message: "A Vandor is exist with this email ID" });
  }

  const salt = await GenerateSalt();
  const userpassword = await GeneratePassword(password, salt);

  // Create a new Vandor record in the database
  const createdVandor = await Vandor.create({
    name: name,
    address: address,
    pincode: pincode,
    foodtype: foodtype,
    email: email,
    password: userpassword,
    salt: salt,
    ownername: ownername,
    phone: phone,
    rating: 0,
    serviceavailable: false,
    coverimages: [],
  });

  // Return the created Vandor object as a JSON response
  return res.json(createdVandor);
}
export const GetVandor = async(req, res, next) => {

}
export const GetVandorById = async(req, res, next) => {

}