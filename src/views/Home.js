import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const handleClickNewReview = () => {
        navigate('/create');
    }

    return ( 
        <div className="page">
            <h1>Content</h1>
            <button onClick={handleClickNewReview}>New Review</button>
        </div>
    );
}

export default HomePage;