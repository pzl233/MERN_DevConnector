const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true, 
            useCreateIndex: true,
            useFindAndModify: false
            },
        );
        
        console.log('MongoDB connected...');
    } catch(err) {
        console.err(err.message);
        // Exit preocess with failure.
        process.exit(1);
    }
};

module.exports = connectDB;