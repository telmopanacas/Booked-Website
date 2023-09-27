import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [ auth, setAuth ] = useState({});
    const [ userId, setUserId ] = useState(null);
    const [ userUpvotedReviews, setUserUpvotedReviews ] = useState([]);
    const [ userDownvotedReviews, setUserDownvotedReviews ] = useState([]);

    return (
        <AuthContext.Provider 
        value= {{
            auth,
            setAuth, 
            userId, 
            setUserId, 
            userUpvotedReviews,
            setUserUpvotedReviews,
            userDownvotedReviews,
            setUserDownvotedReviews
        }}>
            { children }
        </AuthContext.Provider>
    );
}

export default AuthContext;