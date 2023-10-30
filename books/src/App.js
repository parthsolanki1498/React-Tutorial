import { useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import BooksContext from './context/books';
import './index.css'

function App() {

    const { fetchBooks } = useContext(BooksContext);

    // useEffect is similar to useState but it is called when our application is
    // initially rendered or at a specific re-render
    useEffect(() => {
        fetchBooks();
    },[fetchBooks]);

    // Never add fetchBooks() to the dependacy array to fix the ESLint warning ^^^
    // We indeed need to add fetchBooks() but do additional things as well to ensure
    // our web app doesn't end up making endless calls to our backend api

    // useCallback hook for resuce - it tells React that function is not changing over time

    // Also never create a function within useEffect arrow function which refers to a variable
    // It will result in Stale Variable Bug

    // The arrow function within the useEffect is immediately called after first DOM update (render)
    // Second, Third and so on depends on the second argument of the useEffect function

    // DONT DO THIS!!! to fetch directly into App.js
    // fetchBooks();
    // This wil result in infinite loop where App componenet keeps re-rendering itself over and over

    return (
        <div className='app'>
            {/* {books.length} */}
            <h1>Reading List</h1>
            {/* <BookList onEdit={editBookbyId} books={books} onDelete={deleteBookbyId}/> */}
            {/* <BookCreate onCreate={createBook} /> */}
            <BookList />
            <BookCreate />
        </div>);
}

export default App;