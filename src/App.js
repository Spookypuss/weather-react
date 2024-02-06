import './App.css';
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather now</h1>
        <Weather city="Glasgow"/>
        <br />
        <Footer />
      </header>
    </div>
  );
}

export default App;
