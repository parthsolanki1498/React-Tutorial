import { createContext, useState } from 'react';
import axios from 'axios';

const BooksContext = createContext();


    // Count Example
    // const[count, setCount] = useState(5);

    // const valueToShare = {
    //     count,
    //     incrementCount:() => {
    //         setCount(count + 1);
    //     },
    // };

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');

    setBooks(response.data);

    // BAD CODE! DONT EVER DO THIS
        // books.push( {id: 123, title: title} );
        // setBooks(books);
        // Using the books.length in the below render part of App will not result in change
        // despite of inserting the values in the book array  

        // THE REASON THIS HAPPENS IS DESCRIBED BELOW
        // 1. React remembers the reference of the current state
        // 2. When we use books.push, it'll modify the existing array
        // 3. JavaScript is going to find the exact array in memory and is going to add object to it
        // 4. Now when we call setBooks(books), react gets reference to the "new" state (same array in memory)
        // 5. IF REFERENCE TO CURRENT STATE AND NEW STATE IS SAME, REACT WILL NOT RE-RENDER THE APPLICATION!!!!

        // We will use something like for when we're using arrays and state system together
        // const updatedBooks = [
        //     ...books,
        //     {id: 123, title: title}
        // ]
        // setBooks(updatedBooks)
        // 1. updatedBooks are surrounded by [] which means JS will create new array in memory
        // 2. ...books is a syntax which means look for existing book piece of state, take all the elements and copy them
        // 3. after copy paste, we add the new object to end of the array like 123 and title in above line of code
        // 4. Now take the entirely newly created / updated array and pass it to setBooks to change the state.

        // Tips : Avoid using push function when arrays and state function are used together or modifying an existing
        // array like array[0] = something or even avoid modifying property of an existing object.

  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title,
    });

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const valueToShare = {
    books,
    deleteBookById,
    editBookById,
    createBook,
    fetchBooks,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
