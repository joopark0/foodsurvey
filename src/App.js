import { useState } from 'react';
import './App.css';
//import { useState, useEffect } from 'react';
import Header from './components/Header';
import WendysForm from './components/WendysForm';
import char1 from './images/char1.webp';
import char2 from './images/char2.jpeg';

const App = () => {
  const [visible, setVisible] = useState(true);
  const [storeComponent, setStoreComponent] = useState(null);

  const changeStore = (Store) => {
    setVisible(false);
    console.log(Store);
    setStoreComponent(<Store />);
  };

  return (
    <div className="App">
      <Header />
      <br></br>
      {visible && (
        <div className="rest-grid">
          <div className="rest" onClick={() => changeStore(WendysForm)}>
            <div className="restText">Wendys</div>
            <img src={char1} />
          </div>
          <div className="rest">
            <img src={char2} alt="" />
          </div>
        </div>
      )}
      {storeComponent}
    </div>
  );
};

export default App;
