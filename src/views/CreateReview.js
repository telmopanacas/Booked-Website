import '../assets/styles/CreateReview.css'
import FormInput from '../components/FormInput.js'
import { useState } from 'react';
import FormTextArea from '../components/FormTextArea';
import FormUsernameAndRating from '../components/FormUsernameAndRating';
import PostCard from '../components/PostCard';
import { useNavigate } from 'react-router-dom';
import { createReview } from '../services/ReviewService';


const CreateReviewPage = () => {
    const navigate = useNavigate();
    const [postTitle, setPostTitle] = useState('');
    const [bookTitle, setBookTitle] = useState('');
    const [bookAuthor, setBookAuthor] = useState('');
    const [username, setUsername] = useState('');
    const [rating, setRating] = useState('1');
    const [review, setReview] = useState('');

    const handlePostClick = (e) => {
        e.preventDefault();
        createReview(bookTitle, bookAuthor, postTitle, username, review, rating, navigate);
    }

    return ( 
        <div className="create-page">
            <div className="left-side">
                <PostCard  
                    postTitle={postTitle}
                    bookTitle={bookTitle}
                    bookAuthor={bookAuthor}
                    username={username}
                    rating={rating}
                    review={review}
                />
                
                
            </div>
            <div className="right-side">
                <div className="form-div">
                    <form onSubmit={handlePostClick}>
                        <FormInput label="Title" placeholder="Post title" setInput={setPostTitle}/>
                        <FormInput label="Book title" placeholder="Book Title" setInput={setBookTitle}/>
                        <FormInput label="Book author" placeholder="Book Author" setInput={setBookAuthor}/>
                        <FormUsernameAndRating setUsername={setUsername} setRating={setRating}/>
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


