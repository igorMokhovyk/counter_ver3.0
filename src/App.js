import React, {useState} from 'react';

import './App.css';
import Buttons from "./Buttons";
import AddAndDelete from "./AddAndDelete";


function App() {

    const [counter, setCounter] = useState([0, 0, 0, 0, 0])


    const counterPlus = (index) => {
        const newArr = counter.map((el, i) => {
            if (i === index) {
                return el + 1;
            }
            return el;
        })
        setCounter(newArr)
    }

    const counterMinus = (index) => {
        const newArr2 = counter.map((el, i) => {
            if (i === index) {
                return el - 1;
            }
            return el;
        })
        setCounter(newArr2)
    }

    const counterReset = (index) => {
        const newArr3 = counter.map((el, i) => {
            if (i === index) {
                return el - el;
            }
            return el;
        })
        setCounter(newArr3)
    }


    const addButton = (value) => {
        const adder = [...counter];
        adder.push(value);
        setCounter(adder)
    }

    const deleteButton = () => {
        const deleter = [...counter];
        deleter.pop();
        setCounter(deleter)
    }


    return (
        <div className="App">
            <header className="App-header">
                <AddAndDelete addButton={addButton} deleteButton={deleteButton}/>
                <p/>
                {counter.map((el, index) => <Buttons counterReset={counterReset} counterPlus={counterPlus}
                                                     counterMinus={counterMinus}
                                                     index={index} el={el} key={Math.random()}/>)}


            </header>
        </div>
    );
}

export default App;
