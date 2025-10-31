export function focusMarker(index: number) {
    const { marker, infoWindow } = markerDataRef.current[index];
    if (!marker || !infoWindow) return;

    mapRef.current?.setCenter(marker.getPosition());
    infoWindow.open(mapRef.current, marker);
}