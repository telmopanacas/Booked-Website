import { Form } from 'react-router-dom';
import '../assets/styles/Signin.css';
import FormInput from '../components/FormInput.js'
import { useState } from 'react';
import FormPasswordInput from '../components/FormPasswordInput';

const SignInForm = ({ setIsAMember }) => {
    const [signInEmail, setSignInEmail] = useState("");
    const [signInPassword, setSignInPassword] = useState("");

    const handleCreateAccountClick = () => {
        setIsAMember(false);
    }


    return (
        <div className="signin-form-box">
            <div className="signin-form-div">
                <form className='signin-form'>
                    <h1>Sign In</h1>
                    <FormInput 
                        label="Email"
                        placeholder="Enter your email"
                        setInput={setSignInEmail}
                    />
                    <FormPasswordInput 
                        label="Password"
                        placeholder="Enter your password"
                        setInput={setSignInPassword}
                    />
                    <div className="forgot-password">
                        <p>forgot password?</p>
                    </div>
                    <button>
                        Sign In
                    </button>
                </form>
                <div className="divider"></div>
                <p className='not-member'>Not a member? <span className='create-account' onClick={handleCreateAccountClick}>Create your account.</span></p>
            </div>
        </div>
    );
}

const RegisterForm = ({ setIsAMember }) => {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
    
    return (
        <div className="signin-form-box">
            <div className="signin-form-div">
                <form className='signin-form'>
                    <h1>Create account</h1>
                    <FormInput 
                        label="Username"
                        placeholder="Enter your username"
                        setInput={setRegisterUsername}
                    />
                    <FormInput 
                        label="Email"
                        placeholder="Enter your email"
                        setInput={setRegisterEmail}
                    />
                    <FormPasswordInput 
                        label="Password"
                        placeholder="Enter your password"
                        setInput={setRegisterPassword}
                    />
                    <FormPasswordInput 
                        label="Confirm password"
                        placeholder="Enter your password again"
                        setInput={setRegisterPassword}
                    />
                    
                    <button>
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}


const SignInPage = () => {
    const [isAMember, setIsAMember] = useState(true);
    return ( 
        <div className="signin-page">
            <div className="signin-image"></div>
            { isAMember && <SignInForm setIsAMember={setIsAMember}/>}
            { !isAMember && <RegisterForm />}
        </div>
    );
}
 
export default SignInPage;