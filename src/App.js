import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Header from "./Header/Header";
import Footer from './Footer/Footer';
import CardCatalog from './CardCatalog/CardCatalog';
import LandingPage from './LandingPage/LandingPage';
import LoginPage from './LoginPage/LoginPage';
import SignupPage from './SignupPage/SignupPage';
import CollectionPage from './CollectionPage/CollectionPage';
import DeckBuilder from './DeckBuilder/DeckBuilder';
import './styles/credentialsForms.css';
import './styles/footer.css';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/catalog" element={<CardCatalog />} />
          <Route path="/my-collection" element={<CollectionPage />} />
          <Route path="/deck-builder" element={<DeckBuilder />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
