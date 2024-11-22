// controllers/authController.js
const crypto = require("crypto");
const User = require("../models/User");
const sendEmail = require("../utils/mailer");

// Register user
exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.create({
      name,
      email,
      password,
    });

    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Login user
exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Please provide an email and password" });
  }

  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(404).json({ message: "Invalid credentials" });
    }

    const isMatch = await user.matchPasswords(password);

    if (!isMatch) {
      return res.status(404).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ token: user.getSignedToken() });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Reset password
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  var _user;

  try {
    const user = await User.findOne({ email });
    _user = user;
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
    const resetPasswordExpire = Date.now() + 10 * 60 * 1000; // 10 minutes

    user.resetPasswordToken = resetPasswordToken;
    user.resetPasswordExpire = resetPasswordExpire;
    await user.save();

    const resetUrl = `http://localhost:3000/reset-password/${resetToken}`;

    const message = `Vous avez reçu cet email car vous (ou quelqu'un d'autre) avez demandé la réinitialisation du mot de passe. \n Veuillez cliquer sur ce lien pour réinitialiser votre mot de passe: \n\n ${resetUrl}`;

    await sendEmail({
      email: user.email,
      subject: "Réinitialisation du mot de passe",
      message,
    });

    res.status(200).json({ message: "Email sent" });
  } catch (error) {
    _user.resetPasswordToken = undefined;
    _user.resetPasswordExpire = undefined;
    await _user.save();

    res.status(500).json({ message: "Email could not be sent" });
  }
};

// Logout user
exports.logout = async (req, res) => {
  res.cookie("token", "none", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });

  res.status(200).json({ message: "User logged out" });
};
