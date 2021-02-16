import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import './HomePage.css';

const NavBar = () => {
  const [value, setValue] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="wrapper">
      <div className="bg">
        <h1>HOMEPAGE</h1>
        <Clock value={value} />
      </div>
    </div>
  );
};

export default NavBar;
