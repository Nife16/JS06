const http = require('http')

const hostname = 'localhost'
const port = 8080
// NO TWO PROJECTS CAN RUN ON THE SAME PORT
// http://127.0.0.1:8080, http://localhost:8080

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

/// Client                  Server
// User starts on client

//REST
/**
 * 
 * GET - Reading, getting information, No Request Body, information sent in the url
 * POST - Create/Update - Saving information, first time is creating, subsequent times are updating
 * PUT - Create/Update - same as post but for one object in a collection
 * DELETE - Deleting stuff
 */

//CRUD
/**
 *  Create
 *  Read
 *  Update
 *  Delete
 */