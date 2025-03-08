const mongoose = require('mongoose');
require('dotenv').config();

const testConnection = async () => {
    try {
        console.log('MongoDB URI:', process.env.MONGODB_URI);
        console.log('Attempting to connect to MongoDB...');
        
        await mongoose.connect(process.env.MONGODB_URI);
        
        console.log('Successfully connected to MongoDB!');
        console.log('Connection Host:', mongoose.connection.host);
        
        // Create a test collection
        const testCollection = mongoose.connection.collection('test');
        
        // Insert a test document
        await testCollection.insertOne({ test: 'data' });
        console.log('Successfully inserted test document');
        
        // Clean up
        await testCollection.deleteMany({});
        console.log('Cleaned up test data');
        
        await mongoose.connection.close();
        console.log('Connection closed successfully');
        
    } catch (error) {
        console.error('Connection test failed:', error);
    }
    process.exit(0);
};

testConnection(); 