import './App.css';
import Footer from "./Footer";
import ParticleInput from "./ParticleInput";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Total energy calculator</h1>
        <p>
            Calculator for finding the total energy of a small system of particles
        </p>
        <h2>Please enter the position and charge of particles below</h2>
        <br />
          <div className="row">
              <div className="col">
                  <h3 className="text-center">Particle no.</h3>
              </div>
              <div className="col">
                  <h3 className="text-center">x Position</h3>
              </div>
              <div className="col">
                  <h3 className="text-center">y Position</h3>
              </div>
              <div className="col">
                  <h3 className="text-center">z Position</h3>
              </div>
              <div className="col">
                  <h3 className="text-center">Charge</h3>
              </div>
          </div>
          <br />
      <ParticleInput />
      
      </div>
      <Footer />
  </div>
  );
}

export default App;
