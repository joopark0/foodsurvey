import { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
//import { useState, useEffect } from 'react';
import Header from './components/Header';
import WendysForm from './components/WendysForm';
import char1 from './images/char1.webp';
import char2 from './images/char2.jpeg';

const App = () => {
  const [visible, setVisible] = useState(true);
  const location = useLocation();

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
      <Header />
      <br></br>
      {visible && (
        <div className="rest-grid">
          <div className="rest">
            <Link to="/Wendys" onClick={changeVisibility}>
              <div className="restText">Wendys</div>
              <img src={char1} />
            </Link>
          </div>
          <div className="rest">
            <img src={char2} alt="" />
          </div>
        </div>
      )}
      <Routes>
        <Route path="/Wendys" element={<WendysForm />} />
      </Routes>
    </div>
  );
};

export default App;
