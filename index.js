// Importing Dependencies
import express from "express"
import chalk from "chalk"
import { AdminRoute, VandorRoute } from "./routes/index.js";  

// Creating an Express Application
const app = express();

// Middleware and Routing
// app.use('/', (req, res) => {
//     return res.json("Welcome to the Booking System!!")
// })

app.use('/admin', AdminRoute);
app.use('/vandor', VandorRoute);

// Starting the Server
app.listen(8000, () => {
    console.log(chalk.yellow("Server is running to the port 8000"))
})