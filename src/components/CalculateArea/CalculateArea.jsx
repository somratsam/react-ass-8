import React, { useEffect, useState } from 'react';

const CalculateArea = ({ readTime }) => {
    const [time, setTime] = useState(readTime)

    useEffect(() => {

        const getReadTime = localStorage.getItem("readTime")
        setTime(getReadTime);
    }, [readTime])

    return (
        <div>
            <div className='text-center  text-info shadow-5'>
                <h3>Spent time on read : {time} </h3>
            </div>
            <div className='fw-bold text-center mt-3'>
                Bookmarked blogs :
            </div>
        </div>

    );
};

export default CalculateArea;