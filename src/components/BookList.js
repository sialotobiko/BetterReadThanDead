import React from "react";
import { useEffect, useState } from "react";

function BookList(){

const [booksList, setBooksList] = useState([])

useEffect(() => {
    fetchBookData()
}, [])

function fetchBookData(){
    fetch ("https://betterreadthandead.herokuapp.com/booksData")
    .then((res) => res.json())
    .then((res) => setBooksList(res))
}

    return (
        <div className='books'>
      {/* display a list of books */}

      <tbody>
        <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
        </tr>
      </tbody>
      {booksList.map((book, id) => (
        <tr key={id}>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.genre}</td>
        </tr>
      ))}
    </div>
    )
}

export default BookList;