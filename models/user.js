const {Schema, model} = require('mongoose');


const userSchema = new Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    birthday:{
        type: Date,
        required: true,
    },
    type:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true 
    },
    password:{
        type: String,
        required: true
    },
    
},{
    timestamps: true
  }
);

module.exports = model('User', userSchema); ;