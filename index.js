// Importing Dependencies
import express from "express"
import chalk from "chalk"

// Creating an Express Application
const app = express();

// Middleware and Routing
app.use('/', (req, res) => {
    return res.json("Welcome to the Booking System!!")
})

// Starting the Server
app.listen(8000, () => {
    console.log(chalk.yellow("Server is running to the port 8000"))
})