import * as mongoose from 'mongoose';

export const LocationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  place_id: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  address: { type: String, required: true },
});

export interface Location extends mongoose.Document {
  id: string;
  name: string;
  place_id: string;
  country: string;
  city: string;
  state: string;
  zip: string;
  address: string;
}
