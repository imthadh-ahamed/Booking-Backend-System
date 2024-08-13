import { GenerateSignature, ValidatePassword } from "../utility/index.js";
import { FindVandor } from "./index.js";

export const VandorLogin = async (req, res, next) => {
    try {
      // Get the email and password from the request body
      const { email, password } = req.body;

      // Log the incoming request
      console.log("Received login request:", { email, password });

      // Check if email and password are provided
      if (!email || !password) {
        return res
          .status(400)
          .json({ message: "Email and password are required." });
      }

      // Find the Vandor with the given email
      const existingVandor = await FindVandor(null, email);

      // If the Vandor exists, validate the password
      if (existingVandor) {
        // Validate the password
        const validation = await ValidatePassword(
          password,
          existingVandor.password
        );

        if (validation) {
          // Generate a JWT signature
          const signature = await GenerateSignature({
            _id: existingVandor._id,
            email: existingVandor.email,
            name: existingVandor.name,
            foodtype: existingVandor.foodtype,
          });

          // Log successful login
          console.log("Login successful for Vandor:", existingVandor.email);

          // Return the Vandor object as a JSON response
          return res.json({ token: signature, message: "Login successful." });
        } else {
          // Return an error message for invalid credentials
          return res
            .status(401)
            .json({ message: "Invalid email or password." });
        }
      } else {
        // Return an error message if the Vandor does not exist
        return res.status(401).json({ message: "Invalid email or password." });
      }
    } catch (error) {
      console.error("Error during login:", error);
      return res
        .status(500)
        .json({
          message: "An error occurred during login. Please try again later.",
        });
    }
}

// Get Vandor Profile
export const GetVandorProfile = async (req, res, next) => {
}

// Update Vandor Profile
export const UpdateVandorProfile = async (req, res, next) => {
}

// Update Vandor Service
export const UpdateVandorService = async (req, res, next) => {
}