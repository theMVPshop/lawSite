const mysql = require("mysql");
const pool = require("../sql/connect");
const { handleSQLError } = require("../sql/error");


// works with Postman
const getAllPosts = (req, res) => {
  pool.query("SELECT * FROM posts", (err, rows) => {
    console.log("It's here!");
    if (err) return handleSQLError(res, err);
    console.log("rows", rows);
    return res.json(rows);
  });
};

// works with Postman
const getPostsByDate = (req, res) => {  
let sql = `SELECT * FROM ?? WHERE ?? BETWEEN ? AND ?`;
let replacements = [
  "posts",
  "time_stamp",
  req.params.startdate, 
  req.params.enddate, 
]
  sql = mysql.format(sql, replacements)

 pool.query(sql, (err, rows) => {
   console.log("sql ", sql);
   if (err) return handleSQLError(res, err);
   return res.json(rows);
 });
};

// works with postman
const createPosts = (req, res) => {
  console.log(`new post`);
  const {
    title,
    entry_post,
    entry_image,
  } = req.body;
  let sql =
    "INSERT INTO posts ( title, entry_post, entry_image) VALUES ( ?, ?, ?)";
  sql = mysql.format(sql, [
    title,
    entry_post,
    entry_image,
  ]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json(req.body);
  });

};

// works with postman
const updatePostId = (req, res) => {
  const { title, entry_post, entry_image } = req.body;
  let sql =
    "UPDATE posts SET  title = ?, entry_post = ?,  entry_image = ? WHERE post_id = ?";
  sql = mysql.format(sql, [
    title,
    entry_post,
    entry_image,
    req.params.id
  ]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.status(200).json('message: update successful');
  });

};

// works with postman
const deletePostById = (req, res) => {
  let sql = "DELETE FROM ?? WHERE ?? = ?";
  let replacements = ["posts", "post_id", req.params.id];
    sql = mysql.format(sql, replacements);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ message: `Deleted post(s)` });
  });

};


module.exports = {
  getAllPosts,
  createPosts,
  updatePostId,
  deletePostById,
  getPostsByDate 
}
