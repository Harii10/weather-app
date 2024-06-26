import React from "react";
import Weather from './components/weather'
import {Outlet} from 'react-router-dom'
import { useState, useEffect } from "react"
import Search from "./components/Search";
function App() {
  const [backgroundImage, setBackgroundImage] = useState("")

  useEffect(() => {
    const updateBackgroundImage = () => {
      const now = new Date()
      const hour = now.getHours()
      const minutes = now.getMinutes()
      let imageUrl;

      if (hour >= 5 && hour < 12) {
        imageUrl = "images/c-morning.jpg"
      } else if (hour >= 18 && hour < 19) {
        imageUrl = "images/evening.jpg"
      } else {
        imageUrl = "images/nyt.jpg"
      }

      document.body.style.backgroundImage = `url(${imageUrl})`
      document.body.style.backgroundSize = "cover"
      document.body.style.backgroundPosition = "center"
    }

    updateBackgroundImage()
    const intervalId = setInterval(updateBackgroundImage, 60 * 60 * 1000) 
    return () => clearInterval(intervalId) 
  }, [])
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Weather />
    </div>
  )
}

export default App
