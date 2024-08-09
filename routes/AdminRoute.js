import express from "express";
import { CreateVandor, GetVandor, GetVandorById } from "../controllers/index.js";

const router = express.Router();

router.get('/', (req, res, next) => {
    res.json({ message: "Hello from Admin" });
});

router.post('/createVandor', CreateVandor);
router.get('/getVandors', GetVandor);
router.get('/getVandor/:id', GetVandorById);

export { router as AdminRoute };
