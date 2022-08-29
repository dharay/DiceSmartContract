var http = require('http');

var Web3 = require('web3');


var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));


web3.eth.call({from: "0xB106395a1Be82E724a3b4A92AEE3884296dFF729",to: "0x559ad6Fde52CBb61FF3A18010394e0cfb20135Da", data: "0x12065fe0"}).then(console.log);
const newLocal = "web3";
console.log(newLocal);
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);