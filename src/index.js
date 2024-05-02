var http = require('http');
var fs = require('fs');

const PORT = 8080;

http.createServer(function (request, response) {
    var filePath;

    // Determine the file path based on the requested URL
    if (request.url === '/') {
        filePath = './src/index.html';
    } else if (request.url === '/about') {
        filePath = './src/about.html';
    } else if (request.url === '/faculty') {
        filePath = './src/faculty.html';
    } else {
        // Handle 404 Not Found error if the requested file is not found
        response.writeHead(404);
        response.end("404 Not Found");
        return;
    }

    // Read the HTML file corresponding to the requested URL
    fs.readFile(filePath, function (err, html) {
        if (err) {
            // Handle file read error
            response.writeHead(500);
            response.end("Internal Server Error");
            throw err;
        }

        // Serve the HTML content with appropriate content type
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(html);
        response.end();
    });

}).listen(PORT);

console.log('Server running at http://localhost:' + PORT + '/');
