import React from "react";

interface RegionSelectorProps {
  onSelect: (region: string) => void;
}

const regions = ["수원시", "성남시", "용인시", "화성시"];

const RegionSelector: React.FC<RegionSelectorProps> = ({ onSelect }) => {
  return (
    <select onChange={(e) => onSelect(e.target.value)} defaultValue="">
      <option value="" disabled>지역을 선택하세요</option>
      {regions.map((region) => (
        <option key={region} value={region}>{region}</option>
      ))}
    </select>
  );
};

export default RegionSelector;