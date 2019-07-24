const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
app.use(express.static(path.join(__dirname, './public')));

// var corsMiddleware = function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', 'localhost'); //replace localhost with actual host
//     res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, PATCH, POST, DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Authorization');

//     next();
// }
// app.use(cors({"Access-Control-Allow-Origin":"*",}));
// app.use(cors({"Access-Control-Allow-Methods":"*"}));
// app.use(cors({"Access-Control-Allow-Headers":"*"}));

app.use(cors({
    origin: '*'
    // methods: '*'
}));
// app.use(cors({"Access-Control-Allow-Headers":"*"}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var routes = require('./routes/routes');
routes(app);
app.listen(PORT, () => {
    console.log('Server Running on Port ', PORT);
});
