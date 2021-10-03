const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title> Enter Message </title></head>");
    res.write('<body><form action="/message" method="POST"><input type="text"><button type="text">Send</form></body>');
    res.write('</html>');
    res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title> My Firts Page </title></head>");
  res.write("<body></h1>Hello from node.js Server 2021</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
