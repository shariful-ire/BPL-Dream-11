import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">
        <img src='/src/assets/logo.png'></img>
    </a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-3 gap-8">
      <li className='border-2 border-b-cyan-400 rounded-xl '><a>Home</a></li>
      <li className='border-2 border-b-cyan-400 rounded-xl '><a>Fixtures</a></li>
      <li className='border-2 border-b-cyan-400 rounded-xl '><a>Team</a></li>
      <li className='border-2 border-b-cyan-400 rounded-xl '><a>Coin</a></li>
      
    </ul>
  </div>
</div>
    );
};

export default Navbar;