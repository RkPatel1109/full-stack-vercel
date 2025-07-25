import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [data, setData] = useState("")

useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch(import.meta.env.VITE_API_KEY + "/api/hello");
      const data = await res.json();
      console.log("API response:", data);
      setData(data?.message)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, []);


  return (
    <>

      <h1>Vite + React</h1>
      {data && data}
    </>
  )
}

export default App
