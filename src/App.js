import './assets/styles/App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './views/Home';
import LandingPage from './views/Landing';
import CreateReviewPage from './views/CreateReview';
import AboutUsPage from './views/AboutUs';
import ContactPage from './views/Contact';
import SignInPage from './views/SignIn';
import RegisterPage from './views/Register';
import NotFoundPage from './views/404';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route exact path='/' element={<LandingPage />}/>
            <Route path='/home' element={<HomePage />}/>
            <Route path='/create' element={<CreateReviewPage />}/>
            <Route path='/about' element={<AboutUsPage />}/>
            <Route path='/contact' element={<ContactPage />}/>
            <Route path='/signin' element={<SignInPage />}/>
            <Route path='/register' element={<RegisterPage />}/>
            <Route path='*' element={<NotFoundPage />}/>
          </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;