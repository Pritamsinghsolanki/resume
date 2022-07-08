import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import { CPData } from './../../assets/cpData';
import ProjectCard from './CPCard';
import './CP.css';


const CP = () => {
    return (
        <div className='section-container'>
            <Header
                heading='My Programming Journey so far...'
                details="These are some of the ratings on the platforms on which I used to practise"
            />
            <div className='cp-cards-container'>
                {CPData.map(
                    ({
                        PlatformName,
                        Ratings,
                        profileUrl,
                        imageUrl,
                    }) => {
                        return (
                            <ProjectCard
                                PlatformName={PlatformName}
                                Ratings={Ratings}
                                profileUrl={profileUrl}
                                imageUrl={imageUrl}
                            />
                        );
                    }
                )}
            </div>

            <FooterLink
                phrase='Check out '
                link='my skills!'
                toAdress='/skills'
            />
        </div>

    )
}

export default CP
