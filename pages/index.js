import Head from "next/head";
import Image from "next/image";
import Bg from "../public/bg.jpeg";
import { useState } from "react";
import Card from "@/components/Cards";
import axios from "axios";

export default function Home() {
  const [cityName, setCityName] = useState("");
  const [show, setShow] = useState(true);
  const [currentWeather,setCurrentWeather] = useState({});

  const handleInputChange = (e) => {
    setCityName(e.target.value);
  };

  const fetchData = async (lat, lng) => {
    try {
      const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`;
      const response = await fetch(apiUrl);
      const data = await response.json();

      // Process the response data as per your project requirements
      const currentWeather = data.current_weather;
      setCurrentWeather(currentWeather);
      setShow(false);
      
      console.log(currentWeather);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          cityName
        )}&key=${process.env.NEXT_PUBLIC_API_KEY}`
      );

      const { lat, lng } = response.data.results[0].geometry;

      fetchData(lat, lng);
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  return (
    <>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" className="filter invert-100" href="/logow.svg" />
      </Head>
      <div className="absolute">
        <Image
          className="h-screen w-screen overflow-hidden"
          src={Bg}
          alt="bg"
        />
      </div>

      <div className="flex flex-col items-center justify-center pt-[250px] relative">
        <form onSubmit={handleFormSubmit}>
          <input
            className="outline-none border border-white p-2 mb-4 rounded-3xl bg-transparent w-[800px] text-white pl-4 pr-4"
            type="text"
            value={cityName}
            onChange={handleInputChange}
          />
          <button
            className="outline-none border border-white p-2 mb-4 rounded-3xl bg-transparent ml-2 text-white pl-4 pr-4"
            type="submit"
          >
            Click me
          </button>
        </form>
        {show ? (
          <h1 className="text-5xl font-thin text-white pt-4">
            Search your city here
          </h1>
        ) : (
          <Card currentWeather={currentWeather} cityName={cityName}/>
        )}
       
      </div>
    </>
  );
}
