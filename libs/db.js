const mongoose = require("mongoose");
const dbUrl = `mongodb://localhost:27017/` + (process.env.DB_NAME || 'abt')

module.exports = async () => {
    try {
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
    } catch (error) {
        console.log("DB error");
        console.log(error.message);
        //exists process with failure
        process.exit(1);
    }
};
