const db = require("../config/db");

exports.sendMessage = async (req, res, next) => {
  try {

    const {
      name,
      email,
      subject,
      message
    } = req.body;

    await db.query(
      "INSERT INTO contacts(name,email,subject,message) VALUES (?,?,?,?)",
      [name, email, subject, message]
    );

    res.status(201).json({
      success: true,
      message: "Message sent successfully"
    });

  } catch (error) {
    next(error);
  }
};