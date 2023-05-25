const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true, 
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
        type: String,
        required: true,
    },
    questions:[
        // {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: 'Question',
        // }
    ],
    comments:[
        // {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: 'Comment',
        // }
    ],

});


// Middleware pre-save to create password
UserSchema.pre('save',async function(next){
   if (this.isNew || this.isModified('password')) {
        // Tentative hash addition for password not sure if this can be kept or has to be changed. 
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
      }
    
      next();
});
// Compare incoming password with the hashed password. 
UserSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
const User = mongoose.model('User', UserSchema);

module.exports = User 

