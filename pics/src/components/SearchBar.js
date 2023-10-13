import { useState } from 'react';
import './SearchBar.css'

function SearchBar( {onSubmit} ) {

    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {

        // used to avoid the default behavior of form element
        event.preventDefault();
        // console.log('Need to pass data to parent');

        // onSubmit(
        //     // NEVER EVER EVER EVER DO THIS EVEN THO IT WORKS
        //     document.querySelector('input').value
        // );
        onSubmit(term);
    };

    const handleChange = (event) => {
        // console.log(event.target.value);
        setTerm(event.target.value);
    };

    return (
        <div className='search-bar'>
            <form onSubmit={handleFormSubmit}>
                <label>Enter Search Term</label>
                <input value={term} onChange={handleChange} />
            </form>
        </div>
    );
}

export default SearchBar;