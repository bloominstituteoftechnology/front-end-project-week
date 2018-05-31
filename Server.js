//Modules
const express = require('express');
const server = express();
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require("./Routers/UserRouter")
const notesRouter = require("./Routers/NotesRouter")

//Variables 
const keyPublishable = "pk_test_vpJZ7OT67atKUohQIOAPZyxT"
const keySecret = "sk_test_aLfqAx3CG4EQnOHc5C5IhaW8";
const stripe = require("stripe")(keySecret);

//Database
let uri = 'mongodb://2940cristian:dance360@ds235840.mlab.com:35840/noteslambda';
mongoose.connect(uri, function(err, success) {
    if(err) throw err;
    console.log("Connected to DB")
})

//Middleware
server.set("view engine", "pug");
server.use(require("body-parser").urlencoded({extended: false}));
server.use(express.json());
server.use(cors());




//Routers
// server.get("/", (req,res) => {res.send('API RUNNING')})

//NOTES ROUTERS
server.use('/notes', notesRouter)

//USER ROUTER

server.use('/users', userRouter)


//STRIPE 
server.get("/", (req, res) =>
  res.render("index.pug", {keyPublishable}));

server.post("/charge", (req, res) => {
  let amount = 500;

  stripe.customers.create({
     email: req.body.stripeEmail,
    source: req.body.stripeToken
  })
  .then(customer =>
    stripe.charges.create({
      amount,
      description: "Sample Charge",
         currency: "usd",
         customer: customer.id
    }))
  .then(charge => res.render("charge.pug"));
});




server.listen(process.env.PORT || 5000);

