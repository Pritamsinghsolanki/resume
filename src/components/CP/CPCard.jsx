import React from 'react';
import { Link } from 'react-router-dom';
import './CP.css';

const CPCard = ({
     PlatformName,
     Ratings,
     profileUrl,
     imageUrl,
}) => {
    return (
        <div className='cp-card'>
            <div className='image-container'> 
                 <a href={profileUrl} className='cp-external-link'>
                     <img
                        src={imageUrl}
                        alt='Platform'
                        className='cp-image'
                    /> 
               </a> 
            </div> 

            <div className='cp-details-container'>
                <h2 className='cp-heading'>{PlatformName}</h2>
                <p className='cp-details'>{Ratings}</p>
                <a href={profileUrl} className='cp-yt-link'>
                    <p>Profile Link</p>
                </a>
            </div>
        </div>
    );
};

export default CPCard;
