import React from 'react';
import './SearchResult.css';
import { FaHeart, FaStar } from 'react-icons/fa'

function SearchResult({ img, location, title, description, star, price, total }) {
    return <div className="searchResult">
        <img src={img} alt="" />
        <FaHeart className="searchResult__heart" />

        <div className="searchResult__info">
            <div className="searchResult__infoTop">
                <p>{location}</p>
                <h3>{title}</h3>
                <p>____</p>
                <p>{description}</p>
            </div>

            <div className="searchResult__infoBottom">
                <div className="searchResult__stars">
                    <FaStar className="searchResult__star" />
                    <p>
                        <strong>{star}</strong>
                    </p>

                </div>
            </div>
            <div className="searchResults__price">

                    <h2>{price}</h2>
                    <p>{total}</p>
            </div>

        </div>

    </div>;
}

export default SearchResult;
