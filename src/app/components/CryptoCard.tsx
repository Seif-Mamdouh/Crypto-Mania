import React from 'react'

import "../styles/style.css";

interface CryptoCardProps {
  image: string,
  name: string,
  price: number,
}


const CryptoCard = ( props: CryptoCardProps) => {
    return (
      <div className="crypto-card">
        <img src={props.image} alt="crypto" />
        <h1>{props.name}</h1>
        <p>${props.price}</p>
      </div>
    );
};

export default CryptoCard
