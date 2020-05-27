import React from 'react';
import Navbar from '../navbar/Navbar'
import MarketingButtons from './Marketingbuttons';
import './styles.scss';

function Marketing() {

  return (
    <div data-test="marketing">
      <Navbar/>
      <MarketingButtons/>
    </div>
  );
};

export default Marketing;
