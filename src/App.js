import './App.css';
import PersonCard from './components/Props'
import React, {useState} from 'react';



function App() {

  return (
    <div className="App">
      <PersonCard firstName = {"Who"} lastName = {"Me"} age = {76} hairColor = {"orange"}/>
      <PersonCard firstName = {"Wierd"} lastName = {"stuff"} age = {28} hairColor = {"magenta"}/>

    </div>
  );
}

export default App;
