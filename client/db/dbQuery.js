const sqlite3 = require("sqlite3").verbose();

// open database in memory
let db = new sqlite3.Database("./db/data.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the database.");
});

db.serialize(() => {
  // Queries scheduled here will be serialized.
  db.each(`SELECT test FROM garden`, (err, row) => {
    if (err) {
      throw err;
    }
    console.log(row.test);
  });
});

// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Close the database connection.");
});
