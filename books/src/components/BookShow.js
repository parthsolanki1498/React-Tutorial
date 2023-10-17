import {useState} from 'react';
import BookEdit from './BookEdit'

function BookShow( {book, onDelete, onEdit} ) {

    const[showEdit, setShowEdit] = useState(false);

    const handleDeleteClick = () => {
        onDelete(book.id);
    };

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };

    // NOT GOOD APPROACH
    // IT IS SAME AS handleEditClick i.e. being called when user submits form
    // Never ever create two identical prop for similar event
    const handleSubmit = (id, newTitle) => {
        setShowEdit(false);
        // works if call onEdit() within it tho
        onEdit(id, newTitle)
    };

    let content = <h3>{book.title}</h3>;
    if(showEdit) {
        content = <BookEdit onSubmit={handleSubmit} book={book}/>;
    }

    return (
        <div className='book-show'>
            <img alt='books' src={`https://picsum.photos/seed/${book.id}/300/200`}></img>
            <div>{content}</div>
            <div className='actions'>
                <button className='edit' onClick={handleEditClick}>
                    Edit
                </button>
                <button className='delete' onClick={handleDeleteClick}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default BookShow;