const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
})

userSchema.pre("save", function(next) {
    bcrypt.hash(this.password, 15, (err, hash) => {
        if(err) {
            return next(err)
        } else {
            this.password = hash;
            next()
        }
    })
})

module.exports = mongoose.model("User", userSchema)