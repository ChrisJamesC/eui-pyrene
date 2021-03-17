import React from 'react';
import {EuiSuperDatePicker} from '@elastic/eui'
// import logo from './logo.svg';
import './App.css';

function App() {
  const handleTimeChange = () => {}
  return (
    <div className="App">
      <EuiSuperDatePicker onTimeChange={handleTimeChange}/>
    </div>
  );
}

export default App;
