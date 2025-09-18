import React from "react";
import "./App.css";
import Card from "./components/Card";

// Import images
import sample1 from "./assets/images/sample1.jpg";
import sample2 from "./assets/images/sample2.jpg";
import sample3 from "./assets/images/sample3.jpg";
import sample4 from "./assets/images/sample4.jpg";
import sample5 from "./assets/images/sample5.jpg";
import sample6 from "./assets/images/sample6.jpg";

function App() {
  return (
    <div className="app">
      <h1>Resorts Lite</h1>
      <hr className="divider" />   {/* <-- separator line */}

      <div className="card-container">
        <Card
          title="Indonesia"
          image={sample1}
          description="Gili Air Hotel"
          rating={4.8}
          price="$589"
        />

        <Card
          title="Seychelles"
          image={sample2}
          description="Hilton Resort"
          rating={4.2}
          price="$629"
        />

        <Card
          title="US Virgin Islands"
          image={sample3}
          description="Goa Resort"
          rating={3.5}
          price="$485"
        />
        <Card
          title="Bahamas"
          image={sample4}
          description="Kuredu Resort"
          rating={4.1}
          price="$729"
        />
        <Card
          title="Mauritius"
          image={sample5}
          description="Trou D'eau Douce"
          rating={4.9}
          price="$877"
        />
        <Card
          title="Bermuda"
          image={sample6}
          description="Staniel Cay Hotel"
          rating={3.2}
          price="$365"
        />
      </div>
    </div>
  );
}

export default App;
