import express from 'express';
import cors from 'cors';
import router from './routes.js'
import 'dotenv/config';
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.use(express.json());
app.use('/', router);

app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});

export default app