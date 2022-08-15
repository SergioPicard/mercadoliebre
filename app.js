const  express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();


const app = express();



app.listen(process.env.PORT, () =>{
    console.log('servidor corriendo en el puerto ' + process.env.PORT);
})

app.use(express.static('public'));


// Respondemos a 
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, './view/home.html'))
});

app.get('/home', (req, res) =>{
    res.sendFile(path.join(__dirname, './view/home.html'))
});

app.get('/register', (req, res) =>{
    res.sendFile(path.join(__dirname, './view/register.html'))
});

app.get('/login', (req, res) =>{
    res.sendFile(path.join(__dirname, './view/login.html'))
});

