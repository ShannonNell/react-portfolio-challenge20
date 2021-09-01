import React from 'react';
// import PhotoList from '../PhotoList';
import photo from "../../assets/projects/0.png";


function Portfolio(props) {
    const currentProject = {
        title: "The title",
        description: "some cool description",
        github: "github link",
        deployed: "deployed link"
    };

    return (
        <section>
            <h1>{currentProject.title}</h1>
            <div>
                <img
                    src={photo}
                    alt="Example image"
                    className="img-thumbnail mx-1"
                />
            </div>
            <p>{currentProject.description}</p>
            <p>{currentProject.github}</p>
            <p>{currentProject.deployed}</p>
        </section>
    );
}
export default Portfolio;