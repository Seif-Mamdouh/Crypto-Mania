import React from 'react'

import CryptoCard from './CryptoCard';
import UseCoinGeckoApi from './UseCoinGeckoApi'; 


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
        return <div>Error: {error} </div>;
    }
    return (
        <>
            <div>
                <input type="text" onChange={handleChange} />
            </div>
            <div>
                {filteredCoins.map((coin) => {
                    return (
                    <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                    }}
                    >
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
