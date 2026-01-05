import db from "../config/db.js";

export const getUser = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM users");
    res.status(200).json({
      success: true,
      message: "user berhasil",
      data: rows,
    });
  } catch (error) {
    console.error("Database error di getUser:", error);
    res.status(500).json({ message: "Database error", error: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const [rows] = await db.query(`SELECT * FROM users WHERE id = ${id}`);
    res.status(200).json({
      success: true,
      message: "Id user berhasil",
      data: rows,
    });
  } catch (error) {
    console.error("Database error di getUser:", error);
    res.status(500).json({ message: "Database error", error: error.message });
  }
};
export const insertUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const sql = `INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)`;

    const [result] = await db.query(sql, [name, email, password, role]);

    res.status(200).json({
      success: true,
      message: "user berhasil ditambahkan",
      data: { id: result.insertId },
    });
  } catch (error) {
    console.error("Database error di getUser:", error);
    res.status(500).json({ message: "Database error", error: error.message });
  }
};
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password, role } = req.body;

    const sql = `UPDATE users SET name = ?, email = ?, password = ?, role = ? WHERE id = ?`;
    const [result] = await db.query(sql, [name, email, password, role, id]);

    if (result.affectedRows === 0) {
      return res.status(404).send("User dengan ID tersebut tidak ditemukan");
    }

    res.status(200).json({
      success: true,
      message: "User berhasil diperbarui",
    });
  } catch (error) {
    console.error("Database error di getUser:", error);
    res.status(500).json({ message: "Database error", error: error.message });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const sql = `DELETE FROM users WHERE id = ?`;
    const [result] = await db.query(sql, [id]);

    if (result.affectedRows === 0) {
      return res.status(404).send("User dengan ID tersebut tidak ditemukan");
    }

    res.status(200).json({
      success: true,
      message: "User berhasil dihapus",
    });
  } catch (error) {
    console.error("Database error di getUser:", error);
    res.status(500).json({ message: "Database error", error: error.message });
  }
};
