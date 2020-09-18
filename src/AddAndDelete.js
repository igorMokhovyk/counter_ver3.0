import React, {useState} from "react";


function AddAndDelete(props) {

    const [value, setValue] = useState('');



    const inputValue = (event) => {
        setValue(+event.target.value)
    }

    const addButtonHandler = () => {
        props.addButton(value);
        setValue('');
    }

    return (



        <div>

            <button onClick={addButtonHandler}>Add</button>
            <button onClick={props.deleteButton}>Delete</button>
            <input type='text' onChange={inputValue} value={value}/>

        </div>
    )
}

export default AddAndDelete;