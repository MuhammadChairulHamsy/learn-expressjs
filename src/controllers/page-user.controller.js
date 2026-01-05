import db from "../config/db.js";

export const getUserPage = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM users");
    console.log("Query berhasil! Data:", rows); 

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

// export const getUserPageById = async (req, res) => {
//   try {
//     const id = req.params.id
//     const [rows] = await db.query(`SELECT * FROM users WHERE id = ${id}`);
//     console.log("Query berhasil! Data:", rows); 

//     res.send(`
//       <h1>Berhasil Load Data id!</h1>
//       <pre>${JSON.stringify(rows, null, 2)}</pre>
//     `);
//   } catch (error) {
//     console.error(error.stack);
//     res.status(500).send(`
//       <h3 style="color:red">Error!</h3>
//       <pre>${error.message}</pre>
//     `);
//   }
// };

