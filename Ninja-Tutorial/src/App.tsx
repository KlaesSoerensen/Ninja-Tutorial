import type { Component } from 'solid-js';
import Map from "./Components/MapComponents/Map";

const App: Component = () => {
  return (
    <div>
      <header>
        <h1>
          Test Title
        </h1>
      </header>

      <Map/>
      
    </div>
  );
};

export default App;
