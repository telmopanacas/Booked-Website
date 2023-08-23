import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from '../views/Home';
import CreateReviewPage from '../views/CreateReview';
import AboutUsPage from '../views/AboutUs';
import ContactPage from '../views/Contact';
import SignInPage from '../views/SignIn';
import NotFoundPage from '../views/404';

const PageLayout = () => {
    return ( 
        <>
            <Navbar />
            <div className="content">
                <Routes>
                    <Route path='/home' element={<HomePage />}/>
                    <Route path='/create' element={<CreateReviewPage />}/>
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