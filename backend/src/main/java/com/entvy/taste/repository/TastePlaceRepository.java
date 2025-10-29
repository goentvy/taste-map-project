package com.entvy.taste.repository;

import com.entvy.taste.entity.TastePlace;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TastePlaceRepository extends JpaRepository<TastePlace, Long> {
    boolean existsByRestrtNmAndSigunNm(String restrtNm, String sigunNm);

    List<TastePlace> findBySigunNm(String sigunNm);
}
