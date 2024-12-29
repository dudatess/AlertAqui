const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max:20,
        unique: true,
    },

    email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
    },

    adress: {
        type: String,
        max: 100,
    },

    phone: {
        DDD: {
            type: String,
            max: 3,
        },

        number: {
            type: String,
            max: 9,
        },
    },

    password: {
        type: String,
        required: true,
        min: 6,
    },

},
{timestamps: true}
);

// Virtual schema to confirm password
userSchema.virtual('confirmPassword')
  .set(function (value) {
    this._confirmPassword = value; 
  })
  .get(function () {
    return this._confirmPassword; 
  });

  module.exports = mongoose.model("User", UserSchema);
