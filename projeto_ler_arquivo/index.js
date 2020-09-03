const http = require('http');
const fs = require('fs');
const hostname = 'localhost'; //127.0.0.1
const port = 3000;
const server = http.createServer((req, res)=>{
   fs.readFile('index.html', (erro, data)=>{
       if(erro){
           res.writeHead(400, {'Content-Type':'text/plain'});
           res.end('Erro, não achou a página');
       }else{
           res.writeHead(200, {'Content-Type': 'text/html'});
           res.write(data);
           return res.end();
       }
   })  
});
server.listen(port, hostname, ()=> console.log(`Servidor rodando em: http://${hostname}:${port}`))