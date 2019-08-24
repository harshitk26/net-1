if(request.url === "/index"){
   fs.readFile("index.html", function (err, data) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(data);
      response.end();
   });
}
else{
   response.writeHead(200, {'Content-Type': 'text/html'});
   response.write('<b>Hey there!</b><br /><br />This is the default response. Requested URL is: ' + request.url);
   response.end();
}

