import React from 'react';
import coverImage from "../../assets/aboutme_cover.jpg"

function About() {
    return (
        <section className="my-5">
            <h1 id ="about">About me</h1>
            <img src={coverImage} className="my-2" style ={{ width: "100%" }} alt="cover" />
            <div className="my-2">
                <p>
                    Hello, and welcome. My name is Shannon Nell and I am an upcoming full stack web developer currently enrolled in the University of Toronto's Coding Bootcamp. I have a degree in Media, Theory, Production from Western University and a diploma in Television Broadcasting as well as 3D Animation and Character Design both from Fanshawe College. I also have a diploma in Professional Photography with the Photography Institute.
                </p>
            </div>
        </section>
    );
};

export default About