const mongoose = require("mongoose")

const connectDB = async () => { 
    try { 
        const conn = await mongoose.connect("mongodb+srv://jotirmaymanik:Hadapsar@cluster0.r1zp1yv.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology :true,
           
        })
console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error ${error.message}`);
    process.exit();
    }
}



module.exports = connectDB