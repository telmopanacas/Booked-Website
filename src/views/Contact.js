import '../assets/styles/Contact.css'
import FormInput from '../components/FormInput.js'
import FormTextArea from '../components/FormTextArea';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
    const form = useRef();
    const [ isPending, setIsPending ] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsPending(true);

        emailjs.sendForm(
            `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`, 
            `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`, 
            form.current, 
            `${process.env.REACT_APP_EMAILJS_PUBLIC_KEY}`, 
        )
        .then((result) => {
            setIsPending(false);
            alert("The email was sent successfully!");
        }, (error) => {
            console.log(error.text);
        });
    };

    return ( 
        <div className="contact-page">
            <div className="contact-image"></div>
            <div className="contact-form-box">
                <h1>Need to contact us?</h1>
                <h3>Please fill out this form</h3>
                <div className="form-div">
                    <form ref={form} onSubmit={sendEmail}> 
                        <FormInput 
                            name="user_name"
                            label="Your name" 
                            placeholder="Please enter your name"
                            setInput={() => {}}
                        />
                        <FormInput 
                            name="user_email"
                            type="email"
                            label="Your email"
                            placeholder="Please enter your email"
                            setInput={() => {}}
                        />
                        <FormInput 
                            name="subject"
                            label="Subject"
                            placeholder="Pleace enter the subject of the matter"
                            setInput={() => {}}
                        />
                        <FormTextArea 
                            name="message"
                            isRequired={true}
                            label="Message"
                            placeholder="Please write your message"
                            setInput={() => {}}
                        />
                        { !isPending &&
                            <button className="submit-button">
                                Send
                            </button>
                        }
                        { isPending &&
                            <button className="submit-button" disabled>
                                Sending...
                            </button>
                        }

                        
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default ContactPage;