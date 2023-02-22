const express =require('express');
const path =require('path');
const app = express();
const port=3000;
//const publicPath = path.join(__dirname,'./public/images')
const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));

app.listen(port,()=>{
    console.log(`Server Started On Local Host ${port}`)
})


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/home.html'))
})

app.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/register.html'))
})
app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/login.html'))
})
app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/creaproducto.html'))
})