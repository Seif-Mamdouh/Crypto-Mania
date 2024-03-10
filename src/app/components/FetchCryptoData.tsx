import React from 'react'

import CryptoCard from './CryptoCard';
import UseCoinGeckoApi from './UseCoinGeckoApi'; 

import "../styles/style.css";


const FetchCryptoData = () => {
    const { data: state, error: error } = UseCoinGeckoApi();

    const [search, setSearch] = React.useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const filteredCoins = !!state
        ? state.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())) 
        : []

    if (error) {
        console.log(error)
        return <div>Error: {`${error}`} </div>;
    }
    return (
      <>
        <div className = "crypto-search-container">
          <input className='crypto-search' type="text" placeholder='Search for a Coin' onChange={handleChange} />
        </div>
        <div className="crypto-card-container ">
          {filteredCoins.map((coin) => {
            return (
              <div className="crypto-card-row-column-card">
                <CryptoCard
                  key={coin.id}
                  name={coin.name}
                  image={coin.image}
                  price={coin.current_price}
                />
              </div>
            );
          })}
        </div>
      </>
    );
}

export default FetchCryptoData
