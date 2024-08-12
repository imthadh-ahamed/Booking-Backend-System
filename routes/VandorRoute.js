import express from "express";
import { GetVandorProfile, UpdateVandorProfile, UpdateVandorService, VandorLogin } from "../controllers/index.js";

const router = express.Router();

router.post('/login', VandorLogin);
router.get('/profile', GetVandorProfile)
router.patch('/profile', UpdateVandorProfile)
router.patch('/service', UpdateVandorService)

// Route for the Vandor
router.get('/', (req, res, next) => {
    res.json({ message: "Hello from Vandor"});
});

export { router as VandorRoute };