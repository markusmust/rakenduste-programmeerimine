const express = require("express");
const router = express.Router();
//const mongoose = require("mongoose");
const userController = require("./user.controller.js");
const { check, validationResult} = require("express-validator");
const jwt = require("jsonwebtoken");


const validationMiddleware = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
};

router.post("/verify", (req,res) =>{
    const bearerHeader = req.headers["authorization"];
    if(!bearerHeader) return res.send(400);
    const token = bearerHeader.split(" ")[1];
    if(!token) return res.send(400);
    jwt.verify( token, process.env.JWT_KEY, (err, decoded) => {
        if(err) {
            console.log(err);
            return res.status(401).send(err);
        }
        res.status(200).send(decoded);
      });
});

router.post( "/login", userController.login);

router.post("/signup",  [
    check("email").isEmail().normalizeEmail(),
    check("password")
    .isLength({ min: 5}).withMessage("Must be atleast 5 chars long")
    .matches(/\d/).withMessage("Must contain a number")
    .not().isIn(["123", "password", "god"]).withMessage("Do not use common words as your password")
],
    validationMiddleware,
    userController.signup
    );

module.exports = router;
