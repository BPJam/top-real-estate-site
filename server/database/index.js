const mongoose = require('mongoose');
require('dotenv').config();

exports.Database = async function Database() {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        };

        await mongoose.connect(process.env.DB_CONN, connectionParams);
    } catch (error) {
        console.log(`Error: Can\'t connect to database!`);
        throw error;
    }
}
