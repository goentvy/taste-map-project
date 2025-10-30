import React from "react";
import TastePlaceCard from "./TastePlaceCard";
import type { TastePlace } from "../../types/tastePlace";

interface Props {
  places: TastePlace[];
  onSelect: (place: TastePlace) => void;
}

const TastePlaceList: React.FC<Props> = ({ places, onSelect }) => {
  return (
    <div>
      {places.map((place) => (
        <TastePlaceCard key={place.restrtNm} data={place} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default TastePlaceList;