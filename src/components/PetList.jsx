import React from "react";
import PetCard from "./PetCard";

function PetList({ pets }) {
  return (
    <>
      <div>
        {pets.map((pet) => (
          <PetCard key={pet.name} pet={pet} />
        ))}
      </div>
    </>
  );
}

export default PetList



