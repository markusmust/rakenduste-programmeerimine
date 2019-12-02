const express = require("express");
const router = express.Router();
//const mongoose = require("mongoose");
const User= require("./user.model.js");


router.get("/api/users", (req, res) =>{
    console.log("body", req.body);
    User.find({}, (err, docs) => {
        if(err) return handleError(err, res);
        res.status(200).json(docs);
    });
});

 router.post("/api/users/signup", (req, res) =>{
    User.signup(req.body)
    .then( user =>{
        res.status(200).json(user);
    })
    .catch ( err =>{
        return handleError(err, res);
    });
 });

router.post("/api/users/login", (req, res) =>{
    User.login(req.body)
    .then( user =>{
        res.json(user);
    })
    .catch( err =>{
        handleError(err, res);
    });
});


 // Delete all users
router.delete("/api/users", (req,res) =>{
    User.deleteMany({}, (err, docs) =>{
        if(err) return handleError(err, res);
        console.log("Deleted many users!");
        res.send(204);
    });
});

function handleError(err, res){
    console.log(err);
    res.send(500);
}


module.exports = router;
