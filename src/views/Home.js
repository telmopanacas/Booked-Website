import { useNavigate } from "react-router-dom";
import { useState } from "react";
import '../assets/styles/Home.css';
import PostCard from '../components/PostCard';
import { useAllReviews } from "../hooks/useReview";
import { fetchAllReviews } from "../services/ReviewService";
import ReviewList from "../components/ReviewList";

const HomePage = () => {
    const navigate = useNavigate();

    const handleClickNewReview = () => {
        navigate('/create');
    }

    const { reviews, isPending, error } = useAllReviews();

    return ( 
        <div className="home-page">
            <div className="new-review-btt" onClick={handleClickNewReview}>
                <p>New Review</p>
                <div className="plus-icon"></div>
            </div>
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div>}
            { reviews && <ReviewList reviews={reviews} /> }
            
        </div>
    );
}

export default HomePage;