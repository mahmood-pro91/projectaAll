import './App.css';
import axios from "axios"
import React, {useState, } from 'react'


export default function  App(){
  const [advice, setAdvice] = useState(fetchAdvice())


 function fetchAdvice( ){
    axios.get('https://api.adviceslip.com/advice')
    .then(res => {
      const {advice} = res.data.slip
      setAdvice(advice)
    })
    .catch(err => console.log(err))
  }

  
  return(
    <>
      <div className='App'>
        <div className="card">

        <h1 className="head" >{advice}</h1>
        
        <button onClick={fetchAdvice}>generate another advice</button>
      
        </div>
        
      </div>

    </>
  )
}