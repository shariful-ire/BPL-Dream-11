import React, { Suspense, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Banner from './components/homePage/banner/Banner';
import Players from './components/players/Players';

 const fetchPlayer= async () => {
    const res= await fetch("/data.json");
    return res.json();
   }

const App = () => {

  const [coin, setCoin]=useState(50000);
  const playerPromise= fetchPlayer();

  return (
    <div>
      <Navbar  coin={coin}></Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}> 
        <Players playerPromise={playerPromise}></Players>
      </Suspense>
    </div>
  );
};

export default App;