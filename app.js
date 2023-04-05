import express from 'express';
import cors from 'cors';
import router from './routes.js'
import 'dotenv/config';
import { MongoClient } from 'mongodb';
const client = new MongoClient(process.env.CONNECTION_URI)

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.use(express.json());
app.use('/', router);

client.connect(process.env.CONNECTION_URL, { useNewUrlParser : true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, ()=>console.log(`Server Running on Port ${PORT}`)))
    .catch((error) => console.log(error.message));

export default app