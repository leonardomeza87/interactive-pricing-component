const Billing = ({ handleCheck }) => {
  const handleChange = (e) => {
    let value = e.target.checked;
    handleCheck(value);
  };

  return (
    <div className="billing">
      <p>Monthly Billing</p>
      <input type="checkbox" className="checkbox" onChange={handleChange} />
      <p>
        Yearly Billing<span className="discount d-std">25% discount</span>
        <span className="discount d-alt">-25%</span>
      </p>
    </div>
  );
};

export default Billing;
