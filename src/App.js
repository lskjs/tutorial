import React from 'react';
import Button from '@lskjs/button';
import { Provider } from 'mobx-react';
import i18 from './i18';
import Translate from './Translate';
import Form from './Form';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Provider i18={i18}>
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
          <div style={{ padding: 12 }}>
            <Translate />
          </div>
          <div style={{ padding: 12, width: 300, background: 'white' }}>
            <Form
              onSubmit={(values) => {
                alert(JSON.stringify(values, null, 2));
              }}
            />
          </div>
        </header>
      </div>
    </Provider>
  );
}

export default App;
