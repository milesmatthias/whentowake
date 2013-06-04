var connect = require('connect');

connect.createServer(
    connect.static(__dirname)
).listen(3000);

console.log('Web server running at localhost:3000...');
