import './App.css';
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather startCity="Glasgow"/>
      </div>
      <Footer />
  </div>
  );
}

export default App;
