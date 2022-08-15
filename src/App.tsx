import { useState } from 'react';
import { useQuery } from 'react-query';
// Types
import { BitcoinData, Currencies } from './bitcoinTypes';
// Styles
import { Wrapper } from './App.styles';

const getBCData = async (): Promise<BitcoinData> => await (await fetch('https://blockchain.info/ticker')).json();

const INTERVAL_TIME = 5000; // ms

const App = () => {
  const [currency, setCurrency] = useState<Currencies>(Currencies.USD);
  const { data, isLoading, error } = useQuery<BitcoinData>('bc-data', getBCData, {
    refetchInterval: INTERVAL_TIME
  });

  const handleCurrencySelection = (e: any) => setCurrency(e.currentTarget.value);

  if (isLoading) return <div>Loading ...</div>;
  if (error) return <div>Something went horrible wrong ...</div>;

  return (
    <Wrapper>
      <>
        <h2>Bitcoin Price</h2>
        <select value={currency} onChange={handleCurrencySelection}>
          {data &&
            Object.keys(data).map(currency => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
        </select>
        <div>
          <h2>
            {data && data[currency].symbol}
            {data && data[currency].last}
          </h2>
        </div>
      </>
    </Wrapper>
  );
};

export default App;
