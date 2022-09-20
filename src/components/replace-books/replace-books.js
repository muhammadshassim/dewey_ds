import React, { useState } from 'react';
import './replace-books.css';

let data = [ 
  {
    id: 1,
    name: "Book 1",
    author: "Author 1",
    call: "001.12"
  },
  {
    id: 2,
    name: "Book 2",
    author: "Buthor 2",
    call: "002"
  },
  {
    id: 3,
    name: "Book 3",
    author: "Cuthor 3",
    call: "003"
  },
  {
    id: 4,
    name: "Book 4",
    author: "Author 4",
    call: "004"
  },
  {
    id: 5,
    name: "Book 5",
    author: "Author 5",
    call: "005"
  },
  {
    id: 6,
    name: "Book 6",
    author: "Author 6",
    call: "006"
  },
  {
    id: 7,
    name: "Book 7",
    author: "Author 7",
    call: "007"
  },
  {
    id: 8,
    name: "Book 8",
    author: "Author 8",
    call: "008"
  },
  {
    id: 9,
    name: "Book 9",
    author: "Author 9",
    call: "009"
  },
  {
    id: 10,
    name: "Book 10",
    author: "Author 10",
    call: "010"
  },
  {
    id: 11,
    name: "Book 11",
    author: "Author 11",
    call: "011"
  },
  {
    id: 12,
    name: "Book 12",
    author: "Author 12",
    call: "012"
  },
  {
    id: 13,
    name: "Book 13",
    author: "Author 13",
    call: "013"
  },
  {
    id: 14,
    name: "Book 14",
    author: "Author 14",
    call: "014"
  },
  {
    id: 15,
    name: "Book 15",
    author: "Author 15",
    call: "015"
  },
  {
    id: 16,
    name: "Book 16 ",
    author: "Author 16",
    call: "016"
  },
  {
    id: 17,
    name: "Book 17",
    author: "Author 17",
    call: "017"
  },
  {
    id: 18,
    name: "Book 18",
    author: "Author 18",
    call: "018"
  },
  {
    id: 19,
    name: "Book 19",
    author: "Author 19",
    call: "019"
  },
  {
    id: 20,
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
  const [score, setScore] = useState(0)

const generateBooks = (books) => {
  const generateBooks = []
  const randomNumbers = []
  let randomBookID = Math.floor(Math.random() * 20) + 1
  console.log(`randomBookID: ${randomBookID}`)
  randomNumbers.push(randomBookID)

  for (let i = 0; i < 10; i++) {
    while (randomNumbers.includes(randomBookID)) {
      randomBookID = Math.floor(Math.random() * 20) + 1
    }

    randomNumbers.push(randomBookID)
    books.forEach(book => {
        if (book.id === randomBookID) {
          console.log(`Pushing book ${book.name} to generateBooks`)
            generateBooks.push(book)
        }
    })
  }
  setBooks(generateBooks)
}

const selectBook = ({ id, name, author, call }) => {
  console.log({ id, name, author, call })
  setSelectedBook({
    id: id,
    name: name,
    author: author,
    call: call
  })
  }

const moveUp = () => {
  console.log(`Moving ${selectedBook} up`)
  let index = 0
  books.forEach(book => {
    if (book.id === selectedBook.id) {
      index = books.indexOf(book)
    }
  })
  console.log(`Index of ${selectedBook.name} is moving from ${index} to ${index - 1}`)
  if (index >= 0) {
        const newBooks = [...books]
        newBooks[index] = newBooks[index - 1]
        newBooks[index - 1] = selectedBook
        setBooks(newBooks)
    }
}

const moveDown = () => {
  console.log(`Moving ${selectedBook} up`)
  let index = 0
  books.forEach(book => {
    if (book.id === selectedBook.id) {
      index = books.indexOf(book)
    }
  })
  console.log(`Index of ${selectedBook.name} is moving from ${index} to ${index + 1}`)
    if (index < books.length - 1) {
        const newBooks = [...books]
        newBooks[index] = newBooks[index + 1]
        newBooks[index + 1] = selectedBook
        setBooks(newBooks)
    }
}

const checkAscendingOrder = () => {
    let isAscending = true
    for (let i=0; i<books.length-1; i++) {
        if (books[i].call > books[i+1].call) {
        isAscending = false
        break
        }
    }
    if (isAscending) {
        setScore((prevState) => {
            return prevState + 5
        })
        alert("Correct order!")
    } else {
      if (score => 0 && score <= 5) {
        setScore(0)
      } else {
        setScore((prevState) => {
          return prevState - 5
        })
      }
        alert("Incorrect order!")
    }
}

 return <div className="ReplaceBooks">
  <div className="Card">
    <div className="colOne">
      <div className="colOneUpper">
        <button onClick={() => generateBooks(data)}>Replace Books</button>
      </div>
      <div className="colOneLower">
        <h3>Dewey Points</h3>
        <h1>{score}</h1>
      </div>
    </div>
    <div className="colTwo">
      <div className="list">
        {books === undefined || books === null || books.length === 0 ? <h1 style={{ textAlign: 'center' }}>Generate Books</h1> : books.map((book) => {
          return <div key={book.id} className={`eachBook ${book.call === selectedBook.call ? "selected" : ""}`} onClick={() => selectBook(book)}>{book.call} {book.author.substring(0, 3)}</div>
        })}
      </div>
      <div className="selectorButtons">
        <button className="one" onClick={moveUp}>Move Up</button>
        <button className="two" onClick={moveDown}>Move Down</button>
      </div>
    </div>
    <div className="colOne">
      <div className="colOneUpper">
        <button onClick={checkAscendingOrder}>Submit</button>
      </div>
      <div className="colOneLower">
        <h3>Information</h3>
        <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h5>
      </div>
    </div>
  </div>
</div>
};

ReplaceBooks.propTypes = {};

ReplaceBooks.defaultProps = {};

export default ReplaceBooks;
