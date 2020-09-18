import React, {useState} from "react";


function AddAndDelete(props) {

    const [value, setValue] = useState('')

    const inputValue = (event) => {
        setValue(+event.target.value)
    }
    return (



        <div>

            <button onClick={() => props.addButton(value)}>Add</button>
            <button onClick={props.deleteButton}>Delete</button>
            <input type='text' onChange={inputValue}/>

        </div>
    )
}

export default AddAndDelete;