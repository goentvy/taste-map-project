export interface TastePlace {
  restrtNm: string; // 음식점명
  refineRoadnmAddr: string; // 도로명주소
  tastfdplcTelno: string; // 전화번호
  refineLotnoAddr?: string; // 구주소
  refineWgs84Lat?: number; // 위도
  refineWgs84Logt?: number; // 경도
  sigunNm?: string; // 시군명
  sigunCd?: string; // 시군코드
  reprsntFoodNm?: string; // 대표음식명
  refineZipCd?: string; // 소재지우편번호
}