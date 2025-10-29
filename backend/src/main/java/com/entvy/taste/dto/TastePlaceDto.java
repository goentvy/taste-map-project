package com.entvy.taste.dto;

import com.entvy.taste.entity.TastePlace;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;
import lombok.Data;
import lombok.NoArgsConstructor;

@JacksonXmlRootElement(localName = "row")
@JsonIgnoreProperties(ignoreUnknown = true)
@Data
@NoArgsConstructor
public class TastePlaceDto {
    @JacksonXmlProperty(localName = "SIGUN_NM")
    private String sigunNm;

    @JacksonXmlProperty(localName = "SIGUN_CD")
    private String sigunCd;

    @JacksonXmlProperty(localName = "RESTRT_NM")
    private String restrtNm;

    @JacksonXmlProperty(localName = "REPRSNT_FOOD_NM")
    private String reprsntFoodNm;

    @JacksonXmlProperty(localName = "TASTFDPLC_TELNO")
    private String tastfdplcTelno;

    @JacksonXmlProperty(localName = "REFINE_LOTNO_ADDR")
    private String refineLotnoAddr;

    @JacksonXmlProperty(localName = "REFINE_ROADNM_ADDR")
    private String refineRoadnmAddr;

    @JacksonXmlProperty(localName = "REFINE_ZIP_CD")
    private String refineZipCd;

    @JacksonXmlProperty(localName = "REFINE_WGS84_LOGT")
    private Double refineWgs84Logt;

    @JacksonXmlProperty(localName = "REFINE_WGS84_LAT")
    private Double refineWgs84Lat;

    public TastePlaceDto(TastePlace entity) {
        this.sigunNm = entity.getSigunNm();
        this.sigunCd = entity.getSigunCd();
        this.restrtNm = entity.getRestrtNm();
        this.reprsntFoodNm = entity.getReprsntFoodNm();
        this.tastfdplcTelno = entity.getTastfdplcTelno();
        this.refineLotnoAddr = entity.getRefineLotnoAddr();
        this.refineRoadnmAddr = entity.getRefineRoadnmAddr();
        this.refineZipCd = entity.getRefineZipCd();
        this.refineWgs84Logt = entity.getRefineWgs84Logt();
        this.refineWgs84Lat = entity.getRefineWgs84Lat();
    }
}



