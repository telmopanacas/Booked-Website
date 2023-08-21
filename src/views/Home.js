import { useNavigate } from "react-router-dom";
import { useState } from "react";
import '../assets/styles/Home.css';
import PostCard from '../components/PostCard';

const HomePage = () => {
    const navigate = useNavigate();

    const handleClickNewReview = () => {
        navigate('/create');
    }

    const [posts, setBlogs] = useState([
        {postTitle: 'My Picture of Dorian Gray', bookTitle: 'The Picture of Dorian Gray', bookAuthor: 'Oscar Wilde', username: 'not oscar wilde', rating: 5, review: 'This is a review of the book The Picture of Dorian Gray.', date: '2021-10-10', time: '10:00 AM'},
        {postTitle: 'My Picture of Dorian Gray', bookTitle: 'The Picture of Dorian Gray', bookAuthor: 'Oscar Wilde', username: 'not oscar wilde', rating: 5, review: 'This is a review of the book The Picture of Dorian Gray.', date: '2021-10-10', time: '10:00 AM'},
        {postTitle: 'My Picture of Dorian Gray', bookTitle: 'The Picture of Dorian Gray', bookAuthor: 'Oscar Wilde', username: 'not oscar wilde', rating: 5, review: 'This is a review of the book The Picture of Dorian Gray.', date: '2021-10-10', time: '10:00 AM'},
        {postTitle: 'My Picture of Dorian Gray', bookTitle: 'The Picture of Dorian Gray', bookAuthor: 'Oscar Wilde', username: 'not oscar wilde', rating: 5, review: 'This is a review of the book The Picture of Dorian Gray.', date: '2021-10-10', time: '10:00 AM'},
    ]);
    
    return ( 
        <div className="home-page">
            <div className="new-review-btt" onClick={handleClickNewReview}>
                <p>New Review</p>
                <div className="plus-icon"></div>
            </div>

            <div className="reviews">
                {posts.map((post) => (
                    <PostCard 
                        postTitle={post.postTitle}
                        bookTitle={post.bookTitle}
                        bookAuthor={post.bookAuthor}
                        username={post.username}
                        rating={post.rating}
                        review={post.review}
                        date={post.date}
                        time={post.time}
                    />
                ))}
            </div>
        </div>
    );
}

export default HomePage;