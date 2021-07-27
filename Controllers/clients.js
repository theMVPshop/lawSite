const mysql = require("mysql");
const pool = require("../sql/connect");
const { handleSQLError } = require("../sql/error");


//works with Postman
const getAllClients = (req, res) => {
  pool.query("SELECT * FROM clients", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

// works with Postman
const createClients = (req, res) => {
  console.log(`new client`);
  const {
    client_name,
    client_email,
    practice_area,
    client_message,

  } = req.body;
  let sql =
    "INSERT INTO clients ( client_name, client_email, practice_area, client_message) VALUES ( ?, ?, ?, ?)";
  sql = mysql.format(sql, [
    client_name,
    client_email,
    practice_area,
    client_message,
  ]);              

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ client_id: results.insertId });
  });

};

// works with postman
const  updateClientById = (req, res) => {
  const { client_name, client_email, practice_area } = req.body;
  let sql =
    "UPDATE clients SET  client_name = ?, client_email = ?, practice_area = ? WHERE client_id = ?";
  sql = mysql.format(sql, [
    client_name,
    client_email,
    practice_area,
    req.params.id
  ]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.status(200).json('message: update successful');
  });
};

// works with postman
const deleteClientById = (req, res) => {
  let sql = "DELETE FROM ?? WHERE ?? = ?";
  let replacements = ["clients", "client_id", req.params.id];
    sql = mysql.format(sql, replacements);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.status(200).json({ message: `Client deleted` });
  });
};






module.exports = {
  getAllClients,
  createClients,
  deleteClientById,
  updateClientById
}