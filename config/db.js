var mysql = require('mysql');

var db = {
    host: 'us-cdbr-iron-east-02.cleardb.net',
    user: 'bdf77848110ae5',
    password: 'd1b37fc6',
    database: 'heroku_e619e3c52f5ac99'
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

module.exports = db;