import * as mongoose from 'mongoose';

export const CountrySchema = new mongoose.Schema({
  iso: { type: String, required: true },
  country: { type: String, required: true },
  capital: { type: String, required: true },
  currency_code: { type: String, required: true },
  currency_name: { type: String, required: true },
  currency_symbol: { type: String, required: true },
  phone: { type: String, required: true },
  postal_code_format: { type: String, required: true },
  postal_code_regex: { type: String, required: true },
  languages: { type: [String], required: true },
  country_id: { type: Number, required: true },
  cities: { type: [{ city_id: Number, name: String }], required: true },
});

export interface Country extends mongoose.Document {
  iso: string;
  country: string;
  capital: string;
  currency_code: string;
  currency_name: string;
  currency_symbol: string;
  phone: string;
  postal_code_format: string;
  postal_code_regex: string;
  languages: string[];
  country_id: number;
  cities: { city_id: number; name: string }[];
}
