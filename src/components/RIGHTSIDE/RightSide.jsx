import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const RightSide = ({ watchTime }) => {
    const [time, setTime] = useState(watchTime);
    const [breakTime, setBreakTime] = useState(0);

    useEffect(() => {
        const previousDataFLS = localStorage.getItem("watchTime");
        setTime(previousDataFLS)
        const breakTime = localStorage.getItem("breakTime");
        if (breakTime === null) {
            breakTime = 0;

        }
        setBreakTime(breakTime)


    }, [watchTime])
    console.log(watchTime)

    const handleBreakTime = (bt) => {
        localStorage.setItem('breakTime', bt)
        setBreakTime(bt)

    }
    const toastHandle = () => {
        toast("Wow so easy!")
    }


    return (
        <div>
            <h2 className='text-center text-2xl font-bold underline'>My Cart</h2>
            <h4 className='mt-3 text-center'>Total Watch Time</h4>
            <input value={time} type="text" placeholder="Type here" className="input input-bordered input-info ml-[5%] text-center mt-3 w-[80%] h-8 max-w-xs" />
            <div className='mx-auto text-center'>
                <button onClick={() => handleBreakTime(15)} className='bg-orange-500 m-2 rounded-3xl'>15</button>
                <button onClick={() => handleBreakTime(20)} className='bg-orange-500 m-2 rounded-3xl'>20</button>
                <button onClick={() => handleBreakTime(30)} className='bg-orange-500 m-2 rounded-3xl'>25</button>
            </div>
            <input type="text" value={breakTime} placeholder="break time" className="input input-bordered input-info ml-[5%] text-center mt-3 w-[80%] h-8 max-w-xs" />

            <button onClick={toastHandle}>Toast </button>

        </div>
    );
};

export default RightSide;