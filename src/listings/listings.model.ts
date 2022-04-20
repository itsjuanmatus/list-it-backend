import * as mongoose from 'mongoose';

export const ListingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: false,
    },
  ],

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  listers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],

  price: { type: Number, required: true },

  locations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Location',
    },
  ],

  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review',
    },
  ],

  createdAt: { type: Date, default: Date.now, required: false },
  updatedAt: { type: Date, default: Date.now, required: false },
});

export interface Listing extends mongoose.Document {
  id: string;
  title: string;
  description: string;
  products?: string[];
  owner: string;
  listers: string[];
  price: number;
  locations: string[];
  reviews: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
