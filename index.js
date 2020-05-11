const express = require('express');
const app = express()
const path = require('path')
const PORT = 3000;


app.use(express.urlencoded({extended:true}))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res)=>{
    return res.send("Hellow World!");
});
app.get('/home', (req,res)=>{
    return res.render("home");
})

app.listen(PORT,err=>{
    if (err) {console.log('error in starting the serve, ', err)}
    else {
        console.log(`Server up and running on ${PORT}`);
    }
})