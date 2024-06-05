import 'dotenv/config'
import express from "express";
import connectDB from './db/db.js';
import router from './routes/form.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

try {
    await connectDB();
} catch (error) {
    console.log("Mongodb not connected:", error);
}

app.use('/form', router)


app.listen(PORT, console.log(`App listening on port ${PORT}`));