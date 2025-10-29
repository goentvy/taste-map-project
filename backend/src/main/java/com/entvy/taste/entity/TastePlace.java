package com.entvy.taste.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name = "taste_place")
@Getter
@Setter
@NoArgsConstructor
public class TastePlace {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String sigunNm;
    private String sigunCd;
    private String restrtNm;
    private String reprsntFoodNm;
    private String tastfdplcTelno;
    private String refineLotnoAddr;
    private String refineRoadnmAddr;
    private String refineZipCd;
    private Double refineWgs84Logt;
    private Double refineWgs84Lat;

    @Column(updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();
}
