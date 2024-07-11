const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./src/config/db');
const userRoutes = require('./src/routes/user');

const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


connectDB();


app.use('/api/users', userRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
