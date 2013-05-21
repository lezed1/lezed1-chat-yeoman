(function() {
  var dist_server, express, port;

  express = require("express");

  dist_server = require("./express.js");

  port = process.env.PORT || 9000;

  dist_server.use(express["static"]("dist/Public"));

  dist_server.listen(port);

  console.log("Server running on port: " + port);

}).call(this);
