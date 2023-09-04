const { StatusCodes } = require("http-status-codes");
const Book = require("../model/bookModel");
const CustomError = require("../middleware/CustomError");

exports.addBook = async (req, res) => {
  const book = await Book.create(req.body);
  res.status(StatusCodes.OK).json({
    success: true,
    book,
  });
};

exports.getBook = async (req, res) => {
  const book = await Book.find();
  res.status(StatusCodes.OK).json({
    success: true,
    book,
  });
};

exports.updateBook = async (req, res) => {
  const { name, author, quantity, dop } = req.body;
  const book = await Book.findOneAndUpdate(
    { serialno: req.body.serialno },
    { name, author, quantity, dop },
    {
      new: true,
    }
  );

  res.status(StatusCodes.OK).json({
    success: true,
    book,
  });
};
