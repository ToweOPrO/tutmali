var http = require('http'); // Lokal HTTP Sunucusu açar

http.createServer(function (req, res) { 
  res.write("Yaşıyorum!"); 
  res.end();
}).listen(8080); // Lokal portunuz (UPNP) Açık değil ise 8o8o portunu kullanmanızı önermem. 0001 portu daha verimli olacaktır.

// keep alive by Vribbliou
