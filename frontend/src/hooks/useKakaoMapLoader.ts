// src/hooks/useKakaoMapLoader.ts
import { useEffect, useRef } from "react";

export function useKakaoMapLoader(mapContainerId: string) {
  const mapRef = useRef<any>(null);

  useEffect(() => {
    const loadMap = () => {
      const container = document.getElementById(mapContainerId);
      if (!container) return;

      window.kakao.maps.load(() => {
        const center = new window.kakao.maps.LatLng(37.2636, 127.0286); // 수원시청
        const options = {
          center,
          level: 5,
        };
        mapRef.current = new window.kakao.maps.Map(container, options);
      });
    };

    if (window.kakao && window.kakao.maps) {
      loadMap();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=fc2c387e44347a6c3589b2b656b01269&autoload=false&libraries=services";
    script.async = true;
    script.onload = () => {
      window.kakao.maps.load(loadMap);
    };

    const existing = document.querySelector('script[src*="dapi.kakao.com"]');
    if (!existing) {
      document.head.appendChild(script);
    }
  }, [mapContainerId]);

  return mapRef;
}