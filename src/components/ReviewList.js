import PostCard from "../components/PostCard.js";

const ReviewList = ({ reviews }) => {
    return ( 
        <div className="reviews">
            {reviews.map((review) => (
                <div key={review.id}>
                    <PostCard 
                        postTitle={review['tituloAvaliacao']}
                        bookTitle={review['tituloLivro']}
                        bookAuthor={review['autorLivro']}
                        username={review['autorAvaliacao']}
                        rating={review['rating']}
                        review={review['review']}
                        date={review['dataAvaliacao']}
                        time={review['horaAvaliacao']}
                    />
                </div>
            ))}
        </div>
    );
}
 
export default ReviewList;