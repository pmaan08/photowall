// webpack , babal packages required or else || create-react-app
import React, {Component} from "react";
import ReactDOM  from "react-dom";
import Main from "./Components/Main";
import "./styles/stylesheet.css"


//const tasks = ['Hello World!', 'My name is Partul!', 'First web page! '];


//React element describe how web page will look 
// const  ele  --- h1: Heading Tag , null: properties, '..': content
//const element = React.createElement('ol', null , 
//   tasks.map((task, index) => React.createElement('li', { key: index }, task)));


//JSX syntax - in JSX everything must equate toa  single JSX element so we use <div> tags 
//to include JS code encode in { }

//const element = 
//    <div>
//        <h1> Task List </h1>
//    <ol>
//         { tasks.map((task, index) => <li key = {index}> {task} </li> ) }  
//    </ol>
//    </div>

//ReactDOM.render(element, document.getElementById('root'))



ReactDOM.render(<Main/>, document.getElementById('root'));





