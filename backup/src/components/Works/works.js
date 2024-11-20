import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/bashfc.png';
import Portfolio2 from '../../assets/osfc.png';
import Portfolio3 from '../../assets/spotfc.png';

const Works = () => {
    return (
        <section id = 'works'>
            <h2 className = "worksTitle"> My Portfolio</h2>
            <span className = "worksDesc"> Following is a collection of all my Projects i have built over the years , they are minimal software that follow the POSIX guidelines and UNIX philosophy</span>
            <div className = "worksimgs">
                <div className = "workitem">
                    <img src ={Portfolio1} alt = "p" className= "worksimg" />
                     <a href ="https://www.github.com" target="_blank" rel="noopener noreferrer">
                        <button className ="p1">Github Link</button>
                     </a>
                </div>
                <div className = "workitem">
                    <img src ={Portfolio2} alt = "p" className= "worksimg" />
                    <a href ="https://www.github.com" target="_blank" rel="noopener noreferrer">
                        <button className ="p2">Github Link</button>
                     </a>
                </div>
                <div className="workitem">
                    <img src ={Portfolio3} alt = "p" className= "worksimg" />
                    <a href ="https://www.github.com" target="_blank" rel="noopener noreferrer">
                        <button className ="p2">Github Link</button>
                    </a>
                </div>
            </div>

        </section>
    );
}

export default Works;
