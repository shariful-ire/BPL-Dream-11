import  { Suspense, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Banner from './components/homePage/banner/Banner';
import Players from './components/players/Players';
import Footer from './components/footer/Footer';
import Subscribe from './components/subscribe/Subscribe';


 const fetchPlayer= async () => {
    const res= await fetch("/data.json");
    return res.json();
   }

const App = () => {

  const [coin, setCoin]=useState(5000000);
  const playerPromise= fetchPlayer();

  return (
    <div>
      <Navbar  coin={coin}></Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}> 
        <Players playerPromise={playerPromise} coin={coin} setCoin={setCoin}></Players>
      </Suspense>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
};

export default App;