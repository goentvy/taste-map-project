import { useRef } from "react";
import MapView from "../components/MapView/MapView";
import type { MapViewHandle } from "../components/MapView/MapView"; 
import type { TastePlace } from "../types/tastePlace";

interface PlacePageProps {
  placeList: TastePlace[];
}

export default function PlacePage({ placeList }: PlacePageProps) {
  const mapRef = useRef<MapViewHandle>(null);

  return (
    <div style={{ display: "flex" }}>
      <ul style={{ width: "300px" }}>
        {placeList.map((place, index) => (
          <li
            key={place.id}
            onClick={() => mapRef.current?.focusMarker(index)}
            style={{ cursor: "pointer", padding: "8px 0" }}
          >
            {place.restrtNm}
          </li>
        ))}
      </ul>
      <MapView ref={mapRef} placeList={placeList} />
    </div>
  );
}