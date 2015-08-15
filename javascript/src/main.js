console.log('1')

var http = require('http')
console.log('2')

function onRequest(request, response) {
  response.end('<h1>It works!</h1><br/>And works really well, doesn"t i t? ')
}
console.log('3')

var server = http.createServer(onRequest)
console.log('4')

server.listen(1980)
console.log('5')
