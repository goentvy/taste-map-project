import React from "react";
import type { TastePlace } from "../../types/tastePlace";

interface Props {
  data: TastePlace;
  onSelect: (place: TastePlace) => void;
}

const TastePlaceCard: React.FC<Props> = ({ data, onSelect }) => {
    const handleClick = () => {
        onSelect(data);
    }
  return (
    <div className="card" onClick={handleClick} style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem", cursor: "pointer" }}>
      <h3>{data.restrtNm}</h3>
      <p>{data.reprsntFoodNm}</p>
      <p>{data.refineRoadnmAddr}</p>
      <p>{data.tastfdplcTelno}</p>
    </div>
  );
};

export default TastePlaceCard;