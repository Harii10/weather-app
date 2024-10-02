import React, { useState, useEffect } from 'react'
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

function CityForecast({value, inputRef}) {
  const [background, setBackground] = useState("")
  // function timeBackground(){
  //   const time = new Date().getHours()
  //   if(time >= 5){
  //     background = "#4B70F5"
  //   }
  //   else if(time >= 18 && time <= 19){
  //     background = "linear-gradient(to right,#F3904F,#3B4371)"
  //   }
  //   else{
  //     background = "#3652AD"
  //   }
  // }
  return (
    <div>
        <Accordion
              className=" h-fit"
              style={{
                margin: "20px",
                color: "white",
                background: "linear-gradient(to right,#3652AD,#3B4371)",
                height: "80px",
                borderRadius: '10px'
              }}
            >
              <AccordionSummary
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <div className="flex justify-between items-center w-full h-20 -mt-4">
                  <div>
                    <p className="font-medium md:font-semibold md:text-xl lg:font-semibold lg:text-xl xl:font-bold xl:text-xl 2xl:font-semibold 2xl:text-xl">{value.name}</p>
                    <p className="text-xs mt-1">
                      {Math.round(value.main.temp_min)}°C /{" "}
                      {Math.round(value.main.temp_min)}°C
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-2xl">
                      {Math.round(value.main.temp)}°C
                    </p>
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails className="border border-gray-600 "
              style={{borderRadius: '3px', marginTop:'-20px', background: "#0F0F0F"}}>
                <div className="pt-1">
                  <p className="flex justify-between items-center">
                    <span className="font-semibold">Humidity</span>{" "}
                    <span>{value.main.humidity}%</span>
                  </p>
                  <p className="flex justify-between items-center">
                    <span className="font-semibold">Pressure</span>{" "}
                    <span>{value.main.pressure} mBar</span>
                  </p>
                  <p className="flex justify-between items-center">
                    <span className="font-semibold">Wind Speed</span>
                    <span>{value.wind.speed} Kph</span>
                  </p>
                  <p className="flex justify-between items-center">
                    <span className="font-semibold">Feels Like</span>
                    <span>{value.main.feels_like}</span>
                  </p>
                  <p className="flex justify-between items-center">
                    <span className="font-semibold">Sea Level</span>
                    <span>{value.main.sea_level}</span>
                  </p>
                </div>
              </AccordionDetails>
            </Accordion>
    </div>
  )
}

export default CityForecast