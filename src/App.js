import "./App.css";
import React, { Suspense } from "react";
import MakeCard from "./Components/makeCard";
import { createResource } from "./api/resource";
import CountryStatistics from "./Components/statistics";

const resource = createResource();

function App() {
  return (
    <div className="App">
      <h1>Covid Cases Tracker</h1>

      <Suspense fallback={<h1>Loading...</h1>}>
        <div className="cardContainer">
          <MakeCard resource={resource} />
        </div>
        <CountryStatistics resource={resource} />
      </Suspense>
    </div>
  );
}

export default App;
