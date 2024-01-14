const mongoose = require("mongoose");

require("dotenv").config();

const dbconnect = () => {
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(() => {console.log("Db ka Connection Successful")})
    .catch( (error) => {
        console.log("issue in db connection");
        console.error(error.message);
        // iska matlab 
        process.exit(1);
} );
}



module.exports = dbconnect;