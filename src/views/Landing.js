import '../assets/styles/Landing.css'
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home');
    }

    return ( 
        <div className="home">
            <div className="top">
                <h1>Booked</h1>
            </div>
            <div className="rest">
                <h1>Welcome to <span className="colored-text">Booked</span></h1>
                <h3>A place where you can voice your opinions on books.</h3>
                <button onClick = {handleClick} className="enter-website">
                    Enter Website
                </button>
            </div>
        </div>
    );
}
 
export default LandingPage;