var mysql = require('mysql');

var db = {
    host: 'us-cdbr-iron-east-02.cleardb.net',
    user: 'b470cb6f14c593',
    password: '7ec199a9',
    database: 'heroku_041310c7bcb4df6'
};

var connection;

function handleDisconnect() {
    connection = mysql.createConnection(db); 
  
    connection.connect(function(err) {             
      if(err) {                                     
        console.log('error when connecting to db:', err);
        setTimeout(handleDisconnect, 2000); 
      }                                     
    });                                    
    connection.on('error', function(err) {
      console.log('db error', err);
      if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
        handleDisconnect();                         
      } else {                                      
        throw err;                                  
      }
    });
  }
  
handleDisconnect();
connection.end();

module.exports = db;