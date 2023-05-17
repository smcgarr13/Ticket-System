const {Schema,model} = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
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
        minlength: 5,
    },
    questions:[
        {
            type: String,
            trim: true, 
        }
    ],
    comments:[
        {
            type:String,
            trime: true,
        }
    ]

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
module.exports = User; 

