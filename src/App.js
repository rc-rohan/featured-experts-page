import React from "react";
import ExpertDetails from "./Components/ExpertsDetails";
import FilterSection from "./Components/FilterSection";
import Navbar from "./Components/Navbar";
import "./App.css";

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <main className="app__flex-sections">
        <FilterSection />
        <ExpertDetails />
      </main>
    </div>
  );
};

export default App;
