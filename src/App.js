import React from 'react';
import Button from '@mui/material/Button';
import logo from './logo.svg';
import './App.css';
import SignIn from './SignIn';
import Register from './components/Register';
import AddNewItemForm from './components/AddNewItemForm.js';

function App() {
  return (
    <div className="App">
      {/* <SignIn /> */}
      {/* <Register /> */}
      <AddNewItemForm />
    </div>
  );
}

export default App;
