import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import React, { useEffect, useState } from 'react';

function App() {

  // code for smaller devices to desable
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // if (windowWidth < 800) {
  //   return <div className=' text-center text-4xl font-semibold text-red-300 bg-red-800 px-5 py-2'>Please open on in desktop for better view.</div>;
  // }

  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
