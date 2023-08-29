import '../assets/styles/PostCard.css'
import getCurrentTime from '../utils/getCurrentTime.js'
import getCurrentDate from '../utils/getCurrentDate.js'



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


const PostCard = ({ postTitle, bookTitle, bookAuthor, username, rating, review, date, time }) => {
    
    const displayPostTitle = postTitle !== '' ? postTitle : 'Post title';
    const displayBookTitle = bookTitle !== '' ? bookTitle : 'Book title';
    const displayBookAuthor= bookAuthor !== '' ? bookAuthor : 'Book author';
    const displayUsername = username !== '' ? username : 'Your username';
    const displayReview = review !== '' ? review : 'Your review.';

    const displayTime = time === undefined ? getCurrentTime() : time;
    const displayDate = date === undefined ? getCurrentDate() : date;

    
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
                    <div className="post-author">
                        <p>By: { displayUsername } <span>{ displayDate }</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default PostCard;