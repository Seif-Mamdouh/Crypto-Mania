import React from 'react'

const FetchCryptoData = () => {
    const [state, setState] = React.useState({
        data: null,
        error: null
    });

    React.useEffect(() => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
          .then((response) => response.json())
          .then(
            (data) => setState({ ...state, data: data }),
            (error) => setState({ ...state, error: error })
          );
    }, []);

    if (state.error) {
        return <div>Error: {state.error.message}</div>;
    } else {
        return (
            <div>
                {state.data && state.data.map((item: any) => (
                    <div key={item.id}>{item.name}</div>
                ))}
            </div>
        );
    }
}

export default FetchCryptoData
