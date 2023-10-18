import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';

function BookEdit( {book, onSubmit} ) {

    const[title, setTitle] = useState(book.title);
    // const { editBookById } = useContext(BooksContext);
    const { editBookById } = useBooksContext();

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('New title is ', title);

        // onEdit(book.id, title);

        // onSubmit(book.id, title);

        onSubmit();
        editBookById(book.id, title);
    };

    return (
        <form onSubmit={handleSubmit} className='book-edit'>
            <label>Title</label>
            <input className='input' value={title} onChange={handleChange}/>
            <button className='button is-primary'>Save</button>
        </form>
    );
}

export default BookEdit;