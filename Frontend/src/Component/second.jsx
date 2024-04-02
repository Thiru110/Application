import axios from 'axios'
import React, { useState } from 'react'

const Second = () => {
    const[joke,setJoke]=useState('random joke')
    const change=async()=>{
        // console.log('fetch and joke');
        try {
            const response=await axios(response)
        } catch (error) {
            
        }
    }
  return (
    <section>
        <button className='btn' onClick={change}>random joke</button>
        <p>{joke}</p>
    </section>
  )
}

export default Second