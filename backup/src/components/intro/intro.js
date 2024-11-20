import React from 'react';
import './intro.css';
import bg from '../../assets/doom.png';

const Intro = () => {
    return (
        <section id = "intro">
            <div className = "introContent">
                <span className = "hello"> Hello. </span>
                <span className="introName">I'm Dr Doom</span>
                <span className = "job" > Professional Engineer</span>
                <span className= "intropara"> Years of dictatorship and engineering experience. <br /> <br /> I am proficient in Linux System management <br /> Server Management and DevOps</span>
            </div>
            <img src={bg} alt="photo" className="bg"/>
        </section> 
    )
}

export default Intro;