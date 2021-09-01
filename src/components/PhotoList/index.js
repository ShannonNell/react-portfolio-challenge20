import React, { useState } from 'react';
// import Modal from '../Modal';

const PhotoList = ({ category }) => {
    // const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState();

    const [photos] = useState([
        {
            name: 'Beats and Bops',
            description: 'A cool music visualizer that runs while a user plays their music of choice.',
            github: 'https://github.com/uotgroup3/beats-and-bops',
            deployedApp: 'https://uotgroup3.github.io/beats-and-bops/',
            skills: 'HTML, CSS, JavaScript, APIs'
        },
    ]);

    const currentPhotos = photos.filter(photo => photo.category === category);

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