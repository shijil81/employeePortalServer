//1) import json server
const jsonServer=require('json-server')
const middleware = jsonServer.defaults()
const router=jsonServer.router("db.json")

// server
const employeeServer=jsonServer.create()
employeeServer.use(middleware)
employeeServer.use(router)

// port
const PORT=4000 || process.env.PORT

employeeServer.listen(PORT,()=>{
    console.log(`server running successfully at ${PORT}`);
    
})
