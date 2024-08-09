// Importing Dependencies
import express from "express"
import chalk from "chalk"
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { AdminRoute, VandorRoute } from "./routes/index.js";  

// Creating an Express Application
const app = express();

// Load environment variables from a .env file into process.env
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

// Middleware and Routing
// app.use('/', (req, res) => {
//     return res.json("Welcome to the Booking System!!")
// })

app.use('/admin', AdminRoute);
app.use('/vandor', VandorRoute);

// MongoDb Connection
mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => {
    console.log(chalk.yellow("MongoDB Connected"));
    // console.log(result)
  })
  .catch((err) => {
    console.error(chalk.red("Failed to connect to MongoDB"), err);
  });

// Starting the Server
app.listen(8000, () => {
    console.log(chalk.yellow("Server is running to the port 8000"))
})