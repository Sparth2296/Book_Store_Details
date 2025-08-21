const admin = require("../Module/bookshcims");
const fs = require('fs')
module.exports.home = async (req, res) => {
  try {
    const bookData = await admin.find();

    res.render("home", { bookData });
  } catch (error) {
    console.log(error);
  }
};

module.exports.addData = async (req, res) => {
  res.render("addData");
};

module.exports.addbook = async (req, res) => {
  const { bookName, autherName, discreption, price } = req.body;

  console.log(req.file);

  let bookImage = "";
  if (req.file) {
    bookImage = req.file.path;
  }

  try {
    const data = await admin.create({
      bookName,
      autherName,
      discreption,
      price,
      bookImage,
    });

    // console.log(`Record added successfully. ${data}`);

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

module.exports.editData = async (req, res) => {

  const editID = req.params.id

  // console.log(editID);

  try {

    const EditDataById = await admin.findById(editID)

    res.render("editData", { EditDataById });

  } catch (error) {
    console.log(error);

  }


};
module.exports.editBook = async (req, res) => {

  try {

    const editId = req.params.id
    // console.log(editId)
    console.log(req.file.path);
    
    const {bookName ,autherName ,discreption , price} = req.body
    
    const bookImage = req.file.path
    
  const updateIdData = await admin.findByIdAndUpdate(editId, {bookName ,autherName ,discreption , price , bookImage})
    
    
          if(req.file){
            fs.unlinkSync(`./${updateIdData.bookImage}`)
          }
    //  console.log(updateIdData);
    res.redirect('/')

  } catch (error) {
    console.log(error);

  }


};
module.exports.deleteData = async (req ,res) =>{

      const deleteId = req.params.id;


  const deleteData = await admin.findByIdAndDelete(deleteId);

    fs.unlinkSync(`./${deleteData.bookImage}`)    ;

    res.redirect('/')

}