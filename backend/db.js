
const mongoose = require("mongoose"); 

module.exports = () => {
    const connectionParams = {
        useNewUrlParser:false,
        useUnifiedTopology: false,
    };
    try {
        mongoose.connect(process.env.DB, connectionParams);
        console.log("Backend Database Server connected Successfully");
    } catch (error) {
        console.log(error);
        console.log("No Connection To Backened database Server!");
    }
};