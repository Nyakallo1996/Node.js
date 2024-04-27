const express = require('express');

const app = new express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const newPostController = require("./controllers/newPost");
const homeController = require("./controllers/home");
const storePostController = require("./controllers/storePost");
const getPostController = require("./controllers/getPost");
const validateMiddleWare = require("./middleware/validationMiddleware");
const BlogPost = require('./models/BlogPost.js');
const newUserController = require("./controllers/newUser")
const storeUserController = require("./controllers/storeUser");
const loginController = require("./controllers/login");
const loginUserController = require("./controllers/loginUser");
 
const Schema = mongoose.Schema;
app.use(fileUpload());

mongoose.connect('mongodb://127.0.0.1/my_database', {useNewUrlParser: true});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.listen(3000, () => {
    console.log("App listening on port 3000");
});

const customMiddleWare = (req, res, next) => {
    console.log("Custom middle ware called")
    next()
}

app.get("/auth/register", newUserController);

app.post("/users/register", storeUserController);

app.get("/auth/login", loginController);

app.post("/users/login", loginUserController)









app.use(express.json()); 
app.use(express.urlencoded());

app.use(customMiddleWare)
app.use("/posts/store", validateMiddleWare)
// With app.set('view engine','ejs'), we tell Express to use EJS as our templating engine, 
// that any file ending in .ejs should be rendered with the EJS package.
app.set('view engine', 'ejs');



app.get("/", homeController);


app.get("/post/:id", getPostController);




app.get("/posts/new", newPostController);



app.post("/posts/store", storePostController);


