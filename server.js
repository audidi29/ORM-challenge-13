// const express = require('express');
// const routes = require('./routes');
// // import sequelize connection

// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(routes);

// // sync sequelize models to the database, then turn on the server
// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });


const express = require('express');
const mysql = require('mysql2/promise'); // Import the mysql2 package

const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Database Connection Pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'coupleV1@',
  database: 'ecommerce_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Add the pool to the app.locals to make it accessible in the routes
app.locals.pool = pool;

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
