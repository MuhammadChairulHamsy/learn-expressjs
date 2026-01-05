import db from "../config/db.js";

export const getUser = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT id, name, email, role, created_at FROM users");
    res.status(200).json({
      success: true,
      message: "user berhasil",
      data: rows 
    });
  } catch (error) {
    console.error("Database error di getUser:", error);
    res.status(500).json({ message: "Database error", error: error.message });
  }
};