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
    countrys:{
        type: Object,
        required: false
    },
    links:{
        type: Object,
        required: false
    },
    height:{
        type: Number,
        required: false
    },
    startDisabled: {
        type: Boolean,
        required: false
    },
    description: {
        type: String,
        required: false
    }
    
},{
    timestamps: true
  }
);

module.exports = model('User', userSchema); 