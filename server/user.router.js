const express = require("express");
const router = express.Router();
//const mongoose = require("mongoose");
const User= require("./user.model.js");


// Add user
router.get("/users", (req, res) =>{
    console.log("body", req.body);
    User.find({}, (err, docs) => {
        if(err) return handleError(err, res);
        res.status(200).json(docs);
    });
});

 // Delete all users
router.delete("/users", (req,res) =>{
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
