import React from 'react'
import Home from './components/Home'
import axios from 'axios'
import { useState, useEffect } from 'react'


const App = () => {
  const [input, setInput] = useState("");
  const [info, setInfo] = useState({});

  useEffect(() => {
    fetchData()
  },[])

  const fetchData = () => {
    axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_uDsaHgNrdNbJ1noHbgdXQN9IvZ5q6&ipAddress=${input}`)
    .then((res) => {
      setInfo(res.data)
      console.log(res.data)
    })
  }

  const handleInput = (e) => {
    setInput(e.target.value)
  }


  return (
    <div>
      <Home
        info = {info}
        handleInput = {handleInput}
        fetchData = {fetchData}
      />
    </div>
  )
}

export default App