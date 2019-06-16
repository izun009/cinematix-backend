const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors({"Access-Control-Allow-Origin":"*"}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var routes = require('./routes/routes');
routes(app);

app.listen(PORT, () => {
    console.log('Server Running on Port ', PORT);
});
