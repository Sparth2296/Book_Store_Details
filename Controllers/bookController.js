const admin = require("../Module/bookshcims");

module.exports.home = async (req, res) => {
  try {
    const bookData = await admin.find();

    res.render("home", {bookData});
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
  bookImage = req.file.filename; // or req.file.path
}

  try {
    const data = await admin.create({
      bookName,
      autherName,
      discreption,
      price,
      bookImage,
    });

    console.log(`Record added successfully. ${data}`);

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};
