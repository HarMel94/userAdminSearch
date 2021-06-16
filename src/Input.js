import { useState } from "react";
import { useHistory } from "react-router-dom";


export default function Input() {
    const [val, setVal] = useState('')
    const history = useHistory()

    function chek() {
        if(val === 'admin') {
            history.push('/admin')
        } else if(val === 'user') {
            history.push('/user')
        }
    }


    return (
        <>
            <input 
            type = 'text'
            placeholder = 'Enter Name'
            onChange = {(e) => {setVal(e.target.value)}} />

            <button onClick = {chek}>Search</button>
        </>
    )
}