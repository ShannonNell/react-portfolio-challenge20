import React, { useState } from 'react';
// import Modal from '../Modal';

const PhotoList = ({ category }) => {
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const [currentPhoto, setCurrentPhoto] = useState();

    const [photos] = useState([
        {
            name: 'Beats and Bops',
            description: 'A cool music visualizer that runs while a user plays their music of choice.',
            github: 'https://github.com/uotgroup3/beats-and-bops',
            deployedApp: 'https://uotgroup3.github.io/beats-and-bops/',
            skills: 'HTML, CSS, JavaScript, APIs'
        },
        {
            name: 'Survey Donkey',
            description: 'A survey application where users are able to make their own surveys and share with others.',
            github: 'https://github.com/uotgroup1/project2-group1',
            deployedApp: 'https://obscure-river-98687.herokuapp.com/',
            skills: 'HTML, CSS, JavaScript, Node.js, Express.js'
        },
        {
            name: 'Budget Tracker',
            description: 'This app is a budget tracker that allows for offline access and functionality.',
            github: 'https://github.com/ShannonNell/budget-tracker-challenge19',
            deployedApp: 'https://tranquil-sea-72490.herokuapp.com/',
            skills: 'HTML, CSS, JavaScript, IndexDB, Service Workers, Web Manifest'
        },
        {
            name: 'Work Day Scheduler',
            description: 'Calendar app that allows user to save events for each hour of the day.',
            github: 'https://github.com/ShannonNell/UoT-coding-challenge-5',
            deployedApp: 'https://shannonnell.github.io/UoT-coding-challenge-5/',
            skills: 'HTML, CSS, JavaScript, jQuery, API, DOM'
        },
        {
            name: 'Note Taker',
            description: 'An application that can be sued to write, save, and delete notes.',
            github: 'https://github.com/ShannonNell/UoT-coding-challenge-11',
            deployedApp: 'https://mysterious-wave-31250.herokuapp.com/',
            skills: 'JavaScript, Node.js, jQuery, Express.js'
        },
        {
            name: 'Tech Blog',
            description: `A CMS-style blog site where developers can publish blog posts and comment on other developer's posts.`,
            github: 'https://github.com/ShannonNell/tech-blog-challenge14',
            deployedApp: 'https://secret-inlet-01236.herokuapp.com/',
            skills: 'Handlebars, Sequelize, Express.js, MVC, ORM, API'
        },
    ]);

    // const currentPhotos = photos.filter(photo => photo.category === category);

    // const toggleModal = (image, i) => {
    //     setCurrentPhoto({ ...image, index: i });
    //     setIsModalOpen(!isModalOpen);
    // };

    return (
        <div>
            {/* {isModalOpen && (
                <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
            )} */}
            <div className="flex-row">
                {currentPhotos.map((image, i) => (
                    <img
                        src={require(`../../assets/projects/${i}.jpg`).default}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        // onClick={() => toggleModal(image, i)}
                        key={image.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default PhotoList;