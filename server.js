const express = require('express');

// initialize express app
const app = express();

// create a port
const PORT = process.env.PORT || 3001;

const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js');

// use routes
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log('API server now on port ${PORT}!');
});