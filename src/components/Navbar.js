import { useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../assets/styles/Navbar.css'
import useAuth from '../hooks/useAuth';
import { signout } from '../services/AuthenticationService';
import { toast } from 'sonner';
import { searchReview } from '../services/ReviewService';
import { resetUserIdUpvotedDownvotedReviews } from '../services/UserService';


const Navbar = ({setSearchResults}) => {
    const { auth , setAuth, setUserId, setUserDownvotedReviews, setUserUpvotedReviews} = useAuth();
    const navigate = useNavigate();
    const inputRef = useRef(null);

    const handleLogoClink = () => {
        navigate('/home');
    }

    const handleSignOutClick = () => {
        toast.promise(signout(), {
            loading: "Signing out...",
            success: () => {
                setAuth({authenticated: false});
                resetUserIdUpvotedDownvotedReviews(setUserId, setUserDownvotedReviews, setUserUpvotedReviews);
                navigate("/signin");
                return "Signed out successfully!"
            },
            error: "Error signing out.",
        });
    }

    const handleSearch = () => {
        const searchInput = inputRef.current.value;
        toast.promise(searchReview(searchInput), {
            loading: () => {
                return "Searching...";
            },
            success: (data) => {
                setSearchResults(data);
                navigate("/home");
                return "Search successfully";
            },
            error: (error) => {
                return `${error.message}`;
            },
        });
    }
    
    return ( 
        <nav className="navbar">
            <h1 onClick={ handleLogoClink }>Booked</h1>
            <div className="search">
                <div className="search-content">
                    <div className="search-icon" onClick={handleSearch}></div>
                    <input 
                        ref={inputRef}
                        type="text" 
                        className="search-input"
                        placeholder='Search a book, author or user'
                        onKeyDown={(e) => {
                            if(e.key === 'Enter') {
                                handleSearch();
                            }
                        }}
                    />
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