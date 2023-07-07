import { useState, useEffect } from 'react';
import './App.css';
import {
  Route,
  Routes,
  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom';
//import { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';
import WendysForm from './components/WendysForm';
import McdonaldsForm from './components/McdonaldsForm';
import mcdlogo from './images/mcdlogo.png';
import wendyslogo from './images/Wendys-logo.png';

const App = () => {
  const [visible, setVisible] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      setVisible(true);
    } else setVisible(false);
  }, [location]);

  const changeVisibility = () => {
    setVisible(false);
  };

  return (
    <div className="App">
      <Header navigate={navigate} />
      <br></br>
      {visible && (
        <div className="rest-grid">
          <div className="rest">
            <Link to="/Wendys" onClick={changeVisibility}>
              <img src={wendyslogo} alt="wendys logo" className="logo-image" />
            </Link>
          </div>
          <Link to="/Mcdonalds" onClick={changeVisibility}>
            <div className="rest">
              <img src={mcdlogo} alt="mcdonalds logo" className="logo-image" />
            </div>
          </Link>
        </div>
      )}
      <Routes>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/" element={<Home />} />
        <Route path="/Wendys" element={<WendysForm />} />
        <Route path="/Mcdonalds" element={<McdonaldsForm />} />
      </Routes>
    </div>
  );
};

export default App;
