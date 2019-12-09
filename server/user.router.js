const express = require("express");
const router = express.Router();

const User= require("./user.model.js");
const Item = require("./item.model.js");

const {authMiddleware} = require("./middlewares.js");

router.param("userId", (req, res, next, userId) => {
    User.findById(userId, (err, user) => {
        if(err || !user) return res.status(500).send("Error on user param");
        req.user = user;
        next();
    });
});

router.param("itemId", (req, res, next, itemId) => {
    Item.findById(itemId, (err, item) => {
        if(err || !item) return res.status(500).send("Error on item param");
        req.item = item;
        next();
    });
});

// return a user object
router.get("/:userId", authMiddleware, (req, res) => {
    res.send(req.user);
});

// add an item to cart
router.put("/:userId/cart/:itemId", (req, res) => {
    req.user.cart.push(req.item._id.toString());
    req.user.save((err) => {
        if(err) {
            console.log(err);
            return res.status(500).send("Error on cart save");
        }
        res.send(200);
    });
});

// remove an item from cart
router.delete("/:userId/cart/:itemId", (req, res) => {
    const index = req.user.cart.findIndex(itemId => itemId === req.item._id.toString());
    req.user.cart.splice(index, 1);

    req.user.save((err) => {
        if(err) {
            console.log(err);
            return res.status(500).send("Error on cart save");
        }
        res.send(200);
    });
});


// Add user
router.get("/", (req, res) =>{
    User.find({}, (err, docs) =>{
        if(err){
            return handleError(err, res);
        }
        res.status(200).json(docs);
    });
});

 // Delete all users
 router.delete("/", (req, res) =>{
    User.deleteMany({}, (err, docs) =>{
        if(err){
            return handleError(err, res);
        }
        console.log(docs);
        res.send(204);
    });
});

function handleError(err, res){
    console.log(err);
    res.send(500);
}


module.exports = router;
