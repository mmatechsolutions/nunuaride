import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import Car from './schema.js';

const app =express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017nunuaride')
.then( ()=> console.log('connected to db Atlas'))
.catch( (err) => console.log(`Database connection error:`,{err}))


const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null, 'uploads/');
    },
    filename:(req,file,cb) =>{
        cb(null, Date.now() +path.extname(file.originalname));
    }
});

const upload  = multer({storage:storage});

// POST route to handle car listing data & image upload
app.post("/add", upload.array("images", 5), (req, res) => {
    try {
        const { make, model, year, mileage, fuelType, transmission, condition, engineSize, color, description, features } = req.body;

        // Construct image URLs
        const imageUrls = req.files.map(file => `http://localhost:5000/uploads/${file.filename}`);

        const carData = new Car( {
            make,
            model,
            year,
            mileage,
            fuelType,
            transmission,
            condition,
            engineSize,
            color,
            description,
            features,
            images: imageUrls
        });

        console.log("Received car data:", carData);
        res.json({ success: true, message: "Car added successfully!", data: carData });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ success: false, message: "An error occurred." });
    }
});

// Serve uploaded images
app.use("/uploads", express.static("uploads"));

app.listen(5000, () => {
    console.log('port 5000');
});