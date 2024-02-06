import './App.css';
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather now</h1>
        <Weather city="Glasgow"/>
        <br />
        <Footer />
        </div>
    </div>
  );
}

export default App;
