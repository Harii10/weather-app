import React from "react"
import { useEffect, useState, useRef } from "react"
import { GoSearch } from "react-icons/go"
import { Link, NavLink } from "react-router-dom"
import { IoMdArrowRoundBack } from "react-icons/io"
import CityForecast from "./CityForecast"

function Search() {
  const [locationInfo, setLocationInfo] = useState("")
  const [location, setLocation] = useState("")
  const [error, setError] = useState(false)
  const API_KEY = "99ea54ebc825a0dfb653a4c3f5e552d1"

  const inputRef = useRef(null)

  const search = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
      )
      const data = await response.json()
      setLocationInfo(data) 
    } 
    catch (error) {
      console.error("Error fetching weather data by city:", error)
      setError(true)
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
  }
  const handleInputChange = (e) => {
    setLocation(e.target.value)
  }

  return (
    <div className=" bg-black h-lvh text-white">
      <div>
        <div className="pt-7 pl-5">
            <NavLink to="/weather-app/">
              <IoMdArrowRoundBack />
          </NavLink>
        </div>
        <form className="flex justify-center relative " onSubmit={handleSearch}>
          <input
            type="text"
            className="pl-14 pr-4 py-2 w-80 h-10 bg-bll text-white outline-none rounded-full mt-7 sm:w-lvw sm:m-5 sm:pl-16 md:w-lvw m-5 md:pl-16 2xl:m-8 2xl:pl-14"
            placeholder="Enter Location"
            onChange={handleInputChange}
            ref={inputRef}
          />
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none mt-2 ml-5 sm:-mt-1 lg:-mt-1 md:mt-1">
            <button onClick={() => search(inputRef.current.value)}>
              <GoSearch className="h-6 w-6 text-gray-300 ml-3" />
            </button>
          </div>
        </form>
        {error ? (
          <p>Invalid Input</p>
        ):(
          <div>{locationInfo && <CityForecast value={locationInfo} inputValue={inputRef}/>}</div>
        )} 
      </div>
    </div>
  )
}

export default Search
