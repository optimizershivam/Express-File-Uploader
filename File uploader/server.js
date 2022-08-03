const express = require("express")
const path = require("path")
const multer = require("multer")
const { setTimeout } = require("timers/promises")

 const app = express()

 const storage = multer.diskStorage({destination:(req,file,callback)=>{
    callback(null,"uploads")

 },
 filename:(req,file,callback)=>{
    console.log('file:', file)

    callback(null,Date.now()+  file.originalname)
 }
})
const upload = multer({storage:storage}).single("avatar")

app.get("/",(req,res)=>{
res.sendFile(path.join(__dirname,"index.html"))
})

app.post("/profile", upload, (req, res) => {
   res.send("File Uploaded");
   
 });
 

 app.listen(8080, ()=> {
    console.log("server started")
 })