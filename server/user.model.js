const mongoose = require("mongoose");
const bcrpyt = require("bcrypt");

const userSchema = new mongoose.Schema({
    email: {type: String, required:true ,unique: true},
    hash: {type: String, required:true},
    createdAt: {type: Date, default: Date.now},
});

//login
userSchema.statics.login = function({email, password}){
    return new Promise((resolve, reject) =>{
        this.findOne({email}, (err, doc)=>{
            if(err) return reject(err);
            if(doc === null) return reject("User not found");
            bcrpyt.compare(password, doc.hash, function(err, result) {
                if(err) return reject(err); 
                resolve(result);
            });
        });
    });    
};


//create user
userSchema.statics.signup = function({email, password}){
    return new Promise((resolve, reject) =>{
        bcrpyt.hash(password, 10, function(err, hash) {
            if(err) return reject(err);
            const user = new User({email, hash});
            user.save(err =>{
                if(err) return reject(err);
                resolve(user);
            });
        });
    });
};


const User = mongoose.model("User", userSchema);

module.exports = User;
