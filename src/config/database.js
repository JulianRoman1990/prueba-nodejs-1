const mongoose = require('mongoose');

const database = async () => {
    try{
        await mongoose
        .connect('mongodb+srv://julianroman:1073159088@cluster720.b7detk0.mongodb.net/')
        .then(() => console.log('connected to the database'))
        .catch((err) => console.log(err));
    }catch (e){
        console.error('error connecting to the database', e);
        process.exit(1);

    }
};

module.exports = database;