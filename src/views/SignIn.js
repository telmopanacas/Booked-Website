import '../assets/styles/Signin.css';
import FormInput from '../components/FormInput.js'
import { useState } from 'react';
import FormPasswordInput from '../components/FormPasswordInput';
import { authenticate, register } from '../services/AuthenticationService';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { toast } from 'sonner'

const SignInForm = ({ setIsAMember }) => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/home";

    const [signInEmail, setSignInEmail] = useState("");
    const [signInPassword, setSignInPassword] = useState("");

    const [isPending, setIsPending] = useState(false);

    const handleCreateAccountClick = () => {
        setIsAMember(false);
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        setIsPending(true);
        toast.promise(authenticate(signInEmail, signInPassword), {
            loading: () => {
                return "Singin In...";
            },
            success: () => {
                setIsPending(false);
                setAuth({authenticated: true})
                navigate(from , { replace: true });
                return "Signed in successfully!";
            },
            error: (error) => {
                setIsPending(false);
                return "Credentials invalid please verify them.";
            },
        });
    }

    return (
        <div className="signin-form-box">
            <div className="signin-form-div">
                <form className='signin-form' onSubmit={handleSignIn}>
                    <h1>Sign In</h1>
                    <FormInput 
                        label="Email"
                        type="email"
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
                    { 
                        isPending &&
                        <button>
                            Signing In...
                        </button>
                    }
                    { 
                        !isPending &&
                        <button>
                            Sign In
                        </button>
                    }
                    
                </form>
                <div className="divider"></div>
                <p className='not-member'>Not a member? <span className='create-account' onClick={handleCreateAccountClick}>Create your account.</span></p>
            </div>
        </div>
    );
}

const RegisterForm = ({ setIsAMember }) => {
    const { setAuth } = useAuth();
    const navigate = new useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/home";
    const [isPending, setIsPending] = useState(false);

    const [registerUsername, setRegisterUsername] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
    
    const handleSignInClick = () => {
        setIsAMember(true);
    }

    const handleRegister = (e) => {

        e.preventDefault();
        setIsPending(true);
        toast.promise(register(registerUsername, registerEmail, registerPassword, registerConfirmPassword), {
            loading: () => {
                return "Signing Up...";
            },
            success: () => {
                setIsPending(false);
                setAuth({authenticated: true})
                navigate(from , { replace: true });
                return "Signed up successfully!"
            },
            error: (error) => {
                setIsPending(false);
                
                return `${error.message}`;
            },
        });
    }

    return (
        <div className="signin-form-box">
            <div className="signin-form-div">
                <form className='signin-form' onSubmit={handleRegister}>
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
                        setInput={setRegisterConfirmPassword}
                    />
                    {
                        isPending &&
                        <button>
                            Signing Up...
                        </button>
                    }
                    {
                        !isPending &&
                        <button>
                            Sign Up
                        </button>
                    }
                    
                </form>
                <div className="divider"></div>
                <p className='not-member'>Already a member? <span className='create-account' onClick={handleSignInClick}>Sign in to your account.</span></p>
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
            { !isAMember && <RegisterForm  setIsAMember={setIsAMember}/>}
        </div>
    );
}
 
export default SignInPage;