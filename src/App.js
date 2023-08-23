import './assets/styles/App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './views/Home';
import LandingPage from './views/Landing';
import CreateReviewPage from './views/CreateReview';
import AboutUsPage from './views/AboutUs';
import ContactPage from './views/Contact';
import SignInPage from './views/SignIn';
import NotFoundPage from './views/404';
import PageLayout from './components/PageLayout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<LandingPage />}/>
          <Route path='/*' element={<PageLayout />}/>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;