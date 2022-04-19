import * as mongoose from 'mongoose';

// Write an user model
export const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: false,
    },
  ],
  listings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Listing',
      required: false,
    },
  ],
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  phoneNumber: { type: String, required: false },
  address: { type: String, required: false },
  city: { type: String, required: false },
  state: { type: String, required: false },
  zipCode: { type: String, required: false },
  country: { type: String, required: false },
  lastLogin: { type: Date, required: false },
  createdAt: { type: Date, default: Date.now, required: false },
  updatedAt: { type: Date, default: Date.now, required: false },
});

export interface User extends mongoose.Document {
  id: string;
  username: string;
  password: string;
  email: string;
  products?: string[];
  listings?: string[];
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  lastLogin?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
