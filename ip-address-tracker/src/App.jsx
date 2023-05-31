import React from 'react'
import Home from './components/Home'
import axios from 'axios'
import { useState, useEffect } from 'react'
import DotLoader from "react-spinners/DotLoader";


const App = () => {
  const [input, setInput] = useState("");
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)

    fetchData()
    
    setTimeout(() =>{
      setLoading(false)
    }, 1000)

  },[])

  const fetchData = () => {
    axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_4r0jmA0WwOurGCXfylXEqgpzmchIY&ipAddress=${input}`)
    .then((res) => {
      setInfo(res.data)
    })
  }

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = () => {
    setLoading(true)

    fetchData();

    setTimeout(() =>{
      setLoading(false)
    }, 2000)
  }


  return (
    <div className='flex items-center justify-center w-full h-screen '>
      {
        loading ?
  
        <DotLoader
          color={'#376ad7'}
          loading={loading}
          size={70}
        />

        :

        <Home
        info = {info}
        handleInput = {handleInput}
        handleSubmit = {handleSubmit}

      />
      }
   
    </div>
  )
}

export default App