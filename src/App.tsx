import React, { Component } from "react";
import "./App.css";
import Cart from "./components/Cart";

class App extends Component {
  render() {
    const items = [
      {
        id: "1",
        name: "Phillips Hair Dryer",
        quantity: 1,
        price: 1000,
        discount: 100
      },
      {
        id: "2",
        name: "Phillips Trimmer",
        quantity: 1,
        price: 1500,
        discount: 33
      },
      {
        id: "3",
        name: "Sleepwell mattress",
        quantity: 1,
        price: 10000,
        discount: 1500
      },
      {
        id: "4",
        name: "Godrej Air Conditioner",
        quantity: 1,
        price: 27000,
        discount: 1500
      }
    ];

    return (
      <div className="App">
        <Cart items={items} />
      </div>
    );
  }
}

export default App;
