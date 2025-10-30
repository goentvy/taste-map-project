import React, { useState } from "react";
import RegionSelector from "../components/RegionSelector/RegionSelector";
import TastePlaceList from "../components/TastePlaceList/TastePlaceList";
import MapView from "../components/MapView/MapView";
import { useTastePlaces } from "../hooks/useTastePlaces";
import type { TastePlace } from "../types/tastePlace";
import toast from "react-hot-toast";

const Home: React.FC = () => {
  const [region, setRegion] = useState("");
  const [selectedPlace, setSelectedPlace] = useState<TastePlace | null>(null);
  const { data, isLoading, error } = useTastePlaces(region);

  const handleSelectRegion = (region: string) => {
    setRegion(region);
    toast(`"${region}" 지역 맛집을 불러옵니다...`, { icon: "🍽️" });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <RegionSelector onSelect={handleSelectRegion} />
      {isLoading && <p>로딩 중...</p>}
      {error && <p>데이터를 불러오는 데 실패했습니다.</p>}
      {data && <TastePlaceList places={data} onSelect={setSelectedPlace} />}
      <MapView selectedPlace={selectedPlace} />
    </div>
  );
};

export default Home;