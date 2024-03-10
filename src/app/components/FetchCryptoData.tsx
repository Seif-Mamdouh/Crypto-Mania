import React from 'react'

import CryptoCard from './CryptoCard';



const FetchCryptoData = () => {
    const [state, setState] = React.useState({
        data: null,
        error: null
    });

    const [search, setSearch] = React.useState("");

    React.useEffect(() => {
        console.log(state.data)
        fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=&order=market_cap_desc&per_page=10&page=3&sparkline=false&price_change_percentage=1h%2C24h%2C7d"
        )
          .then((response) => response.json())
          .then(
            (data) => setState({ ...state, data: data }),
            (error) => setState({ ...state, error: error })
          );
    }, []);

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

      const filteredCoins = state.data && state.data.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
      );

    if (state.error) {
        return <div>Error: {state.error.message} </div>;
    } else {
        return (
          <>
            <div>
                    <input type="text" onChange={handleChange}/>
            </div>
            <div>
              {filteredCoins && filteredCoins.map((coin) => {
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
          // <div>
          //        {state.data &&
          //             state.data.map((coin) => {
          //                 return (
          //                     <div
          //                         style={{
          //                             display: "flex",
          //                             flexWrap: "wrap",
          //                             justifyContent: "center",
          //                         }}
          //                     >
          //                         <CryptoCard
          //                             key={coin.id}
          //                             name={coin.name}
          //                             image={coin.image}
          //                             price={coin.current_price} />
          //                     </div>
          //                 );
          //             })}
          //     </div>
        );
    }
}

export default FetchCryptoData
