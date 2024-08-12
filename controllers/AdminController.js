import { Vandor } from "../models/index.js";
import { GeneratePassword, GenerateSalt } from "../utility/index.js";

// Find a Vandor by ID or email
export const FindVandor = async (id, email) => {
  if (email) {
    // Find a Vandor by email
    return await Vandor.findOne({ email: email });
  } else {
    // Find a Vandor by ID
    return await Vandor.findById(id);
  }
};

// Creating a new Vandor
export const CreateVandor = async (req, res, next) => {
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

  const existingVondor = await FindVandor(null, email);

  if (existingVondor !== null) {
    return res.json({ message: "A Vandor is exist with this email ID" });
  }

  // Generate a new salt and hash the password
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
};

// Get all Vandors
export const GetVandor = async (req, res, next) => {
  // Fetch all Vandors from the database
  const vandors = await Vandor.find();

  // Return the Vandors as a JSON response
  if (vandors !== null) {
    return res.json(vandors);
  }

  // Return a message if no Vandors are found
  return res.json({ message: "No Vandors found" });
};

// Get Vandor by ID
export const GetVandorById = async (req, res, next) => {
  // Fetch the Vandor by ID from the database
  const vandorID = req.params.id;
  const vandor = await FindVandor(vandorID);

  // Return the Vandor as a JSON response
  if (vandor !== null) {
    return res.json(vandor);
  }

  // Return a message if no Vandor is found with this ID
  return res.json({ message: "No Vandor found with this ID" });
};
