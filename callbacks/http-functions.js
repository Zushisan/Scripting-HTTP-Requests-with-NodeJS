var https = require('https');

module.exports = function getHTML (options, callback) {

  /* Add your code here */
  var buf = new Buffer(1024);
  const response = "";

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
       // const parsedData = JSON.parse(buf);
       //  console.log(parsedData[0]);
      callback(buf.toString());
      // callback(parseData);
    });
  });
}

