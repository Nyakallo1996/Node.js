const User = require("../models/User.js");
const path = require("path");

module.exports = async (req, res) => {
    try {
        const user = await User.create(req.body);
       
        res.redirect('/');
    } catch (error) {
        // Handle the error (e.g., log it or send an error response)
        console.error('Error creating user:', error);
        res.status(500).redirect("/auth/register");
        
    }
};


