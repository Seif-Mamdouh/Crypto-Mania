import React from 'react'

interface CoinGeckoGetApiData {
    id: string,
    name: string,
    image: string,
    current_price: number,
}

interface State {
    data: CoinGeckoGetApiData[] | null,
    error: string,
}

const UseCoinGeckoApi = () => {
    
    const [state, setState] = React.useState<State>({ data: null, error: null });

    React.useEffect(() => {
        fetch(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        )
            .then((response) => response.json())
            .then(
              (data) => setState({ ...state, data: data }),
              (error) => setState({ ...state, error: error })
            );
    }, []);

    return { data: state.data, error: state.error };
}

export default UseCoinGeckoApi
