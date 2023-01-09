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

function createCard(greeting, subheader) {
    return (
        <React.Fragment>
            <h1>{greeting}</h1>
            <h2>{subheader}</h2>
        </React.Fragment>
    )
}

const fragment_element = (
    <div>
        {createCard("What are fragments?", "Let's find out!")}
        {createCard("Hello from JSX!", "Time to learn")}
    </div>
)

// Babel Refrerence: https://babeljs.io/en/repl


// React Components

// - A component must return JSX
// - A component takes in one argument called "props", which is an object
// - The name of the function must take in a capital letter

function Card(props) {
    return (
        <div>
            <h1>{props.greeting}</h1>
            <h2>{props.subheader}</h2>
        </div>
    )
}

const componet_element = (
    <div>
        <Card greeting="This is a component" subheader="Wow"/>
        <Card greeting="This is another component" subheader="Yikes" />
        {Card({ greeting: "Hello from JSX!", subheader: "Time to learn"})}
        {Card({ greeting: "What's a component?", subheader: "Let's find out!"})}
    </div>
)

ReactDOM.render(
    // What we want to display (our entire app)
    element,
    // Where we want to display it
    document.getElementById("root")
)