import "./App.css";
import React, { Suspense } from "react";
import MakeCard from "./Components/makeCard";
import { createResource } from "./api/resource";

const resource = createResource();

function App() {
  return (
    <div className="App">
      <h1>Covid 19 Statistics</h1>
      <div className="cardContainer">
        <Suspense fallback={<h1>Loading...</h1>}>
          <MakeCard resource={resource} />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
