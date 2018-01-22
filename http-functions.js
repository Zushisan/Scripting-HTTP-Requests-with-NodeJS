var https = require('https');

module.exports = function getHTML (options, callback) {

  /* Add your code here */
  var buf = new Buffer(1024);

  /* Add your code here */

  https.get(options, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      buf = buf + data;
    });



    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log('Response stream complete.');
      callback(buf.toString());
    });
  });
}

