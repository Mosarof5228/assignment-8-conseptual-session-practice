import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleCart from '../SINGLECART/SingleCart';
import './LeftSide.css'

const LeftSide = (props) => {
    const handleAddToCart = props.handleAddToCart;
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [])
    return (
        <div className='gap-4 grid md:grid-cols-2 lg:grid-cols-3'>
            {
                movies.map((movie, index) => <SingleCart
                    movie={movie}
                    key={index}
                    handleAddToCart={handleAddToCart}

                ></SingleCart>)
            }
        </div>
    );
};

export default LeftSide;