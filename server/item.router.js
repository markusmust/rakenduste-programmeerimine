const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Item = require("./item.model.js");

//itemi delete
router.delete("/items/:itemId", (req, res) =>{
    Item.deleteOne({"_id": mongoose.Types.ObjectId(req.params.itemId)}, (err)=>{
        if(err) return res.send(500);
        console.log("save success");
        return res.send(204);
    });
});


/* 
    router.post("/items", (req, res) =>{
    const props = {
        imgSrc: "google.com",
        title: "phone red",
        price: 200,
        category: "phones",
    }; 
 
     const item1 = new Item(props);
    item1.save( err =>{
        if(err){
            console.log("Error:",err);
            res.send(500);
            return;
        }
        console.log("Success Create!");
        res.send(201);
    });
}); 
 */
// return an item
router.get("/items/:itemId", (req, res)=>{
    Item.findById(req.params.itemId, function (err,item){
        if(err){
            console.log("error: ", err);
            res.status(500).send(err);
        }
        res.send(item);
    });
});

// returns all items
router.get("/items", (req, res)=>{
    Item.find({}, function(err, item) {
        if(err){
            console.log("Error", err);
            res.status(500).send(err);
            return;
        }
        res.send(item);
    });
});

module.exports = router;
