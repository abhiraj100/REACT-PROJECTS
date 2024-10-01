import React, { useEffect, useState } from "react";
// import countriesData from "../countriesData";
import CountryCard from "./CountryCard";

const CountriesList = ({ query }) => {
  // const filteredCountries = countriesData.filter((country) => country.name.common.includes('India') );
  
  // let countriesData = [];
  // let [countriesData, setCountriesData] = useState([]);
  // fetch('https://restcountries.com/v3.1/all')
  // .then((res) => res.json())
  // .then((data) => {
  //   setCountriesData(data);
  // })

  // due to this it contiunously send the request to the server.

  // let [countriesData, setCountriesData] = useState([]);
  // if(countriesData.length === 0){
  //   fetch('https://restcountries.com/v3.1/all')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setCountriesData(data);
  //   })
  // }

  let [countriesData, setCountriesData] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data) => {
      setCountriesData(data);
    })
  }, []);

  // for unmount condition 

  // let [countriesData, setCountriesData] = useState([]);
  // useEffect(() => {
  //   fetch('https://restcountries.com/v3.1/all')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setCountriesData(data);
  //   })

  //   const intervalId = setInterval(() => {
  //     console.log('running countriesList component');
  //   }, [1000])

  //   console.log(intervalId);
    
  //   return () => {
  //     clearInterval(intervalId)
  //   }
  // }, []);



  // we can define multiple useEffect
  // useEffect(() => {
  //   console.log("hi");
  // }, [])
  
  return (
    <div className="countries-container">
      {
        countriesData.filter((country) => country.name.common.toLowerCase().includes(query)).map((country) => {
        return (
          <CountryCard
            key={country.name.common}
            name={country.name.common}
            flag={country.flags.svg}
            population={country.population}
            region={country.region}
            capital={country.capital?.[0]}
          />
        );
      })
      };
    </div>
  );
};

export default CountriesList;
