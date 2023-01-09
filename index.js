import React, { useReducer } from 'react'
import ReactDOM from 'react-dom'

// Vanilla JavaScript Version
// const header = document.createElement("h1")
// header.id = "header"
// header.classname = "blue"
// header.textContent = "Hello from Vanilla JS!"
// document.getElementById("root").append(header)


// JSX (JavaScript XML)

const greeting = "Hello!!"
const className = "blue"

const element = (
    <div>
        <h1 id="header" className={className}>{greeting}</h1>
        <h2>Multiple Elements</h2>
    </div>
)

const list = (
    <div>
        <ul id="about-me">
            <li class="about-me-item">Name: {user.name}</li>
            <li class="about-me-item">Position: {user.position}</li>
            <li class="about-me-item">Hometown: {user.hometown}</li>
        </ul>
    </div>
)

// Babel Refrerence: https://babeljs.io/en/repl

ReactDOM.render(
    // What we want to display (our entire app)
    element,
    // Where we want to display it
    document.getElementById("root")
)