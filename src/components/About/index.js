import React from 'react';
import coverImage from "../../assets/aboutme_cover.jpg"

function About() {
    return (
        <section className="my-5 about-sec">
            <h2 id="about">about</h2>
            <div className="content">
                <img src={coverImage} className="my-2 about-img" alt="cover" />
                <div className="my-2 about-txt">
                    <p>Hello, and welcome. My name is Shannon Nell and I am an upcoming full stack web developer currently enrolled in the University of Toronto's Coding Bootcamp. </p>
                    <br />
                    <p>I have a degree in Media, Theory, Production from Western University and a diploma in Television Broadcasting as well as 3D Animation and Character Design both from Fanshawe College. I also have a diploma in Professional Photography with the Photography Institute.</p>
                </div>
            </div>
        </section>
    );
};

export default About