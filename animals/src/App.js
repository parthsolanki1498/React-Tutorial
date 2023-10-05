import './App.css'
import { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)];
}

// Always remember that the entire componenet i.e. App in this case
// gets re-rendered each time the useState is changed

function App() {

    // Why we used array instead of number will be mentioned at the end of file.
    const [animals, setAnimals] = useState([]);

    // Arrow function but we can directly define it within the componenet itself as later done below
    const handleClick = () => {
        // console.log('Button was clicked');
        // setCount(count + 1);
        
        // ['cat']
        // ['cat','dog'...]
        // aniamls.push(getRandomAnimal());
        // This above line is the another way of adding random animal to existing array
        // but it MODIFIES a piece of state and we want to avoid that
        setAnimals([...animals, getRandomAnimal()])
    };

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    })

    // const [count, setCount] = useState(0);
    // The above declaration is using JavaScript Array Destructuring feature.
    // Comment at the end explains it briefly.

    // Always use setCount to change the state of count
    // NEVER update directly like count++ or count = 123 instead use setCount(123)

    return (
        <div className="app">
            
            {/* <button onClick={() => 
                console.log('Button was clicked!') --> Another way to define the function directly within the componenet
            }> */}
            <button onClick={handleClick}>
                Add Animal
            </button>
            <div className="animal-list">
                {renderedAnimals}
                {/* Number of animals: {count} */}
            </div>
           
        </div>
    );

    // The reason for providing handleClick as a reference and not as a function call like handleClick() is
    // so that it doesn't get immediately, we can call it maybe some time in future if requried.
    // as of now it'll just log the function, the output of it instead of invoking it right away.
    // if we provide directly the function, it'll be called right away when the componenet is rendered
}

export default App;


// function makeArray() {
//     return [1, 10, 32, 40];
// }

// const myArray = makeArray();
// // const firstElement = myArray[0];
// // const secondElement = myArray[1];

// // If we wanted to access the first and second array
// // The approch we see above is the typical way to go with

// const [firstElement, secondElement] = makeArray(); 
// // This right here above is what we call Array Destructring

// console.log(firstElement, secondElement);


// Why we're using useState with Array then?

// console.log(useState(50));
// When we console.log the useState we get an array where first value is default value
// Second value is the function variable (setter)

// Let's say we used useState to pass an object then it'd be something like
// function useState(defaultValue) {
//     return {
//         yourState: defaultValue,
//         yourSetter: () => {}
//     }
// }

// And to use it we have to do something like
// const stateConfig = useState(0);
// const count = stateConfig.yourState;
// const setCount = stateConfig.yourSetter;

// or even if we tried to sum it up in single line it'd be like
// const {yourState: count, yourSetter: setCount} = useState(0);
// but even that is not readable in a way it makes sense

// but if it returns an array, we don't have to write so much code
// for accessing or updating the values of the array.