export const Form = () => {
  const handleSubmit = e => {
    e.preventDefault(e.target.value);
    console.log(e.target.elements.currency.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input name="currency"></input>
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
