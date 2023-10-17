import { useState } from 'react';


// Just some help material when using array and state togeteher
function ArrayAndState() {

    // THIS IS COPY AND PASTE, NOT CUT so previous array still exists
    const[colors, setColors] = useState([]);
    const addColor = (newColor) => {
        // Adding elements to the start of an array
        const updatedColorStart = [
            newColor,
            ...colors
        ];

        // Adding elements to the end of an array
        const updatedColorEnd = [
            ...colors,
            newColor
        ];

        // Adding elements to the middle of an array
        // Slice is used to return a number of elements out of an array
        // Slice can be called with either two or one argument
        // 1. color.slice(startIndex, endIndex) => meaning start from startIndex till endIndex but not inclue endIndex
        // 2. color(index) => meaning start from index including it till the end of an array
        const updatedColorMiddle = [
            ...color.slice(0, index),
            newColor,
            ...color.slice(index)
        ];

        // Removing an element with a particular value
        // Filter = If filter function returns true, the value is added to the new array
        // If function returns false, value is not added. FKT - Filter Keeps True
        // Filter always creates new array and doesn't updated the existing one
        const removeColor = (colorToRemove) => {
            const updatedColor = colors.filter((color) => {
                return color !== colorToRemove
            });
        }

        // Modifying an element based on property
        const updatedBooksById = (id, newTitle) => {
            const updatedBooks = books.map((book) => {
                if(books.id === id) {
                    return {...book, title: newTtile };
                }

                return book;
            });
        }

        // Adding or changing properties to an object
        const [fruit, setFruit] = useState({
            color: 'red',
            name: 'apple'
        });

        const changedColor = (color) => {
            const updatedFruit = {
                ...fruit,
                color: color
            };

            setFruit(updatedFruit);
        };

        // Removing property from an object
        const removeColorProp = () => {
            const { color, ...rest} = fruit;

            setFruit(rest);
        };

    }
    setColors(updatedColor);
}