import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/home/Home';
import { Rates } from '../pages/rates/Rates';
import { Layout } from './layout/Layout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/rates" element={<Rates />}></Route>
        </Route>
      </Routes>
    </div>
  );
};
