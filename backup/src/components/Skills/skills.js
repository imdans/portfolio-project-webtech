import React, { useState } from 'react';
import './skills.css';
import UIDesign from '../../assets/bash.png';
import WebDesign from '../../assets/math.png';
import AppDesign from '../../assets/devops.png';

function Skills() {
    // State to track which skill bar is clicked
    const [activeSkill, setActiveSkill] = useState(null);

    // Function to handle skill click
    const handleSkillClick = (skill) => {
        setActiveSkill(skill);
    };

    return (
        <section id="skills">
            <span className="skillTitle">Skills.</span>
            <span className="skillDesc">
                I am a very passionate Engineer with good experience. Of course, I am very technology proficient and skilled.
            </span>
            <div className="skillBars">
                <div 
                    className={`skillBar ${activeSkill === 'Bash' ? 'active' : ''}`}
                    onClick={() => handleSkillClick('Bash')}
                >
                    <img src={UIDesign} alt="Bash" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Bash Scripting</h2>
                        <p>Years of writing Bash Scripts. Of course, to keep track of my evil plans.</p>
                    </div>
                </div>
                <div 
                    className={`skillBar ${activeSkill === 'Cryptography' ? 'active' : ''}`}
                    onClick={() => handleSkillClick('Cryptography')}
                >
                    <img src={WebDesign} alt="Web" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Cryptography</h2>
                        <p>I have a PhD in cryptography and mathematics. Years of research in data analysis and crypto analysis.</p>
                    </div>
                </div>
                <div 
                    className={`skillBar ${activeSkill === 'DevOps' ? 'active' : ''}`}
                    onClick={() => handleSkillClick('DevOps')}
                >
                    <img src={AppDesign} alt="App" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>DevOps</h2>
                        <p>I am proficient at server maintenance and server management, a decade of DevOps experience.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
