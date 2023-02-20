import React from "react";
import PetList from "./components/PetList";
import { Counter } from "./components/Counter";

const pets = [
  {
    name: "Fluffy",
    photo: "https://placekitten.com/200/200",
  },
  {
    name: "Buddy",
    photo: "https://placedog.net/200/200?id=1",
  },
  {
    name: "Smokey",
    photo: "https://placedog.net/200/200?id=2",
  },
];

const containerStyle = {
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

function App() {
  return (
    <div style= {containerStyle}>
      <PetList pets={pets} />
      <Counter />
    </div>
  );
}

export default App

