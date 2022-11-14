const express = require('express')
const db = require('./model/connection')
const app = express()

app.use(express.json())
app.post("/stuu",(req,res) => {
    const st = {Name:req.body.Name,Writer:req.body.Writer,Isbn:req.body.Isbn,Date:req.body.Date,}
    
     let sql = "INSERT INTO `ST` SET ?"
     db.query(sql,st,(err,result) =>{
        if(err)throw err
        res.status(200).json(result)
     })
})
const PORT = 3002
app.listen(PORT,()=>console.log('server iss runing at ${PORT}'))