import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import { OpenData } from '../../assets/OpenData';
import ProjectCard from './ProjectCard';
import './openProjects.css';

const OpenSource = () => {
    return (
        <div className='section-container'>
            <Header
                heading='Contributions'
                details="Here are a few cool Things!"
            />
            <div className='project-cards-container'>
                {OpenData.map(
                    ({
                        projectName,
                        projectDescription,
                        imageUrl,
                        videoUrl,
                        projectUrl,
                    }) => {
                        return (
                            <ProjectCard
                                projectName={projectName}
                                projectDescription={projectDescription}
                                projectUrl={projectUrl}
                                imageUrl={imageUrl}
                                videoUrl={videoUrl}
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
    );
};

export default OpenSource;
