import { useSelector } from 'react-redux';
import { getBaceCurrency } from 'Redux/selectors';

export const Rates = () => {
  const baceCurrency = useSelector(getBaceCurrency);
  return (
    <>
      <p>Rates</p>
      <p>Current value use: {baceCurrency}</p>
    </>
  );
};
