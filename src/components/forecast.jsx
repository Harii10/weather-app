import React from "react";
import { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
function forecast({ data }) {
  const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const dayInWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  );

  return (
    <div>
      <div className="flex flex-col justify-center items-center space-x-6 -mt-8 m-2 p-3 rounded-xl text-white">
        {data.list.splice(0, 5).map((item, idx) => (
          <Accordion
            style={{
              backgroundColor: "transparent",
              color: "white",
              margin:"3px",
              border:'1px solid white',
              borderRadius:'10px',
            }}
            id='accordion'
          >
            <AccordionSummary style={{ width: "lvw" }}>
              <div className="flex justify-between w-80">
                <div>
                  <p>{forecastDays[idx]}</p>
                  <img
                    className="w-7 h-7 "
                    src={`images/${item.weather[0].icon}.png`}
                  />
                </div>
                <div>
                  <p className="mt-4 capitalize">{item.weather[0].description}</p>
                </div>
                <div>
                  <p className="text-xs mt-4">
                    {Math.round(item.main.temp_min)}°/{" "}
                    {Math.round(item.main.temp_max)}°
                  </p>
                </div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="w-80">
                <div>
                  <div className="flex justify-between">
                    <p className="text-xs font-semibold">Wind</p>
                    <p>{item.wind.speed} Kph</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-xs font-semibold">Pressure</p>
                    <p>{item.main.pressure} mBar</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-xs font-semibold">Min Max</p>
                    <p>
                      {Math.round(item.main.temp_min)}° /{" "}
                      {Math.round(item.main.temp_max)}°
                    </p>
                  </div>

                  <div className="flex justify-between">
                    <p className="text-xs font-semibold">Humidity</p>
                    <p>{item.main.humidity}%</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-xs font-semibold">Feels Like</p>
                    <p>{Math.round(item.main.feels_like)}°</p>
                  </div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default forecast;
