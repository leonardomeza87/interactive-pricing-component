import "./App.css";
import Pricing from "./components/Pricing";
import { ReactComponent as CirclesSVG } from "./images/pattern-circles.svg";

function App() {
  return (
    <div className="App">
      <div className="title">
        <CirclesSVG className="circles" />
        <h1>Simple, traffic-based pricing</h1>
        <div className="p-container">
          <p>Sign-up for our 30-day trial.</p>
          <p>No credit card required.</p>
        </div>
      </div>
      <Pricing />
    </div>
  );
}

export default App;
