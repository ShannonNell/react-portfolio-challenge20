import React from 'react';
import GitHubIconPink from '../../assets/icon_gitHub_pink.png';
import linkIconPink from '../../assets/icon_link_pink.png'
import img0 from '../../assets/projects/0.png'
import img1 from '../../assets/projects/1.png'
import img2 from '../../assets/projects/2.png'
import img3 from '../../assets/projects/3.png'
import img4 from '../../assets/projects/4.png'
import img5 from '../../assets/projects/5.png'

function Projects() {
    const projectsArr = [
        {
            name: 'Beats and Bops',
            description: 'A cool music visualizer that runs while a user plays their music of choice.',
            github: 'https://github.com/uotgroup3/beats-and-bops',
            deployedApp: 'https://uotgroup3.github.io/beats-and-bops/',
            skills: 'HTML, CSS, JavaScript, APIs',
            img: `${img0}`
        },
        {
            name: 'Survey Donkey',
            description: 'A survey application where users are able to make their own surveys and share with others.',
            github: 'https://github.com/uotgroup1/project2-group1',
            deployedApp: 'https://obscure-river-98687.herokuapp.com/',
            skills: 'HTML, CSS, JavaScript, Node.js, Express.js',
            img: `${img1}`
        },
        {
            name: 'Budget Tracker',
            description: 'This app is a budget tracker that allows for offline access and functionality.',
            github: 'https://github.com/ShannonNell/budget-tracker-challenge19',
            deployedApp: 'https://tranquil-sea-72490.herokuapp.com/',
            skills: 'HTML, CSS, JavaScript, IndexDB, Service Workers, Web Manifest',
            img: `${img2}`
        },
        {
            name: 'Work Day Scheduler',
            description: 'Calendar app that allows user to save events for each hour of the day.',
            github: 'https://github.com/ShannonNell/UoT-coding-challenge-5',
            deployedApp: 'https://shannonnell.github.io/UoT-coding-challenge-5/',
            skills: 'HTML, CSS, JavaScript, jQuery, API, DOM',
            img: `${img3}`
        },
        {
            name: 'Note Taker',
            description: 'An application that can be sued to write, save, and delete notes.',
            github: 'https://github.com/ShannonNell/UoT-coding-challenge-11',
            deployedApp: 'https://mysterious-wave-31250.herokuapp.com/',
            skills: 'JavaScript, Node.js, jQuery, Express.js',
            img: `${img4}`
        },
        {
            name: 'Tech Blog',
            description: `A CMS-style blog site where developers can publish blog posts and comment on other developer's posts.`,
            github: 'https://github.com/ShannonNell/tech-blog-challenge14',
            deployedApp: 'https://secret-inlet-01236.herokuapp.com/',
            skills: 'Handlebars, Sequelize, Express.js, MVC, ORM, API',
            img: `${img5}`
        },
    ];

    return (
        <section className="my-5 portfolio">
            <h1 className="project-title">my projects</h1>
            {projectsArr.map((project, idx) => {
                return (
                    <div key={idx} className="card">
                        {/* Project image */}
                        <div className="card-img-top">
                            <img
                                src={project.img}
                                className="projectImgs img-thumbnail mx-1"
                                alt={project.name}
                                key={project.name}
                            >
                            </img>
                        </div>
                        <div className="card-body">
                            <h2 className="projectName card-title">
                                {/* Project title and deployed link */}
                                <a href={project.deployedApp} className="projectTitle" target="_blank">
                                    {project.name}
                                </a>
                            </h2>

                            {/* Project Description */}
                            <p className="card-text">{project.description}</p>

                            {/* GitHub link */}
                            <a href={project.github} className="gitHubIcon card-link" target="_blank">
                                <img alt="GitHub icon" src={GitHubIconPink} width="50px"></img>
                            </a>

                            {/* Deployed link */}
                            <a href={project.deployedApp} className="linkIcon card-link" target="_blank">
                                <img alt={project.name} src={linkIconPink} width="50px"></img>
                            </a>

                            {/* Project Skills */}
                            <p className="card-text">Skills: {project.skills}</p>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default Projects;