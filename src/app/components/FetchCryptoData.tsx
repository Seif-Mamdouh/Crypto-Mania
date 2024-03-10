import React from 'react'

// import SearchCrypto from './SearchCrypto';
import CryptoCard from './CryptoCard';



const FetchCryptoData = () => {
    const [state, setState] = React.useState({
        data: null,
        error: null
    });

    React.useEffect(() => {
        console.log(state.data)
        fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        )
          .then((response) => response.json())
            .then(
            (data) => setState({ ...state, data: data }),
            (error) => setState({ ...state, error: error })
          );
    }, []);

    if (state.error) {
        return <div>Error: {state.error.message} </div>;
    } else {
        return (
            <div>
                    {state.data &&
                        state.data.map((coin) => {
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
                                        price={coin.current_price} />
                                </div>
                            );
                        })}
                </div>
        );
    }
}

export default FetchCryptoData
