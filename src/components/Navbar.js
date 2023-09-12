import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Navbar.css'
import useAuth from '../hooks/useAuth';
import { signout } from '../services/AuthenticationService';

const Navbar = () => {
    const { auth , setAuth} = useAuth();
    const navigate = useNavigate();
    const handleLogoClink = () => {
        navigate('/home');
    }

    const handleSignOutClick = () => {
        setAuth({authenticated: false});
        signout()
        .then(() => {
            alert("User Signed Out");
            navigate("/home");
        });
    }
    
    return ( 
        <nav className="navbar">
            <h1 onClick={ handleLogoClink }>Booked</h1>
            <div className="search">
                <div className="search-content">
                    <div className="search-icon"></div>
                    <input type="text" className="search-input" placeholder='Search for a book'/>
                </div>
            </div>
            <div className="links">
                <Link to='/home'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                { auth?.authenticated ?
                    <Link onClick={handleSignOutClick}>Sign Out</Link>
                    :
                    <Link to='/signin'>Sign In</Link>
                }
            </div>
        </nav>
    );
}
 
export default Navbar;