import React, { useEffect } from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
  useEffect(()=>{
    fetch('./data.txt')
    .then(res=>res.text())
    .then(data=>readableData(data))
  },[])

  const readableData=(data:string)=>{
    console.log(data.slice(0,data.slice(0,data.indexOf('\n')).length))
    console.log(data.slice(data.indexOf('\n')).split('\n'))
  }
  return (
    <div className="mt-3 text-center">
      <h3 className='text-center'>Counter</h3>
      <Counter/>
    </div>
  );
}

export default App;
