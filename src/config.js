import * as dotenv from 'dotenv';
dotenv.config();

const PORT=process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1/MERN';

export {MONGODB_URI,PORT};

export const TOKEN_SECRET=process.env.JWT_KEY;