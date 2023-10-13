import '../assets/styles/PostCard.css'
import getCurrentTime from '../utils/getCurrentTime.js'
import getCurrentDate from '../utils/getCurrentDate.js'
import { FaDownLong, FaUpLong } from "react-icons/fa6"
import { useState } from 'react'
import { downvoteReview, upvoteReview } from '../services/ReviewService'
import { toast } from 'sonner'
import useAuth from '../hooks/useAuth'
import arrayContainsInt from '../utils/arrayContainsInt';



const RatingStars = ({ rating }) => {
    if(rating == 1) {
        return (
            <div className="rating-box">
                <div className="stars">
                    <div className="star-filled"></div>
                    <div className="star-empty"></div>
                    <div className="star-empty"></div>
                    <div className="star-empty"></div>
                    <div className="star-empty"></div>
                </div>
                <p>{rating}<span className='max-rating'>/5</span></p>
            </div>
        );
    }
    if(rating == 2) {
        return (
            <div className="rating-box">
                <div className="stars">
                    <div className="star-filled"></div>
                    <div className="star-filled"></div>
                    <div className="star-empty"></div>
                    <div className="star-empty"></div>
                    <div className="star-empty"></div>
                </div>
                <p>{rating}<span className='max-rating'>/5</span></p>
            </div>
        );
    }
    if(rating == 3) {
        return (
            <div className="rating-box">
                <div className="stars">
                    <div className="star-filled"></div>
                    <div className="star-filled"></div>
                    <div className="star-filled"></div>
                    <div className="star-empty"></div>
                    <div className="star-empty"></div>
                </div>
                <p>{rating}<span className='max-rating'>/5</span></p>
            </div>
        );
    }
    if(rating == 4) {
        return (
            <div className="rating-box">
                <div className="stars">
                    <div className="star-filled"></div>
                    <div className="star-filled"></div>
                    <div className="star-filled"></div>
                    <div className="star-filled"></div>
                    <div className="star-empty"></div>
                </div>
                <p>{rating}<span className='max-rating'>/5</span></p>
            </div>
        );
    }
    if(rating == 5) {
        return (
            <div className="rating-box">
                <div className="stars">
                    <div className="star-filled"></div>
                    <div className="star-filled"></div>
                    <div className="star-filled"></div>
                    <div className="star-filled"></div>
                    <div className="star-filled"></div>
                </div>
                <p>{rating}<span className='max-rating'>/5</span></p>
            </div>
        );
    }
}


const PostCard = ({ postId, postTitle, bookTitle, bookAuthor, username, rating, review, date, time, votes }) => {
    const { auth, userId, userUpvotedReviews, userDownvotedReviews, setUserUpvotedReviews, setUserDownvotedReviews } = useAuth();
    const displayPostTitle = postTitle !== '' ? postTitle : 'Post title';
    const displayBookTitle = bookTitle !== '' ? bookTitle : 'Book title';
    const displayBookAuthor= bookAuthor !== '' ? bookAuthor : 'Book author';
    const displayUsername = username !== '' ? username : 'Your username';
    const displayReview = review !== '' ? review : 'Your review.';

    const displayTime = time === undefined ? getCurrentTime() : time;
    const displayDate = date === undefined ? getCurrentDate() : date;

    const [displayedVotes, setDisplayedVotes] = useState(votes);

    const handleUpvote = () => {
        if(!auth?.authenticated) {
            toast.error("Sign in to upvote / downvote reviews.");
        }else {
            // To prevent from being used in the Create Review page
            if ( postId !== undefined ) {
                if (userUpvotedReviews.includes(postId)) {
                    setUserUpvotedReviews(userUpvotedReviews.filter(id => id !== postId));
                    
                    // Make request to endpoint /upvote
                    upvoteReview(postId, userId)
                    .then(() => {
                        toast.success("Review upvote removed!");
                        setDisplayedVotes(displayedVotes-1);
                    })
                    .catch((error) => {
                        toast.error(error.message);
                    });
                } else {
                    // Update upvoted reviews
                    setUserUpvotedReviews([...userUpvotedReviews, postId]);
                    
                    // Update downvoted reviews
                    setUserDownvotedReviews(userDownvotedReviews.filter(id => id !== postId));
                    
                    // Make request to endpoint /upvote
                    upvoteReview(postId, userId)
                    .then(() => {
                        toast.success("Review upvoted!");
                        setDisplayedVotes(displayedVotes+1);
                    })
                    .catch((error) => {
                        toast.error(error.message);
                    });
                }
                
            }
        }
        
    }

    const handleDownvote = () => {
        if(!auth?.authenticated) {
            toast.error("Sign in to upvote / downvote reviews.");
        } else {
            // To prevent from being used in the Create Review page
            if ( postId !== undefined) {
                if (userDownvotedReviews.includes(postId)) {
                    setUserDownvotedReviews(userDownvotedReviews.filter(id => id !== postId));
                    
                    // Make request to endpoint /downvote
                    downvoteReview(postId, userId)
                    .then(() => {
                        toast.success("Review downvote removed.");
                        setDisplayedVotes(displayedVotes+1);
                    })
                    .catch((error) => {
                        toast.error(error.message);
                    });
                } else {
                    // Update downvoted reviews
                    setUserDownvotedReviews([...userDownvotedReviews, postId]);

                    // Update upvoted reviews
                    setUserUpvotedReviews(userUpvotedReviews.filter(id => id !== postId));
                    
                    // Make request to endpoint /downvote
                    downvoteReview(postId, userId)
                    .then(() => {
                        toast.success("Review downvoted.");
                        setDisplayedVotes(displayedVotes-1);
                    })
                    .catch((error) => {
                        toast.error(error.message);
                    });
                }
            }
        }
    }

    
    return ( 
        <div className="card">
            <div className="card-outside">
                <div className="card-inside">
                    <div className="intro">
                        <div className="headlines">
                            <h3>{ displayPostTitle }</h3>
                            <p>{ displayBookTitle} - { displayBookAuthor }</p>
                        </div>
                        <p>{ displayTime }</p>
                    </div>
                    <RatingStars rating={rating}/>
                    <div className="review" >
                        <p>{ displayReview }</p>
                    </div>
                    <div className="bottom">
                        <div className='votes'>
                            <FaUpLong 
                                onClick={handleUpvote}
                                style={{color: arrayContainsInt(userUpvotedReviews, postId) ? '#34A38F' : ''}}
                            />
                            { displayedVotes }
                            <FaDownLong
                                onClick={handleDownvote}
                                style={{color: arrayContainsInt(userDownvotedReviews, postId) ? '#ff4c4c' : ''}}
                            />
                        </div>
                        <div className="post-author">
                            <p>By: { displayUsername } <span>{ displayDate }</span></p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
 
export default PostCard;