require('dotenv').config()
const express = require("express");
const app = express();
const port = process.env.PORT;


app.get("/twitter",(req,res)=>{

     res.send("speller@music");
}    
)

app.listen(port,()=>{
    console.log(`Example app listening to port ${port}`);
});