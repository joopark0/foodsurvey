import back from './services';
import { useState } from 'react';

const Form = () => {
  const [restNumber, setrestNumber] = useState('');
  const [dateNumber, setdateNumber] = useState('');
  const [hoursNumber, sethoursNumber] = useState('');
  const [minutesNumber, setminutesNumber] = useState('');
  const [meridianTime, setmeridianTime] = useState('');
  const [returnCode, setreturnCode] = useState('');
  //Submitting status to prevent multiple submits
  const [isSubmitting, setIsSubmitting] = useState(false);

  //handle numbers
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
    e.preventDefault();

    if (isSubmitting) {
      return; // Prevent multiple submissions while the promise is being resolved
    }

    const loadCircle = document.getElementById('loader');
    loadCircle.style.display = 'block';
    setIsSubmitting(true);
    setreturnCode('');
    const jsonload = {
      restnum: restNumber,
      datenum: dateNumber,
      hoursnum: hoursNumber,
      minutesnum: minutesNumber,
      meridiantime: meridianTime,
    };
    back
      .sendData(jsonload, 'wendys')
      .then((res) => {
        setreturnCode(res.code);
      })
      .finally(() => {
        setIsSubmitting(false); // Reset isSubmitting to false when the promise is fulfilled
        loadCircle.style.display = 'none';
      });

    return null;
  };
  const today = new Date().toLocaleDateString('en-ca');

  //set hours
  const hours = [];
  for (let x = 1; x < 13; x++) {
    hours.push(String(x));
  }
  const newhours = hours.map((val) => {
    if (val.length === 1) return '0' + val;
    return val;
  });

  const minutes = [];
  for (let x = 1; x < 60; x++) {
    minutes.push(String(x));
  }
  const newminutes = minutes.map((val) => {
    if (val.length === 1) return '0' + val;
    return val;
  });

  return (
    <div>
      <div className="mainTitle">Please Enter Wendys Receipt Info</div>
      <br />
      <form onSubmit={handleSubmit}>
        <div>
          <div className="forminfo">
            Restaurant Number:{' '}
            <input
              id="restnumber"
              value={restNumber}
              onChange={handlerestNumber}
              className="rest-number"
              required
            />
          </div>
          <br></br>
          <div className="forminfo">
            Date of Visit:{' '}
            <input
              id="dateofvisit"
              type="date"
              value={dateNumber}
              min="2020-01-01"
              max={today}
              onChange={handledateNumber}
              required
            />
          </div>
          <br></br>
          <div className="forminfo">
            Time of Visit:{' '}
            <select
              id="inputhours"
              name="inputhours"
              value={hoursNumber}
              onChange={handlehoursNumber}
              required
            >
              <option value>--</option>
              {newhours.map((x) => (
                <option value={x} key={`h+${x}`}>
                  {x}
                </option>
              ))}
            </select>
            <select
              name="inputminutes"
              id="inputminutes"
              value={minutesNumber}
              onChange={handleminutesNumber}
              required
            >
              <option value>--</option>
              {newminutes.map((x) => (
                <option value={x} key={`m+${x}`}>
                  {x}
                </option>
              ))}
            </select>
            <select
              name="meridiantime"
              id="meridiantime"
              value={meridianTime}
              onChange={handlemeridianTime}
              required
            >
              <option value>--</option>
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
          <br></br>
        </div>
        <div>
          <button type="submit" className="submitbutton" id="submitbutton">
            Submit
          </button>
          <div id="loader"></div>
        </div>
      </form>
      <p>{returnCode}</p>
    </div>
  );
};

export default Form;
