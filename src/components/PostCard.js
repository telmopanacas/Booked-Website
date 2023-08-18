import '../assets/styles/PostCard.css'

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


const PostCard = ({ postTitle, bookTitle, bookAuthor, username, rating, review }) => {
    const displayPostTitle = postTitle.trim() !== '' ? postTitle : 'Post title';
    const displayBookTitle = bookTitle.trim() !== '' ? bookTitle : 'Book title';
    const displayBookAuthor= bookAuthor.trim() !== '' ? bookAuthor : 'Book author';
    const displayUsername = username.trim() !== '' ? username : 'Your username';
    const displayReview = review.trim() !== '' ? review : 'Your review.';

    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    const day = String(currentTime.getDate()).padStart(2, '0');
    const month = String(currentTime.getMonth() + 1).padStart(2, '0');
    const year = currentTime.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    return ( 
        <div className="card">
            <div className="card-outside">
                <div className="card-inside">
                    <div className="intro">
                        <div className="headlines">
                            <h3>{ displayPostTitle }</h3>
                            <p>{ displayBookTitle} - { displayBookAuthor }</p>
                        </div>
                        <p>{ formattedTime } { hours >= 12 ? 'PM' : 'AM' }</p>
                    </div>
                    <RatingStars rating={rating}/>
                    <div className="review" >
                        <p>{ displayReview }</p>
                    </div>
                    <div className="post-author">
                        <p>By: { displayUsername } <span>{ formattedDate }</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default PostCard;