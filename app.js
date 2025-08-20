const express = require('express')
const path = require('path')
const db = require("./config/db")
const admin = require('./Module/bookshcims')
const app = express()
const port = 3000



app.set("view engine" , "ejs")
app.set("views",path.join(__dirname, "views"))

app.use(express.urlencoded({extended : true}));

app.use("/" , require("./Routes/bookRoute"))
app.use("/assets" , express.static(path.join(__dirname , "assets")))
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
 
app.get('/',(req, res)=>{

     res.render('home');

})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


