/* person needs check for plaindrome 
https://stackoverflow.com/questions/14813369/palindrome-check-in-javascript

// Import the built-in HTTP module
const http = require('http');

// Define the server logic
const server = http.createServer((req, res) => {
    // Set the response status and content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Send the response text
    res.end('Hello, World!\n');
});

// Specify the port to listen on
const PORT = 3000;

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});

*/ 

const http = require('http')
const fs = require('fs')

const server = http.createServer(function(req, res) {
//line 10 is not my code i was getting a outdated error and i googled and they reocmmended this
  const myURL = new URL(req.url, `http://${req.headers.host}`)

  const page = myURL.pathname
  const params = Object.fromEntries(myURL.searchParams)

  console.log(page)

  if (page == '/') {

    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.write(data)
      res.end()
    })

  } else if (page == '/js/main.js') {

    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'})
      res.write(data)
      res.end()
    })
  
   } else if (page == '/css/style.css') {

     fs.readFile('css/style.css', function(err, data) {
       res.writeHead(200, {'Content-Type': 'text/css'})
       res.write(data)
       res.end()
   })

  } else if (page == '/api') {

    if ('wutang' in params) {

      const userInput = params['wutang']

      console.group(userInput); 
      /* take the user input count the 1's and the 0's */
  
    




      




    


      const response = {
        answer: userInput 

      }
      res.writeHead(200, {'Content-Type': 'application/json'})


      res.end(JSON.stringify(response))
    }
  }
})

server.listen(8000)


//http://localhost:8000/



