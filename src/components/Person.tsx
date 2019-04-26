import * as React from "react";

export interface PersonProps {
  name: string;
  age: number;
}

const Person: React.SFC<PersonProps> = props => {
  return (
    <div>
      Hi {props.name}. You are {props.age} years old!!
    </div>
  );
};

export default Person;
