import { useNavigate } from "react-router-dom";
import '../assets/styles/Home.css';
import { useAllReviews } from "../hooks/useReview";
import ReviewList from "../components/ReviewList";
import useAuth from "../hooks/useAuth";

const HomePage = ({searchResults}) => {
    const navigate = useNavigate();

    const handleClickNewReview = () => {
        navigate('/create');
    }

    const { reviews, isPending, error } = useAllReviews();
    const { auth } = useAuth();
    return ( 
        <div className="home-page">
            { auth?.authenticated 
                ?
                <div className="new-review-btt" onClick={handleClickNewReview}>
                    <p>New Review</p>
                    <div className="plus-icon"></div>
                </div>
                :
                <div></div>
            }
            
            { searchResults && <ReviewList reviews={searchResults} />}

            { error && <div> Couldn't load reviews </div> }
            { isPending && <div>Loading...</div>}
            { reviews && !searchResults &&<ReviewList reviews={reviews} /> }
            
        </div>
    );
}

export default HomePage;