import db from "../config/db.js";

export const getUserPage = async (req, res) => {
  console.log("Request masuk ke showUsersPage"); // ini harus muncul di terminal

  try {
    const [rows] = await db.query("SELECT id, name, email, role, created_at FROM users");
    console.log("Query berhasil! Data:", rows); // cek apakah sampai sini

    res.send(`
      <h1>Berhasil Load Data!</h1>
      <pre>${JSON.stringify(rows, null, 2)}</pre>
      <p>Kalau muncul data di atas, berarti controller aman.</p>
    `);
  } catch (error) {
    console.error("ERROR DI showUsersPage:", error.message);
    console.error(error.stack);
    res.status(500).send(`
      <h3 style="color:red">Error!</h3>
      <pre>${error.message}</pre>
    `);
  }
};