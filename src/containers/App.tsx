import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../components/HomePage/HomePage';
import VendorCardsPage from '../components/VendorCardsPage/VendorCardsPage';


const App = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vendor-cards" element={<VendorCardsPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
