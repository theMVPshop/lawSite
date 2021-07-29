const mysql = require("mysql");

class Connection {
  constructor() {
    if (!this.pool) {
      console.log("creating connection...");
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: process.env.HOST,
        port: process.env.PORT,
        user: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
      });

      return this.pool;
      
    } 
    console.log("port in connection ", port);
    
    return this.pool;
  }
}


const instance = new Connection();

module.exports = instance;


