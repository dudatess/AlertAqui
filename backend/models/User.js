const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength:20,
        unique: true,
    },

    email: {
        type: String,
        required: true,
        maxlength: 50,
        unique: true,
    },

    adress: {
        type: String,
        maxlength: 100,
    },

    phone: {
        DDD: {
            type: String,
            maxlength: 3,
        },

        number: {
            type: String,
            maxlength: 9,
        },
    },

    password: {
        type: String,
        required: true,
        minlength: 6,
    },

},
{timestamps: true}
);

/* Virtual schema to confirm password
userSchema.virtual('confirmPassword')
  .set(function (value) {
    this._confirmPassword = value; 
  })
  .get(function () {
    return this._confirmPassword; 
  });
*/

  module.exports = mongoose.model("User", UserSchema);
