const Book = require('../models/Book');
const mongoose = require('mongoose');

//home
exports.homepage = async (req, res) => {
    const messages = await req.flash("info");
  
    const locals = {
      title: "Homepage",
      description: "List of my books to read",
    };
    
    let perPage = 9;
    let page = req.query.page || 1;
  
    try {
      const books = await Book.aggregate([{ $sort: { createdAt: -1 } }])
        .skip(perPage * page - perPage)
        .limit(perPage)
        .exec();

      const count = await Book.countDocuments({});
  
      res.render("index", {
        locals,
        books,
        current: page,
        pages: Math.ceil(count / perPage),
        messages,
      });
    } catch (error) {
      console.log(error);
    }
  };

//add book

exports.addBook = async (req, res) => {
  const locals = {
    title: "Add New Book",
    description: "Add New Book",
  };
  
  res.render("book/add", locals);
};

//post book

exports.postBook = async (req, res) => {
  console.log(req.body);

  const newBook = new Book({
    title: req.body.title,
    author: req.body.author,
    year: req.body.year ? req.body.year : ' ',
    genre: req.body.genre ? req.body.genre : ' ',
    notes: req.body.notes ? req.body.notes : ' ',
    isRead: false,
  });

  try {
    await Book.create(newBook);
    await req.flash("info", "New book has been added.");

    res.redirect("/");
    console.log("New book has been added.");
  } catch (error) {
    console.log(error);
  }
};

//isRead

exports.toggleRead = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    const isRead = req.body.isRead === 'true';
    book.isRead = isRead;
    await book.save();
    res.redirect("/");
    console.log("read book");
  } catch (error) {
    console.log(error);
  }
}

// edit book

exports.edit = async (req, res) => {
  try {
    const book = await Book.findOne({ _id: req.params.id });

    const locals = {
      title: "Edit Book",
      description: "Edit Book",
    };

    res.render("book/edit", {
      locals,
      book,
    });
  } catch (error) {
    console.log(error);
  }
};

// post edit book

exports.editPost = async (req, res) => {
  try {
    const isRead = req.body.isRead === 'true';

    await Book.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      year: req.body.year,
      notes: req.body.notes,
      isRead: isRead,
      updatedAt: Date.now(),
    });
    await res.redirect(`/edit/${req.params.id}`);

    console.log("book edited");
  } catch (error) {
    console.log(error);
  }
};

// delete book

exports.deleteBook = async (req, res) => {
  try {
    await Book.deleteOne({ _id: req.params.id });
    res.redirect("/");
    console.log("Successfully deleted");
  } catch (error) {
    console.log(error);
  }
};