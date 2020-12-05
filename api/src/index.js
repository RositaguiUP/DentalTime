const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('./services/connection'); // importa el archivo de conexión
var cors = require("cors");

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Users
app.use('/api', require('./routes/user'));

//Patients
app.use('/api', require('./routes/patient'));

//Treatments
app.use('/api', require('./routes/treatment'));

app.listen(5000, () => {
    console.log('Listening on port 5000');
});