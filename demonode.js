// Import required modules
const http = require('http');

// Define the port number
const PORT = 3000;

// Create a server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Send the response
  res.end('Hey, this is Bhavya Shree!\n');
});

// Start the server
server.listen(PORT, () => {
  console.log(Server is running on http://localhost:${PORT});
});