import './App.css';
import back from './components/services';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';

const App = () => {
  const [restNumber, setrestNumber] = useState('');
  const [dateNumber, setdateNumber] = useState('');
  const [hoursNumber, sethoursNumber] = useState('');
  const [minutesNumber, setminutesNumber] = useState('');
  const [meridianTime, setmeridianTime] = useState('');
  const [returnCode, setreturnCode] = useState('');
  //test change
  const handlerestNumber = (e) => {
    setrestNumber(e.target.value);
  };

  const handledateNumber = (e) => {
    setdateNumber(e.target.value);
  };

  const handlehoursNumber = (e) => {
    sethoursNumber(e.target.value);
  };
  const handleminutesNumber = (e) => {
    setminutesNumber(e.target.value);
  };
  const handlemeridianTime = (e) => {
    setmeridianTime(e.target.value);
  };

  const handleSubmit = (e) => {
    const loadcircle = document.getElementById('loader');
    loadcircle.style.display = 'block';
    e.preventDefault();
    setreturnCode('');
    const jsonload = {
      restnum: restNumber,
      datenum: dateNumber,
      hoursnum: hoursNumber,
      minutesnum: minutesNumber,
      meridiantime: meridianTime,
    };
    back.sendData(jsonload).then((res) => {
      setreturnCode(res.code);
      loadcircle.style.display = 'none';
    });

    return null;
  };

  return (
    <div className="App">
      <Header />
      <br></br>
      <div className="mainTitle">Please Enter Wendys Receipt Info</div>
      <br></br>
      <Form
        handleSubmit={handleSubmit}
        handlerestNumber={handlerestNumber}
        handledateNumber={handledateNumber}
        handlehoursNumber={handlehoursNumber}
        handleminutesNumber={handleminutesNumber}
        handlemeridianTime={handlemeridianTime}
        restNumber={restNumber}
        dateNumber={dateNumber}
        hoursNumber={hoursNumber}
        minutesNumber={minutesNumber}
        meridianTime={meridianTime}
      />
      <p>{returnCode}</p>
    </div>
  );
};

export default App;
