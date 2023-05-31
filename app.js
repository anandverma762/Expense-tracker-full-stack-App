const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./util/database'); 
const userrout = require('./routes/useroutes');

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'Public')));

app.use(userrout);

const startServer = async () => {
  try {
    await sequelize.sync();
    app.listen(8000, () => {
      console.log('Server is running on port 5000');
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
};

startServer();
