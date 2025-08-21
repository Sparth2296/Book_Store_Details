const express = require('express')
const multer = require('multer');
const bookController = require("../Controllers/bookController")


const router = express.Router();

console.log("Router loaded");


const fillStore = multer.diskStorage({
    destination : function(req , file , cd){
        cd(null , "uploads/");

    },
    filename : function (req , file , cd){
        cd(null , file.originalname);
    }
});

const upload = multer({storage : fillStore}).single('bookImage')

router.get('/' , bookController.home);
router.get('/addData', bookController.addData);
router.post('/addbook' , upload , bookController.addbook);
router.get('/editData/:id' , bookController.editData)
router.post('/editBook/:id',upload , bookController.editBook)
router.get('/deleteData/:id' , bookController.deleteData)


module.exports = router
