import express from "express";
import { MongoClient } from 'mongodb';
import 'dotenv/config';
import { addNewDesign, findDesigns, listDatabases } from "./models.js";

const router = express.Router();

// router.get('/', async (req, res, next) => {

//         const client = new MongoClient(process.env.CONNECTION_URI);
        
//         try {
//             await client.connect();
//             const data = await listDatabases(client);
//             res.json({success: true, message: "client connection working"})
            
//         } catch(e) {
//             console.error(e);
//         } finally {
//             await client.close();
//         }

//         next()
//     })
    
    router.get('/', async (req, res, next) => {

    const client = new MongoClient(process.env.CONNECTION_URI);

    try {
        await client.connect()
        const data = await findDesigns("u_card", "designs");
        res.json({success: true, data: data})
    } catch(error) {
        res.json({success: false, data: error})
    } finally {
        await client.close()
    }

    next()
})

router.post('/designs', async (req, res, next) => {

    const client = new MongoClient(process.env.CONNECTION_URI);

    try {
        await client.connect()
        const data = await addNewDesign(req.body)
        res.json({success: true, data: data})
    } catch (error) {
        res.json({success: false, data: error})
    } finally {
        await client.close()
    }

    next()
})

export default router;