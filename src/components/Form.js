const Form = (props) => {
  const { handleSubmit, restNumber, handlerestNumber, dateNumber } = props;
  const today = new Date().toLocaleDateString('en-ca');

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Restaurant Number:{' '}
          <input value={restNumber} onChange={handlerestNumber} />
          Date of Visit:{' '}
          <input type="date" value={dateNumber} min="2020-01-01" max={today} />
          Time of Visit:{' '}
          <input value={restNumber} onChange={handlerestNumber} />
        </div>
      </form>
    </div>
  );
};

export default Form;
