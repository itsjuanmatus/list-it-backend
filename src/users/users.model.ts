import * as mongoose from 'mongoose';

// Write an user model
export const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});

export interface User extends mongoose.Document {
  username: string;
  password: string;
  id: string;
}
