import { exChange } from 'service/service';

export const Form = () => {
  const handleSubmit = e => {
    e.preventDefault(e.target.value);
    const data = e.target.elements.currency.value;
    const arrData = data.split(' ');

    // 15 USD in UAH
    const to = arrData[3];
    const from = arrData[1];
    const amount = arrData[0];

    exChange(to, from, amount).then(data => console.log(data));

    e.target.reset();
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
