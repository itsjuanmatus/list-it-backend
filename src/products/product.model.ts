import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  brandModel: { type: String, required: true },
  year: { type: Number, required: false },
  brand: { type: String, required: false },
  color: { type: String, required: false },
  serialNumber: { type: String, required: false },
  photos: { type: Array, required: false },
  tags: { type: Array, required: false },
  weightLbs: { type: Number, required: false },
  weightKg: { type: Number, required: false },
  dimensionsIn: { type: Array, required: false },
  dimensionsCm: { type: Array, required: false },
  condition: { type: String, required: false },
  category: { type: String, required: false },
  subCategory: { type: String, required: false },
});

export interface Product extends mongoose.Document {
  id: string;
  title: string;
  description: string;
  price: number;
  brandModel: string;
  year?: number;
  brand?: string;
  color?: string;
  serialNumber?: string;
  photos?: string[];
  tags?: string[];
  weightLbs?: number;
  weightKg?: number;
  dimensionsIn?: string;
  dimensionsCm?: string;
  condition?: string;
  category?: string;
  subcategory?: string;
}
