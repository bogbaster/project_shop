import React from 'react'
import axios from 'axios'

const App = () => {

  const addBrand = async () => {
    const resp = await axios.post('http://127.0.0.1:5000/api/brand', {name:"puma"})
    console.log(resp)
  }

  return (
    <button onClick={addBrand}>btn send brand</button>
  )
}

export default App