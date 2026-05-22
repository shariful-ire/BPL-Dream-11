import React, { Suspense } from 'react';
import Navbar from './components/navbar/Navbar';
import Banner from './components/homePage/Banner';
import Players from './components/players/Players';

 const fetchPlayer= async () => {
    const res= await fetch("/data.json");
    return res.json();
   }

const App = () => {
  const playerPromise= fetchPlayer();

  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}> 
        <Players playerPromise={playerPromise}></Players>
      </Suspense>
    </div>
  );
};

export default App;