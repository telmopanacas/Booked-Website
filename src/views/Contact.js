import '../assets/styles/Contact.css'
import FormInput from '../components/FormInput.js'
import FormTextArea from '../components/FormTextArea';
import { useState } from 'react';

const ContactPage = () => {
    const [contacterName, setContacterName] = useState("");
    const [contacterEmail, setContacterEmail] = useState("");
    const [contacterMessageSubject, setContacterMessageSubject] = useState("");
    const [contacterMessage, setContacterMessage] = useState("");

    const handleSubmit = (e) => {
        //e.preventDefault(); Doesn't reload the page.
    }

    return ( 
        <div className="contact-page">
            <div className="contact-image"></div>
            <div className="contact-form-box">
                <h1>Need to contact us?</h1>
                <h3>Please fill out this form</h3>
                <div className="form-div">
                    <form onSubmit={handleSubmit}> 
                        <FormInput 
                            label="Your name" 
                            placeholder="Please enter your name"
                            setInput={setContacterName}
                        />
                        <FormInput 
                            label="Your email"
                            placeholder="Please enter your email"
                            setInput={setContacterEmail}
                        />
                        <FormInput 
                            label="Subject"
                            placeholder="Pleace enter the subject of the matter"
                            setInput={setContacterMessageSubject}
                        />
                        <FormTextArea 
                            label="Message"
                            placeholder="Please write your message"
                            setInput={setContacterMessage}
                        />
                        <button className="submit-button">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default ContactPage;