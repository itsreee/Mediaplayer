// import json server
//create a server 
//set path for db.json file
//create middleware
//define a port for running json server
//use middle ware , router
//run server in given port to resolve client request
//
const jsonServer = require('json-server') 
const mpServer = jsonServer.create()
const router = jsonServer.router("db.json")
const middleware = jsonServer.defaults()
const PORT = 3000||process.env.PORT
mpServer.use(middleware)
mpServer.use(router)
mpServer.listen(PORT,()=>{
    console.log(`Mp server is running at port ${PORT} and is waiting for client request!!`);
})

