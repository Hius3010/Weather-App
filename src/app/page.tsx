"use client";
import "../app/globals.css";
import Input from "@/components/Input";
import React, { useState } from "react";
import Current from "@/components/current";
import WeekForecast from "@/components/WeekForecast";
import WeatherDetails from "@/components/WeatherDetails";

const Home = () => {
  const [data, setData] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const url = `http://api.weatherapi.com/v1/forecast.json?key=ff6077ed48d54d219ee115222231707&q=${location}&days=7&aqi=yes&alerts=yes`;

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error();
        }
        const data = await res.json();
        setData(data);
        setLocation("");
        setError("");
      } catch (err) {
        setError("City not found");
        setData("");
      }
    }
  };

  let content;
  if (Object.keys(data).length === 0 && error === "") {
    content = (
      <div className="text-white text-center h-screen mt-[5rem]">
        <h2 className="text-3xl font-bold mb-4">Welcome to the Weather App</h2>
        <p className="text-xl">Enter a city name to get the weather forecast</p>
      </div>
    );
  } else if (error !== "") {
    content = (
      <div className="text-white text-center h-screen mt-[5rem]">
        <p className="text-3xl font-bold mb-4">City Not Found</p>
        <p className="text-xl">Enter a Valid City</p>
      </div>
    );
  } else {
    content = (
      <>
        <div className="flex md:flex-row flex-col p-12 items-center justify-center">
          <Current data={data}/>
          <WeekForecast data={data}/>
        </div>
        <div>
          <WeatherDetails data={data}/>
        </div>
      </>
    );
  }

  return (
    <div
      className="bg-cover bg-gradient-to-r from-blue-500 to-blue-300 
    h-fit w-full"
    >
      <div
        className="bg-white/25 w-full rounded-lg
      flex flex-col h-fit"
      >
        {/*Search bar and logo*/}
        <div
          className="flex flex-col md:flex-row 
        justify-between items-center p-12"
        >
          <Input handleSearch={handleSearch} setLocation={setLocation} />
          <h1
            className="mb-8 md:mb-0 order-1 
          text-white py-2 px-4 rounded-xl italic font-bold"
          >
            Weather App
          </h1>
        </div>
        {content}
      </div>
    </div>
  );
};

export default Home;
