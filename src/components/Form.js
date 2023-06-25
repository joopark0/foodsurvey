const Form = (props) => {
  const {
    handleSubmit,
    restNumber,
    handlerestNumber,
    dateNumber,
    handledateNumber,
    hoursNumber,
    handlehoursNumber,
    minutesNumber,
    handleminutesNumber,
    meridianTime,
    handlemeridianTime,
  } = props;
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
                <option value={x}>{x}</option>
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
                <option value={x}>{x}</option>
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
    </div>
  );
};

export default Form;
