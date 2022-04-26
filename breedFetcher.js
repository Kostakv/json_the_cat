var request = require("request");
var BREED = process.argv.slice(2);

var options = { method: 'GET',
  url: `https://api.thecatapi.com/v1/breeds/search?q=Siberian` };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
    
      const data = JSON.parse(body);
      console.log(data[0].description);
      console.log(typeof data);
      
    
    });

