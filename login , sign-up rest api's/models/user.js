var mongoose=require('mongoose');
const UserSchema= mongoose.Schema({
    email:{
        type:String,
        require: true
    },
    password:{
        type:String,
        require: true
    }
});
module.exports=User=mongoose.model('UserSchema', UserSchema);