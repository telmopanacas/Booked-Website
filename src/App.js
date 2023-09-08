import './assets/styles/App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './views/Landing';
import PageLayout from './components/PageLayout';
import './services/axios';

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