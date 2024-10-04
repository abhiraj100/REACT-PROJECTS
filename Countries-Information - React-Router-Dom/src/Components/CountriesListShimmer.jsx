/* eslint-disable no-unused-vars */
import React from 'react';
import "./CountriesListShimmer.css";

const CountriesListShimmer = () => {
    // const numberOfCards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    // const numberOfCards = new Array(16).fill(0);
    const numberOfCards = Array.from({length: 40});
  return (
    <div className='Countries-container shimmer'>
    {
        numberOfCards.map((card) => (
            <div key={card} className='country-card shimmer-card'>Loading...</div>
        ))
    }
      
    </div>
  )
}

export default CountriesListShimmer;