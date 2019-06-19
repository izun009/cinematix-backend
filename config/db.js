var mysql = require('mysql');
var connection;

function handleDisconnect() {
    connection = mysql.createConnection({
    host: 'localhost',
    user: 'izzen',
    password: '1234',
    database: 'pemesanan_tiket_bioskop'
  });
  
    connection.connect(function(err) {             
      if(err) {                                     
        console.log('error when connecting to db:', err);
        setTimeout(handleDisconnect, 4000); 
      }                                     
    });                                    
    connection.on('error', function(err) {
      console.log('db error', err);
      if(err.code !== 'PROTOCOL_CONNECTION_LOST') { 
        handleDisconnect();                         
      } else {                                      
        throw err;                                  
      }
      handleDisconnect();
    });
}
  
handleDisconnect();

module.exports = connection;