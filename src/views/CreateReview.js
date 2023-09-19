import '../assets/styles/CreateReview.css'
import FormInput from '../components/FormInput.js'
import { useEffect, useState } from 'react';
import FormTextArea from '../components/FormTextArea';
import FormUsernameAndRating from '../components/FormUsernameAndRating';
import PostCard from '../components/PostCard';
import { useNavigate } from 'react-router-dom';
import { createReview } from '../services/ReviewService';
import getCurrentUserEmail from '../utils/getCurrentUserEmail';
import { useUserDetails } from "../hooks/useUserDetails"


const CreateReviewPage = () => {
    const navigate = useNavigate();
    const [postTitle, setPostTitle] = useState('');
    const [bookTitle, setBookTitle] = useState('');
    const [bookAuthor, setBookAuthor] = useState('');
    const [userId, setUserId] = useState('');
    const [rating, setRating] = useState(1);
    const [review, setReview] = useState('');

    const handlePostClick = (e) => {
        e.preventDefault();
        createReview(bookTitle, bookAuthor, postTitle, userId, review, rating, navigate);
    }

    const { userDetails, isPending, error } = useUserDetails(getCurrentUserEmail());
    
    useEffect(() => {
        if (!isPending) {
            setUserId(userDetails["id"]);
        }
    }, [isPending, userDetails, setUserId]);

    return (
        <div className="create-page">
            <div className="left-side">
            {
                    error &&
                    <PostCard  
                        postTitle={postTitle}
                        bookTitle={bookTitle}
                        bookAuthor={bookAuthor}
                        username={"Error getting username"}
                        rating={rating}
                        review={review}
                    />
                }
                {
                    isPending &&
                    <PostCard  
                        postTitle={postTitle}
                        bookTitle={bookTitle}
                        bookAuthor={bookAuthor}
                        username={"Your username"}
                        rating={rating}
                        review={review}
                    />
                }
                {
                    userDetails &&
                    <PostCard  
                        postTitle={postTitle}
                        bookTitle={bookTitle}
                        bookAuthor={bookAuthor}
                        username={userDetails["displayName"]}
                        rating={rating}
                        review={review}
                    />
                }
                
                
            </div>
            <div className="right-side">
                <div className="form-div">
                    <form onSubmit={handlePostClick}>
                        <FormInput label="Title" placeholder="Post title" setInput={setPostTitle}/>
                        <FormInput label="Book title" placeholder="Book Title" setInput={setBookTitle}/>
                        <FormInput label="Book author" placeholder="Book Author" setInput={setBookAuthor}/>
                        { 
                            //There was an error getting the userDetails
                            error && 
                            <FormUsernameAndRating username={"Error getting the username"} rating={rating} setRating={setRating}/>
                        }
                        { 
                            //The userDetails are still being fetched
                            isPending && 
                            <FormUsernameAndRating username={"Your username"} rating={rating} setRating={setRating}/>
                        }
                        {
                            userDetails &&
                            <FormUsernameAndRating username={userDetails["displayName"]} rating={rating} setRating={setRating}/>
                        }
                        <FormTextArea label="Review" placeholder="Write your review." setInput={setReview} isRequired={false}/>
                        <button className="createReview-btn">
                            Post
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default CreateReviewPage;


