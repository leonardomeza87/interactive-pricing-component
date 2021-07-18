import "./App.css";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Simple, traffic-based pricing</h1>
        <p>Sign-up for our 30-day trial. No credit card required.</p>
      </div>
      <Pricing />
    </div>
  );
}

export default App;
