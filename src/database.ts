import mongoose from "mongoose";
import config from './config'

(async ()=> {
    try {
        const db = await mongoose.connect(`mongodb+srv://${config.MONGO_HOST}/${config.MONGO_DATABASE}`, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
    console.log('database is connected to: ', db.connection.name)
    } catch (error) {
    }
    
})( )