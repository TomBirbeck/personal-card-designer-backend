import express from "express";
// import { MongoClient } from 'mongodb';
import 'dotenv/config';
import { addNewDesign, findDesigns } from "./models.js";

const router = express.Router();

router.get('/', (req, res, next) => {
    try {
        res.send('Hello World')
    } catch (error) {
        res.json({ success : false, data : error})
    }
    next()
})

router.get('/designs', async (req, res, next) => {
    try {
        const data = await findDesigns("u_card", "designs");
        res.json({success: true, data: data})
    } catch(error) {
        res.json({success: false, data: error})
    }
    next()
})

router.post('/designs', async (req, res, next) => {
    try {
        const data = await addNewDesign(req.body)
        res.json({success: true, data: data})
    } catch (error) {
        res.json({success: false, data: error})
    }
    next()
})

export default router;