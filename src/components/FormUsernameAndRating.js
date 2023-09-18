import '../assets/styles/FormUsernameAndRating.css'


const Username = ({ username}) => {
    return (
        <div className="username-design">
            <div className="username-outside">
                <div className="username-inside">
                    <label>Username</label>
                    <input 
                        value={username}
                        disabled
                        type="text" 
                        required
                        placeholder="Your username"

                    />
                </div>
            </div>
        </div>
    );
}

const Rating = ({ rating, setRating }) => {
    return (
        <div className="rating-design">
            <div className="rating-outside">
                <div className="rating-inside">
                    <label>Rating</label>
                    <input 
                        type="number" 
                        value={rating}
                        min="1"
                        max="5"
                        required
                        placeholder="1"
                        onChange={(e) => setRating(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}

const FormUsernameAndRating = ({ username, setRating }) => {
    return (  
        <div className="usernameAndRating">
            <Username  username={username}/>
            <Rating  setRating={setRating}/>
        </div>
    );
}
 
export default FormUsernameAndRating;



