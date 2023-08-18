import '../assets/styles/FormUsernameAndRating.css'


const Username = ({ setUsername}) => {
    return (
        <div className="username-design">
            <div className="username-outside">
                <div className="username-inside">
                    <label>Username</label>
                    <input 
                        type="text" 
                        required
                        placeholder="Your username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}

const Rating = ({ setRating }) => {
    return (
        <div className="rating-design">
            <div className="rating-outside">
                <div className="rating-inside">
                    <label>Rating</label>
                    <input 
                        type="number" 
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

const FormUsernameAndRating = ({ setUsername, setRating }) => {
    return (  
        <div className="usernameAndRating">
            <Username  setUsername={setUsername}/>
            <Rating  setRating={setRating}/>
        </div>
    );
}
 
export default FormUsernameAndRating;



