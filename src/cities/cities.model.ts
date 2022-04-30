import * as mongoose from 'mongoose';

/* 
{"_id":{"$oid":"62673706c27de29a7f644d52"},"city_id":{"$numberInt":"3040051"},"name":"les Escaldes","ascii_name":"les Escaldes","alternate_names":["Ehskal'des-Ehndzhordani","Escaldes","Escaldes-Engordany","Les Escaldes","esukarudesu=engorudani jiao qu","lai sai si ka er de-en ge er da","Эскальдес-Энджордани","エスカルデス＝エンゴルダニ教区","萊塞斯卡爾德-恩戈爾達","萊塞斯卡爾德－恩戈爾達"],"country_code":"AD","timezone":"Europe/Andorra","country":{"country_id":{"$numberInt":"3041565"},"iso":"AD","country":"Andorra","currency_code":"EUR","currency_symbol":"€"}} */
export const CitySchema = new mongoose.Schema({
  city_id: { type: Number, required: true },
  name: { type: String, required: true },
  ascii_name: { type: String, required: true },
  alternate_names: { type: [String], required: true },
  country_code: { type: String, required: true },
  timezone: { type: String, required: true },
  country: {
    country_id: { type: Number, required: true },
    iso: { type: String, required: true },
    country: { type: String, required: true },
    currency_code: { type: String, required: true },
    currency_symbol: { type: String, required: true },
  },
});

export interface City extends mongoose.Document {
  city_id: number;
  name: string;
  ascii_name: string;
  alternate_names: string[];
  country_code: string;
  timezone: string;
  country: {
    country_id: number;
    iso: string;
    country: string;
    currency_code: string;
    currency_symbol: string;
  };
}
