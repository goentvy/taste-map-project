import {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useKakaoMapLoader } from "../../hooks/useKakaoMapLoader";
import type { TastePlace } from "../../types/tastePlace";

interface MapViewProps {
  placeList: TastePlace[];
}

export interface MapViewHandle {
  focusMarker: (index: number) => void;
}

const MapView = forwardRef<MapViewHandle, MapViewProps>(
  ({ placeList }, ref) => {
    const mapRef = useKakaoMapLoader("map");
    const markerDataRef = useRef<{ marker: any; infoWindow: any }[]>([]);
    const kakao = (window as any).kakao;

    // 외부에서 마커를 제어할 수 있도록 expose
    useImperativeHandle(ref, () => ({
      focusMarker: (index: number) => {
        const data = markerDataRef.current[index];
        if (!data) return;

        const { marker, infoWindow } = data;
        mapRef.current?.setCenter(marker.getPosition());
        infoWindow.open(mapRef.current, marker);
      },
    }));

    useEffect(() => {
      if (!mapRef.current || !placeList || placeList.length === 0) return;

      const geocoder = new kakao.maps.services.Geocoder();
      const bounds = new kakao.maps.LatLngBounds();
      markerDataRef.current = []; // 초기화

      const markerPromises = placeList.map((place, index) => {
        return new Promise<void>((resolve) => {
          geocoder.addressSearch(
            place.refineRoadnmAddr,
            (result: any, status: string) => {
              if (
                status === kakao.maps.services.Status.OK &&
                result.length > 0
              ) {
                const coords = new kakao.maps.LatLng(
                  result[0].y,
                  result[0].x
                );
                bounds.extend(coords);

                const marker = new kakao.maps.Marker({
                  map: mapRef.current,
                  position: coords,
                });

                const infoWindow = new kakao.maps.InfoWindow({
                  content: `
                    <div style="padding:8px; font-size:14px;">
                      <strong>${place.restrtNm}</strong><br/>
                      ${
                        place.reprsntFoodNm
                          ? `${place.reprsntFoodNm}<br/>`
                          : ""
                      }
                      ${place.tastfdplcTelno || "전화번호 없음"}
                    </div>
                  `,
                });

                markerDataRef.current[index] = { marker, infoWindow };

                kakao.maps.event.addListener(marker, "click", () => {
                  const { marker, infoWindow } =
                    markerDataRef.current[index];
                  if (!infoWindow || typeof infoWindow.getMap !== "function")
                    return;

                  if (infoWindow.getMap()) {
                    infoWindow.close();
                  } else {
                    infoWindow.open(mapRef.current, marker);
                  }
                });
              }
              resolve();
            }
          );
        });
      });

      Promise.all(markerPromises).then(() => {
        if (!bounds.isEmpty()) {
          mapRef.current.setBounds(bounds);
        }
      });
    }, [placeList, mapRef.current]);

    return <div id="map" style={{ width: "100%", height: "500px" }} />;
  }
);

export default MapView;