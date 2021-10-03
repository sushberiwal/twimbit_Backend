const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


mongoose
    .connect(
        "mongodb+srv://admin:admin123@cluster0.zd8n8.mongodb.net/twimbit",
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then((db) => {
        console.log("Connected to db !!!");
    });

let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"Please provide a name"]
    },
    username:{
        type:String,
        required:[true , "Please provide a username"]
    },
    email: {
        type: String,
        required: [true,"Please provide a email"],
        unique:true
    },
    password: {
        type: String,
        required: [true,"Please set a password"],
        minlength:6,
        select:false
      },
    date: {
        type: Date,
        default: Date.now
      }
})

userSchema.pre("save" , async function(next){
    if(!this.isModified("password")){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password , salt);
    next();
})

userSchema.methods.matchPasswords = async function(password){
    console.log("inside matchpasswords");
    return await bcrypt.compare(password , this.password);
}

userSchema.methods.getSignedToken = function(){
    return jwt.sign( {id:this._id} , "12asga3gasdg45gsdg67asga89" , {expiresIn: "10min"} )
}


const userModel = mongoose.model("users", userSchema);

module.exports = userModel;