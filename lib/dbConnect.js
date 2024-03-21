import mongoose from 'mongoose';

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    console.log("=> veritabanı zaten bağlı")
    return;
  }
  try{
      
      const db = await mongoose.connect(process.env.MONGODB_URI);
      connection.isConnected = db.connections[0].readyState;
      console.log("=> Veritabanı bağlantısı başarılı");
    } catch (error){
        
        console.log("=> Veritabanı bağlantısı başarısız: " + error);
  }
}

export default dbConnect;