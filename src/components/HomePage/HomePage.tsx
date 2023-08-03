import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const HomePage: React.FC = (): JSX.Element => {
  return (
    <div className="HomePage">
      <h1 className="HomePage__Heading">Welcome to Snapp Food!</h1>
      <Link className="HomePage__VendorCardsLink" to="/vendor-cards">Go to Vendor Cards</Link>
    </div>
  );
};

export default HomePage;
