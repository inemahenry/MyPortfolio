const db = require("../config/db");

exports.getProjects = async (req, res, next) => {
  try {

    const [projects] = await db.query(
      "SELECT * FROM projects ORDER BY id DESC"
    );

    res.status(200).json(projects);

  } catch (error) {
    next(error);
  }
};