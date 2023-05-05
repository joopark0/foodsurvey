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
  for (let x = 1; x < 61; x++) {
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
          Restaurant Number:{' '}
          <input value={restNumber} onChange={handlerestNumber} />
          Date of Visit:{' '}
          <input
            type="date"
            value={dateNumber}
            min="2020-01-01"
            max={today}
            onChange={handledateNumber}
          />
          Time of Visit:{' '}
          <select
            id="inputhours"
            name="inputhours"
            value={hoursNumber}
            onChange={handlehoursNumber}
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
          >
            <option value>--</option>
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
