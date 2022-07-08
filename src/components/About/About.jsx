import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import aboutVector from './../../assets/about_vector.png';
import './About.css';
import aboutAnime from './../../assets/about_anime.gif';

const About = () => {
    return (
        <div className='section-container'>
            <Header
                heading='About Me.'
                details='STUDENT | RUNNER | PROGRAMMER '
            />

            <div className='about-main'>
                <div className='about-main-left'>
                    {/* Sub section 1 */}
                    <h3 className='about-sub-head'>QUALIFICATION</h3>
                    <p className='about-details'>
                        I am a 4th year undergrad at NSUT (formely NSIT)
                        from instrumentation and control Branch .
                    </p>

                    {/* Sub section 2 */}
                    <h3 className='about-sub-head'>EXPERIENCE</h3>
                    <p className='about-details'>
                        I have been programming from more than one and a half year.
                        {/* <a
                            className='about-link-element'
                            href='https://madhavbahl.medium.com/'
                        >
                            my medium blogs today!
                        </a> */}
                    </p>

                    {/* Sub section 3 */}
                    <h3 className='about-sub-head'>HOBBIES</h3>
                    <p className='about-details'>
                        In my spare time ,I love to play cricket and watching
                        youtube videos.
                        ❤ With time I found coding as one of my hobby.
                        {/* className='about-link-element'
                            href='mailto:info@theleanprogrammer.com'
                        >
                            Email me the details!
                        </a> */}
                    </p>
                </div>

                <div className='about-main-right'>
                    <img
                        src={aboutAnime}
                        alt='animation'
                        className='about-anime'
                    />
                </div>
            </div>

            <FooterLink
                phrase='Check out my '
                link='projects!'
                toAdress='/projects'
            />
            {/* Vector Frame! */}
            <div className='vector-frame'>
                <img src={aboutVector} className='about-vector' alt='about' />
            </div>
        </div>
    );
};

export default About;
