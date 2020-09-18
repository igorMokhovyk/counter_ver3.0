import React from "react";


function Buttons(props) {


    const counters = props.el;


    const counterPlusButton = () => {
        props.counterPlus(props.index)
    }

    const counterMinusButton = () => {
        props.counterMinus(props.index)
    }

    const counterReset = () => {
        props.counterReset(props.index)
    }


    return (
        <div>

            <button onClick={counterPlusButton}>+</button>
            {counters}
            <button onClick={counterMinusButton}>-</button>
            <button onClick={counterReset}>Reset</button>


        </div>
    )
}

export default Buttons;