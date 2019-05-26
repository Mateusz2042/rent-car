import React from 'react';
import Layout from './components/Layout';
import Routes from './routes';
import './App.scss';

function App() {
  return (
    <div className="App">
        <Layout>
          <Routes />
        </Layout>
    </div>
  );
}

export default App;
