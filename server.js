require('dotenv').config();

const app = require("./app");
const mongoose = require('mongoose');


mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected');
});

app.listen(3000, () => console.log('Server started'));

//server is separated from the app so it listens to the port after testing