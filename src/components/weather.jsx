import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { BiSolidTachometer } from "react-icons/bi";
import { GiThermometerHot } from "react-icons/gi";
import Forecast from "./forecast";

function weather() {
  const [weatherData, setWeatherData] = useState();
  const [forecastData, setForecastData] = useState();

  const API_KEY = "99ea54ebc825a0dfb653a4c3f5e552d1";

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherByCoords(latitude, longitude);
        fetchForecastByCoords(latitude, longitude);
      });
    }
  }, []);

  const fetchWeatherByCoords = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data by coordinates:", error);
    }
  };

  const fetchForecastByCoords = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      setForecastData(data);
    } catch (error) {
      console.error("Error fetching forecast data by coordinates:", error);
    }
  };

  return (
    <div className="items-center justify-center h-screen overflow-x-hidden text-white md:w-lvw">
      {weatherData && (
        <div className=" mt-6 md:mt-16">
          <div className=" w-fit h-fit ml-11">
            <NavLink to="/weather-app/search">
              <GoSearch />
            </NavLink>
          </div>
          <div className="flex justify-center align-middle">
            <h2 className="text-2xl font-semibold">{weatherData.name}</h2>
          </div>
          <div className="grid items-center justify-center h-64 mt-7">
            <div className="grid items-center justify-center">
              <p className="font-semibold text-6xl">
                {Math.round(weatherData.main.temp)}°C
              </p>
            </div>
            <div className="flex items-center justify-center text-xs font-medium">
              <p className="-mt-36 ml-2 font-normal text-lg">
                {weatherData.weather[0].description}
              </p>
            </div>
          </div>
        </div>
      )}
      <div>{forecastData && <Forecast data={forecastData} />}</div>
      {weatherData && (
        <div className="m-4 mt-10">
          <h5 className="font-semibold text-md">Daily Conditions</h5>
        </div>
      )}
      {weatherData && (
        <div className="grid grid-rows-3 grid-flow-col gap-4 m-4 mt-7">
          <div className="flex justify-between p-4 border rounded-lg h-32">
            <div className="flex flex-col justify-center">
              <p className="text-xl font-semibold">Today</p>
              <p>{weatherData.weather[0].main}</p>
            </div>
            <div className="mt-8">
              <img
                className="w-7 h-7"
                src={`images/${weatherData.weather[0].icon}.png`}
              />
            </div>
          </div>
          <div className="flex justify-between p-4 border rounded-lg h-32">
            <div className="flex flex-col justify-center">
              <p className="text-xl font-semibold">Pressure</p>
              <p>{weatherData.main.pressure}mBar</p>
            </div>
            <div className="mt-8">
              <BiSolidTachometer className="h-8 w-8" />
            </div>
          </div>
          <div className="flex justify-between p-4 border rounded-lg h-32">
            <div className="flex flex-col justify-center">
              <p className="text-xl font-semibold">Min Max</p>
              <p>
                {Math.round(weatherData.main.temp_min)}°C /{" "}
                {Math.round(weatherData.main.temp_max)}°C
              </p>
            </div>
          </div>
          <div className="flex justify-between p-4 border rounded-lg h-32">
            <div className="flex flex-col justify-center">
              <p className="text-xl font-semibold">Wind</p>
              <p>{weatherData.wind.speed}Kph</p>
            </div>
            <div className="mt-8">
              <FaWind className="h-8 w-8" />
            </div>
          </div>
          <div className="flex justify-between p-4 border rounded-lg  h-32">
            <div className="flex flex-col justify-center">
              <p className="text-xl font-semibold">Humidity</p>
              <p>{weatherData.main.humidity}%</p>
            </div>
            <div className="mt-3">
              <WiHumidity className="h-14 w-14" />
            </div>
          </div>
          <div className="flex justify-between p-4 border rounded-lg h-32">
            <div className="flex flex-col justify-center">
              <p className="text-xl font-semibold">Feels Like</p>
              <p>{Math.round(weatherData.main.feels_like)}°</p>
            </div>
            <div className="mt-4">
              <GiThermometerHot className="w-12 h-12" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default weather;
