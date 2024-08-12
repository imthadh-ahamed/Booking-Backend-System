import bcrypt from 'bcrypt'

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