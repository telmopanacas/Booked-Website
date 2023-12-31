import '../assets/styles/Contact.css'
import FormInput from '../components/FormInput.js'
import FormTextArea from '../components/FormTextArea';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

const ContactPage = () => {
    const form = useRef();
    const [ isPending, setIsPending ] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsPending(true);

        toast.promise(emailjs.sendForm(
            `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`, 
            `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`, 
            form.current, 
            `${process.env.REACT_APP_EMAILJS_PUBLIC_KEY}`, 
        ), {
            loading: () => {
                return "Sending email...";
            },
            success: (result) => {
                setIsPending(false);
                return "The email was sent successfully!";
            },
            error: (error) => {
                return "Error sending email.";
            },
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
                            label="Name" 
                            placeholder="Please enter your name"
                            setInput={() => {}}
                        />
                        <FormInput 
                            name="user_email"
                            type="email"
                            label="Email"
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