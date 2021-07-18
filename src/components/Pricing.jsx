import Billing from "./Billing";
import Pageviews from "./Pageviews";
import Price from "./Price";
import { ReactComponent as CheckSVG } from "../images/icon-check.svg";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="primary">
        <div className="top">
          <Pageviews />
          <Price />
        </div>
        <input className="slider" type="range" />
        <Billing />
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
