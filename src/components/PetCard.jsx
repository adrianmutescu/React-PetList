import React from "react";

function PetCard({ pet }) {
    const borderStyle = {
      border: "2px solid blue",
      padding: "10px",
      margin: "10px",
    };
  
    return (
      <>
        <div style={borderStyle}>
          <h2>{pet.name}</h2>
          <img src={pet.photo} alt={pet.name} />
        </div>
      </>
    );
  }

export default PetCard