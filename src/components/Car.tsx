import * as React from "react";

interface CarMakeSchema {
  make: string;
  year?: number;
}

export interface CarProps {
  model: string;
  car: CarMakeSchema;
  onClick: (year?: number) => void;
}

export interface CarState {
  year?: number;
}

class Car extends React.Component<CarProps, CarState> {
  state = {
    year: this.props.car.year
  };

  render() {
    return (
      <div>
        <div>
          The car make is {this.props.car.make} and the model is{" "}
          {this.props.model}.
          {this.props.car.year &&
            "It was manufactured on " + this.props.car.year}
        </div>

        <button onClick={e => this.props.onClick(this.state.year)}>
          Print car manufacture year
        </button>
      </div>
    );
  }
}

export default Car;
