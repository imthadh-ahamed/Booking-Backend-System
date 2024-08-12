import { ValidatePassword } from "../utility/index.js";
import { FindVandor } from "./index.js";

export const VandorLogin = async (req, res, next) => {
    // Get the email and password from the request body
    const { email, password } = req.body;

    // Find the Vandor with the given email
    const existingVandor = await FindVandor(null, email);

    // If the Vandor exists, validate the password
    if(existingVandor !== null) {
        // Validate the password
        const validation = await ValidatePassword(password, existingVandor.password, existingVandor.salt);

        if(validation) {
            // Return the Vandor object as a JSON response
            return res.json(existingVandor);
        } else {
            // Return an error message
            return res.json({ "message": "Login credential not valid" });
        }
    }

    // Check if the Vandor exists
    return res.json({ "message": "Login credential not valid" });
}