const express = require('express');
const app = express();
const port = 5000
const mongooseMongoDB = require('./db')

// Enable CORS for all routes
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  })
  
mongooseMongoDB()
app.get('/',(req,res)=>{
    res.send("Hii I am Shivam")
})

app.use(express.json())
app.use('/api',require("./Routes/CreateUser"))
app.use('/api',require("./Routes/DisplayData"))

app.listen(port,()=>{
    console.log("Express is listening ", port)
})