import React from 'react'



interface CryptoCardProps {
  image: string,
  name: string,
  price: number,
}


const CryptoCard = ( props: CryptoCardProps) => {
    return (
      <div
        style={{
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: "20px",
                margin: "5px",
                width: "30vw",
                textAlign: "center",
        }}
      >
        <img src={props.image} alt="crypto" />
        <h1>{props.name}</h1>
        <p>${props.price}</p>
      </div>
    );
};

export default CryptoCard
