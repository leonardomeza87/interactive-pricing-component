import React, { useState, useEffect } from "react";
import Billing from "./Billing";
import Pageviews from "./Pageviews";
import Price from "./Price";
import { ReactComponent as CheckSVG } from "../images/icon-check.svg";

const Pricing = () => {
  const [money, setMoney] = useState((16).toFixed(2));
  const [discount, setDiscount] = useState(0);
  const [checked, setChecked] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);

  //Set amount of money
  const handleChange = (e) => {
    let value = e.target.valueAsNumber;
    setSliderValue(value);

    calculateMoney(value);
  };

  const calculateMoney = (value) => {
    if (discount !== 0) {
      let dvalue = value * (discount / 100);
      value = (value - dvalue) * 12;
    }

    // console.log("Discounted value: ", value);

    setMoney(((value / 100) * 32).toFixed(2));
  };

  useEffect(() => {
    calculateMoney(sliderValue);
  }, [discount]);

  //Change discount
  useEffect(() => {
    checked ? setDiscount(25) : setDiscount(0);
  }, [checked]);

  return (
    <div className="pricing">
      <div className="primary">
        <div className="top">
          <Pageviews />
          <Price money={money} checked={checked} />
        </div>
        <input
          className="slider"
          step="10"
          type="range"
          onChange={handleChange}
        />
        <Billing handleCheck={setChecked} />
      </div>
      <div className="secondary">
        <div className="checklist">
          <div className="check">
            <CheckSVG />
            <p>Unlimited websites</p>
          </div>
          <div className="check">
            <CheckSVG />
            <p>100% data ownership</p>
          </div>
          <div className="check">
            <CheckSVG />
            <p>Email reports</p>
          </div>
        </div>

        <button>Start my trial</button>
      </div>
    </div>
  );
};

export default Pricing;
