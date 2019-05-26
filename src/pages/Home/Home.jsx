import React from 'react';

import RouteButton from '../../components/Button'
import Map from '../../components/Map'
import './_home.scss';

const Home = () => {
  return (
    <div className='home'>
      <div className='section-left'>
        <RouteButton title="Krótkoterminowo" url="/krotko-terminowy" />
        <RouteButton title="Długoterminowo" url="/dlugo-terminowy" />
        <RouteButton title="Okazjonalnie" url="/okazjonalny" />
      </div>
      <div className='section-right'>
        <Map />
      </div>
    </div>
  );
};

export default Home;
