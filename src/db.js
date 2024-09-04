import mongoose from 'mongoose';
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1/MERN';

const connectDb = async ()=>{
    try{
        await mongoose.connect(MONGODB_URI);
        console.log("DB is connected")
        console.log(process.env.JWT_KEY)
    }catch(error){
        console.log(error);
    }
};

export { connectDb };




