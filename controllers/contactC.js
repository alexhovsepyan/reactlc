const {
  emailValidation,
  messageValidation
} = require("../helpers/validations");
const errorHandler = require("../helpers/errorHandler");
const User = require("../models/users");

const contactC = async (req, res) => {
  //error object
  const errorS = {};
  // message params
  const { email, name, massage } = req.body;
  //   console.log(req.body);

  // validation email
  const emailVal = await emailValidation(email);
  // validation message
  const messageVal = await messageValidation(massage);

  if (emailVal.type === "error") {
    errorS.type = "error";
    errorS.email = await errorHandler("error", emailVal.message);
  }

  if (messageVal.type === "error") {
    errorS.type = "error";
    errorS.message = await errorHandler("error", messageVal.message);
  }
  if (errorS.type === "error") {
    // send error
    res.status(400).json(errorS);
  } else {
    // find user
    const userEmail = await User.findOne({ email });
    if (userEmail === null) {
      // create user
      const newUser = new User({
        email,
        name,
        messages: [massage]
      });

      try {
        await newUser.save();
        await res.status(201).json({
          type: "success",
          email,
          name,
          messages: [massage]
        });
      } catch (e) {
        await res.status(400).json({
          type: "error",
          message: "Something went wrong"
        });
      }
    } else {
      try {
        // update user
        let newUser = {
          email: userEmail.email,
          name: userEmail.name,
          messages: [massage, ...userEmail.messages]
        };
        await userEmail.set(newUser);
        await userEmail.save();
        await res.status(201).json({
          type: "success",
          ...newUser
        });
      } catch (e) {
        // console.log(e);
        await res.status(400).json({
          type: "error",
          message: "Something went wrong"
        });
      }
    }
  }
};

module.exports = {
  contactC
};
