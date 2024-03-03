const mongoose = require("mongoose");

const mongoURI = 'mongodb+srv://bigbasket:Nprs2020@cluster1.kpcjsn4.mongodb.net/bigbasket?retryWrites=true&w=majority&appName=Cluster1'

const mongooseMongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected Successfully from mongoose');

        const fetched_data = await mongoose.connection.db.collection('food_items');
        const data = await fetched_data.find({}).toArray();
        // console.log(data);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }

}

module.exports = mongooseMongoDB;
