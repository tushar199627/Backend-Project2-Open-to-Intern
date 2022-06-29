const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const {isEmail} = require('validator');

const internSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim:true,
       validate:  [ isEmail, 'invalid email' ],
        unique:true,
        lowercase: true
    },
    mobile: {
        type: Number,
        required: true,
        trim:true,
        unique:true
    },
    collegeId: {
        type: ObjectId,
        ref: 'College',
        required: true,
        trim:true
      },
      isDeleted: {
        type: Boolean,
        default: false,
      }
    }, { timestamps: true });
    
    module.exports = mongoose.model('Intern', internSchema); 
