import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
  make: { type: String, required: true }, // e.g., "Toyota"
  model: { type: String, required: true }, // e.g., "Premio"
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  mileage: { type: Number, required: true }, // In kilometers
  fuelType: { type: String, enum: ['Petrol', 'Diesel', 'Hybrid', 'Electric'], required: true },
  transmission: { type: String, enum: ['Manual', 'Automatic'], required: true },
  condition: { type: String, enum: ['New', 'Used'], required: true },
  engineSize: { type: Number }, // In cc
  color: { type: String },
  description: { type: String },
  images: [{ type: String }], // Array of image URLs
  features: [{ type: String }], // e.g., "Airbags", "Sunroof"
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Car', carSchema);
