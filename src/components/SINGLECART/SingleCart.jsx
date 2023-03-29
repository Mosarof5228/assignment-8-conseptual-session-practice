import React from 'react';
import './SingleCart.css'
const SingleCart = (props) => {
    const handleAddToCart = props.handleAddToCart;
    console.log(props.movie)
    const { poster, movieName, category, imdbRating, watchTime, description
    } = props.movie

    return (
        <div>
            <div className="card w-100% h-80 glass">
                <figure><img src={poster} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className='font-bold'>{movieName}</h2>
                    <p>{description}</p>
                    <div className='flex justify-between font-bold'>
                        <p>WatchTime:{watchTime}</p>
                        <p>Rating:{imdbRating}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={() => { handleAddToCart(props.movie.watchTime) }} className="btn btn-primary w-[100%]">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCart;