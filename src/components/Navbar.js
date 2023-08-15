import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Navbar.css'

const Navbar = () => {
    const navigate = useNavigate();
    const handleLogoClink = () => {
        navigate('/home');
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
                <Link to='/signin'>Sign In</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;