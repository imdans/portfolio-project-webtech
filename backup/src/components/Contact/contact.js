import React , {useRef} from "react";
import './contact.css';
import walmart from '../../assets/marvel.png';
import mc from '../../assets/google.png';
import fci from '../../assets/facebook-icon.png';
import ici from '../../assets/instagram.png';
import yci from '../../assets/youtube.png';
import tci from '../../assets/twitter.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            },
            (error) => {
             console.log('FAILED...', error.text);
         },
        );
    };
    return (
        <section id ="contactPage">
            <div id="clients">
                <h1 className = "contactpagetitle">My Clients</h1>
                <p className = "clientdesc">
                    I have had the oppurtunity to work and share my evil plans with the 
                    following companies. they have been really helpful in my skill development.
                </p>
                <div className="clientimgs">
                <a href ="https://www.marvel.com/" target="_blank" rel="noopener noreferrer">
                    <img src ={walmart} className="clientimg" />
                </a>
                <a href ="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                    <img src ={mc} className="clientimg" />
                </a>
                
                </div>
            </div>
            <div id="contact">
                <h1 className="contactpagetitle">Contact Me.</h1>
                <span className = "contactDesc">Fill out the form below to send me your details.</span>
                <form className = 'contactform' ref={form} onSubmit={sendEmail}>
                    <input type = "text" className="name" placeholder="Your Name" />
                    <input type = "email" className = "email" placeholder="Your Email" />
                    <textarea className = 'msg' name="message" rows="5" placeholder = 'your message'></textarea>
                    <button type='submit' value='Send' className = 'submitbtn'> Submit </button>
                    <div className = "links">
                        <a href = "https://www.facebook.com">
                            <img src = {fci} className = 'link' />
                            <img src = {tci} className = 'link' />
                            <img src = {yci} className = 'link' />
                            <img src = {ici} className = 'link' />
                        </a>

                    </div>
                </form>
                
            </div>
        </section>
    )
}

export default Contact;