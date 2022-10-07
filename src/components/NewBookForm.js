import React, { useState } from "react";

function NewBookForm() {
  const [books, updateBooks] = useState({
    title: "",
    author: "",
    genre: ""
  });

  function submit(e) {
    e.preventDefault();


    fetch("http://localhost:5000/booksData", {
      method: "POST",
      body: JSON.stringify(books),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => updateBooks());
  }

  function handle(e) {
    const newData = { ...books };
    newData[e.target.id] = e.target.value;
    updateBooks(newData);
    console.log(newData);
  }

  return (
    <>
      <h1>Enter details of the new book here</h1>
      <form className="newbookform" onSubmit={(e) => submit(e)}>
        <label>
          Title
          <input
            type="text"
            name="title"
            id="title"
            onChange={(e) => handle(e)}
            value={books.title}
          />
        </label>
        <label>
          Author
          <input
            type="text"
            name="author"
            id="author"
            onChange={(e) => handle(e)}
            value={books.author}
          />
        </label>
        <label>
          Genre
          <input
            type="text"
            name="genre"
            id="genre"
            onChange={(e) => handle(e)}
            value={books.genre}
          />
        </label>
        <div>
          <input id="submit" type="submit" value="Add Book" />
        </div>
      </form>
    </>
  );
}

export default NewBookForm;
