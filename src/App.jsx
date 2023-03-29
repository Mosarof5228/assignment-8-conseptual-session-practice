import React from 'react';
import { useState } from 'react';
import LeftSide from './components/LEFTSIDE/LeftSide';
import RightSide from './components/RIGHTSIDE/RightSide';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const [watchTime, setWatchTime] = useState("")
  const handleAddToCart = (time) => {
    const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"));
    if (previousWatchTime) {
      const sum = previousWatchTime + time;
      localStorage.setItem("watchTime", sum)
      setWatchTime(sum);

    } else {
      localStorage.setItem("watchTime", time)
      setWatchTime(time)
    }


  }
  return (
    <div>
      <div className="main flex mx-auto gap-4 mt-4">
        <div className="leftSide-Container w-[75%]">
          <LeftSide handleAddToCart={handleAddToCart}></LeftSide>
        </div>
        <div className="rightSide-Container w-[25%] ">
          <RightSide watchTime={watchTime}></RightSide>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
};

export default App;