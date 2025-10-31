import React from "react";
import { regions } from "../../constants/regions";
import "./RegionSelector.css";

interface RegionSelectorProps {
  onSelect: (region: string) => void;
}


const RegionSelector: React.FC<RegionSelectorProps> = ({ onSelect }) => {
  return (
    <select
      className="region-selector"
      onChange={(e) => onSelect(e.target.value)}
      defaultValue=""
    >
      <option value="" disabled>
        지역을 선택하세요
      </option>
      {regions.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
};

export default RegionSelector;