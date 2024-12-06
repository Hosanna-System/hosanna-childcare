// controllers/authController.js
import crypto from "crypto";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import sendEmail from "../utils/mailer.js";

// Register user
export const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
    });

    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Login user
export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Please provide an email and password" });
  }
  try {
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );
      res.json({ token });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Reset password
export const forgotPassword = async (req, res) => {
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

    const resetUrl = `${process.env.CLIENT_URL}/reset-password/${resetToken}`;

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
export const logout = async (req, res) => {
  res.cookie("token", "none", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });

  res.status(200).json({ message: "User logged out" });
};
