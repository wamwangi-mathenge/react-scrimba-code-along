import React from 'react'
import ReactDOM from 'react-dom'

// Vanilla JavaScript Version
// const header = document.createElement("h1")
// header.id = "header"
// header.classname = "blue"
// header.textContent = "Hello from Vanilla JS!"
// document.getElementById("root").append(header)


// JSX (JavaScript XML)

const element = <h1 id="header" className="blue">Hello!</h1>

ReactDOM.render(
    // What we want to display (our entire app)
    element,
    // Where we want to display it
    document.getElementById("root")
)