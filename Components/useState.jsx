import {useState} from "react";
import React from "react";
import {greet, goodBye} from "./example"

export default function UseStateAndConditional() {
    const  [count, setCount] = useState(0);
    const [form, setForm] = useState({
        name: "V.",
        age: 20
    })

    console.log(form)
    function handleUpdateCount() {
        setCount(count + 1)
    }

    function handleClick(event) {
        event()
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleUpdateCount}>Add one</button>
            <button onClick={() => {handleClick(greet)}}>Say Hello</button>
            <button onClick={() => {handleClick(goodBye)}}>Say Goodbye</button>
        </div>
    )
}