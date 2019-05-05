import React from 'react';
import './App.css';
import Login from '../Login/login';
import TextEditor from "../TextEditor/textEditor"


const App = () => {
    return (
        <div className="App">
            <Login />
            <TextEditor />
        </div>
    );
}

export default App;
