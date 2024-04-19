const express=require("express");

const app=express();

const port=8080;

app.listen(port,()=>{
    console.log(`app is listening on the port ${port}`);
})
//to make the the data readable

app.use(express.urlencoded({extended:true}))


app.get("/register",(req,res)=>{
    let {username,passward}=req.query;
    res.send(`welcome ${username} ! `)
});


app.post("/register",(req,res)=>{
    let {username,passward}=req.body;
    res.send(`welcome ${username} ! `)
});
