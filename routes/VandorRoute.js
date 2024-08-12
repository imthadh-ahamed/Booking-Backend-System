import express from "express";
import { VandorLogin } from "../controllers/index.js";

const router = express.Router();

router.post('/login', VandorLogin);


// Route for the Vandor
router.get('/', (req, res, next) => {
    res.json({ message: "Hello from Vandor"});
});

export { router as VandorRoute };