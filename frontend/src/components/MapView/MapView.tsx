import React, { useEffect, useRef } from "react";
import type { TastePlace } from "../../types/tastePlace";

interface Props {
  selectedPlace: TastePlace | null;
}

interface KakaoAddressResult {
  x: string;
  y: string;
  address_name: string;
}

const waitForKakao = (): Promise<void> => {
  return new Promise((resolve) => {
    const check = () => {
      if (window.kakao && window.kakao.maps) {
        resolve();
      } else {
        setTimeout(check, 100);
      }
    };
    check();
  });
};

const MapView: React.FC<Props> = ({ selectedPlace }) => {
  const mapRef = useRef<any>(null); // 지도 객체 저장
  const markerRef = useRef<any>(null); // 마커 객체 저장

  useEffect(() => {
    const initMap = async () => {
      await waitForKakao();

      const mapContainer = document.getElementById("map");
      if (!mapContainer) return;

      const mapOption = {
        center: new window.kakao.maps.LatLng(37.5665, 126.9780),
        level: 3,
      };

      mapRef.current = new window.kakao.maps.Map(mapContainer, mapOption);
    };

    initMap();
  }, []);

  useEffect(() => {
    if (!selectedPlace || !mapRef.current) return;
    const { refineRoadnmAddr } = selectedPlace;
    const geocoder = new window.kakao.maps.services.Geocoder();

    geocoder.addressSearch(refineRoadnmAddr, (result: KakaoAddressResult[], status: string) => {

      if (status === window.kakao.maps.services.Status.OK && result.length > 0) {
        const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

        // 기존 마커 제거
        if (markerRef.current) {
          markerRef.current.setMap(null);
        }

        // 새 마커 생성 및 저장
        markerRef.current = new window.kakao.maps.Marker({
          map: mapRef.current,
          position: coords,
        });

        // InfoWindow 생성
        const infoWindow = new window.kakao.maps.InfoWindow({
          content: `
            <div style="padding:8px; font-size:14px;">
              <strong>${selectedPlace.restrtNm}</strong><br/>
              ${selectedPlace.reprsntFoodNm || "대표음식 없음"}<br/>
              ${selectedPlace.refineRoadnmAddr || "주소지 없음"}<br/>
              ${selectedPlace.tastfdplcTelno || "전화번호 없음"}
            </div>
          `,
        });

        // 마커 클릭 시 InfoWindow 열기
        window.kakao.maps.event.addListener(markerRef.current, "click", () => {
          infoWindow.open(mapRef.current, markerRef.current);
        });

        mapRef.current.setCenter(coords);
      } else {
        console.warn("주소 검색 실패 또는 결과 없음");
      }
    });
  }, [selectedPlace]);

  return <div id="map" style={{ width: "100%", height: "400px", marginTop: "1rem" }} />;
};

export default MapView;