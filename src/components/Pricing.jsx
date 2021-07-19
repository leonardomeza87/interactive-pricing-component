import React, { useState, useEffect } from "react";
import Billing from "./Billing";
import Pageviews from "./Pageviews";
import Price from "./Price";
import { ReactComponent as CheckSVG } from "../images/icon-check.svg";

const Pricing = () => {
  const [money, setMoney] = useState((16).toFixed(2));
  const [discount, setDiscount] = useState(0);
  const [checked, setChecked] = useState(false);
  const [sliderValue, setSliderValue] = useState(2);

  //Set amount of money
  const handleChange = (e) => {
    const el = e.target;
    console.log(el.value);

    el.style.setProperty("--value", el.value);

    let value = el.valueAsNumber;
    setSliderValue(value);

    calculateMoney(value);
  };

  const priceList = [8, 12, 16, 24, 36];

  const calculateMoney = (value) => {
    let ppm = priceList[value];
    // console.log(ppm);

    if (discount !== 0) {
      let months = 12;
      let dvalue = ppm * (discount / 100);
      ppm = (ppm - dvalue) * months;
    }

    // console.log("Discounted value: ", value);

    setMoney(ppm.toFixed(2));
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
          <Pageviews sliderValue={sliderValue} />
          <Price money={money} checked={checked} />
        </div>
        <input
          className="slider"
          min="0"
          max="4"
          step="1"
          type="range"
          style={{ "--value": 2, "--min": 0, "--max": 4 }}
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
