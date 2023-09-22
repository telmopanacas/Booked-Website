import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import HomePage from '../views/Home';
import CreateReviewPage from '../views/CreateReview';
import AboutUsPage from '../views/AboutUs';
import ContactPage from '../views/Contact';
import SignInPage from '../views/SignIn';
import NotFoundPage from '../views/404';
import RequireAuth from "./RequireAuth";

const PageLayout = () => {

    const [searchResults, setSearchResults] = useState(null);

    return ( 
        <>
            <Navbar setSearchResults={setSearchResults}/>
            <div className="content">
                <Routes>
                    <Route path='/home' element={<HomePage searchResults={searchResults}/>}/>
                    <Route element= {<RequireAuth />}>
                        <Route path='/create' element={<CreateReviewPage />}/>
                    </Route>
                    <Route path='/about' element={<AboutUsPage />}/>
                    <Route path='/contact' element={<ContactPage />}/>
                    <Route path='/signin' element={<SignInPage />}/>
                    <Route path='*' element={<NotFoundPage />}/>
                </Routes>
            </div>
        </>
    );
}
 
export default PageLayout;