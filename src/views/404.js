import '../assets/styles/404.css'
import { useNavigate } from 'react-router';

const NotFoundPage = () => {
    const navigate = useNavigate();
    const handleGoToHomePage = () => {
        navigate('/home');
    }
    return ( 
        <div className="not-found-page">

            <div className="not-found-image"></div>
            <div className="not-found-text">
                <h1>Wow I've never read this page.</h1>
                <button onClick={handleGoToHomePage}>GO TO HOMEPAGE </button>
            </div>
        </div>
     );
}
 
export default NotFoundPage;