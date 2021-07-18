const Price = ({ money, checked }) => {
  return (
    <div className="price">
      <strong>${money}</strong>
      <p>/ {checked ? "year" : "month"}</p>
    </div>
  );
};

export default Price;
