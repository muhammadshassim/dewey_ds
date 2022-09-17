import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './replace-books.module.css';

let data = [ 
  {
    name: "Book 1",
    author: "Author 1",
    call: "001.12"
  },
  {
    name: "Book 2",
    author: "Author 2",
    call: "002"
  },
  {
    name: "Book 3",
    author: "Author 3",
    call: "003"
  },
  {
    name: "Book 4",
    author: "Author 4",
    call: "004"
  },
  {
    name: "Book 5",
    author: "Author 5",
    call: "005"
  },
  {
    name: "Book 6",
    author: "Author 6",
    call: "006"
  },
  {
    name: "Book 7",
    author: "Author 7",
    call: "007"
  },
  {
    name: "Book 8",
    author: "Author 8",
    call: "008"
  },
  {
    name: "Book 9",
    author: "Author 9",
    call: "009"
  },
  {
    name: "Book 10",
    author: "Author 10",
    call: "010"
  },
  {
    name: "Book 11",
    author: "Author 11",
    call: "011"
  },
  {
    name: "Book 12",
    author: "Author 12",
    call: "012"
  },
  {
    name: "Book 13",
    author: "Author 13",
    call: "013"
  },
  {
    name: "Book 14",
    author: "Author 14",
    call: "014"
  },
  {
    name: "Book 15",
    author: "Author 15",
    call: "015"
  },
  {
    name: "Book 16 ",
    author: "Author 16",
    call: "016"
  },
  {
    name: "Book 17",
    author: "Author 17",
    call: "017"
  },
  {
    name: "Book 18",
    author: "Author 18",
    call: "018"
  },
  {
    name: "Book 19",
    author: "Author 19",
    call: "019"
  },
  {
    name: "Book 20",
    author: "Author 20",
    call: "020"
  },
]

const ReplaceBooks = () => {
const [books, setBooks] = useState([])
const [selectedBook, setSelectedBook] = useState({
  name: null,
  author: null,
  call: null
})

const generateBooks = (books) => {
  const generateBooks = []
  for (let i=0; i<10; i++) {
    // switch
    let exists = false
    let random = Math.floor(Math.random() * books.length);

    // check if the incoming book is already in the list
    generateBooks.forEach((existingBook) => {
      if (existingBook.call == books[random].call) {
        random = Math.floor(Math.random() * books.length);
      }
    })

    generateBooks[i] = books[random];
  }
  setSelectedBook({
    name: null,
    author: null,
    call: null
  })
  setBooks(generateBooks)
}

const selectBook = ({ name, author, call }) => {
  console.log({name, author, call})
  setSelectedBook({
    name: name,
    author: author,
    call: call
  })
}

 return <div className={styles.ReplaceBooks}>
  <div className={styles.Card}>
    <div className={styles.colOne}>
      <div className={styles.colOneUpper}>
        <button onClick={() => generateBooks(data)}>Replace Books</button>
      </div>
      <div className={styles.colOneLower}>
        <h3>Dewey Points</h3>
        <h1>25</h1>
      </div>
    </div>
    <div className={styles.colTwo}>
      <div className={styles.list}>
        {books === undefined || books === null || books.length === 0 ? <h1 style={{ textAlign: 'center' }}>Generate Books</h1> : books.map((books) => {
          return <div key={books.call} className={`${styles.book} ${books.call === selectedBook.call ? styles.selected : ""}`} onClick={() => selectBook(books)}>{books.call} {books.author.substring(0, 3)}</div>
        })}
      </div>
      <div className={styles.selectorButtons}>
        <button className={styles.one}>Move Up</button>
        <button className={styles.two}>Move Down</button>
      </div>
    </div>
    <div className={styles.colOne}>
      <div className={styles.colOneUpper}>
        <button>Submit</button>
      </div>
      <div className={styles.colOneLower}>
        <textarea />
      </div>
    </div>
  </div>
</div>
};

ReplaceBooks.propTypes = {};

ReplaceBooks.defaultProps = {};

export default ReplaceBooks;
