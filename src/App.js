import React from 'react';
import Button from '@lskjs/button';
import Form from './Form';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button 
          componentClass="a" 
          href="https://reactjs.org" 
          target="_blank"
          rel="noopener noreferrer"
          paint="primary"
        >
          Learn React
        </Button>
        <div style={{ padding: 12, width: 300, background: 'white' }}>
          <Form
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2));
            }}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
