const books = [{ id: 1, title: "Star Wars", author: "George Lucas" }, { id: 2, title: "LOTR", author: "Lucas" }];
let id = 1;

module.exports = {
  read: (req, res) => {
    res.status(200).send(books);
  },
  create: (req, res) => {
    const { title, author } = req.body;
    let book = {
      id: id,
      title: title,
      author: author
    };
    books.push(book);
    id++;
    res.status(200).send(books);
  },
  update: (req, res) => {
    let index = null;
    books.forEach((book, i) => {
      if (book.id === Number(req.params.id)) index = i;
    });
    book[index] = {
      id: books[index].id,
      title: req.body.title || books[index].title,
      author: req.body.author || books[index].author
    };
    res.status(200).send(books);
  },
  delete: (req, res) => {
    for (i = 0; i < books.length; i++) {
      if (books[i].id === req.params.id) {
        books.splice(indexOf(books[i], 1));
      }
    }
    res.status(200).send("ok");
  }
};
