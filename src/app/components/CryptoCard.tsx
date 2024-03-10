import React from 'react'




const CryptoCard = ({image, name, price}) => {
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
        <img src={image} alt="crypto" />
        <h1>{name}</h1>
        <p>${price}</p>
      </div>
    );
};

export default CryptoCard
