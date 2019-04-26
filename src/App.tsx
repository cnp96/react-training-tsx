import React from "react";
import Car from "./components/Car";

const App: React.FC = () => {
  return (
    <Car
      model={"Civic"}
      car={{ make: "Honda", year: 2012 }}
      onClick={year => console.log(year)}
    />
  );
};

export default App;
