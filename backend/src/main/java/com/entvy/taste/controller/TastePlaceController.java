package com.entvy.taste.controller;

import com.entvy.taste.dto.TastePlaceDto;
import com.entvy.taste.entity.TastePlace;
import com.entvy.taste.service.TastePlaceService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/taste")
public class TastePlaceController {
    private final TastePlaceService tastePlaceService;

    public TastePlaceController(TastePlaceService tastePlaceService) {
        this.tastePlaceService = tastePlaceService;
    }

    @GetMapping("/{region}")
    public ResponseEntity<List<TastePlaceDto>> getTastePlaces(@PathVariable String region) throws Exception {
        List<TastePlaceDto> places = tastePlaceService.fetchTastePlaces(region);
        return ResponseEntity.ok(places);
    }

    @GetMapping("/db/{region}")
    public ResponseEntity<List<TastePlaceDto>> getSavedTastePlaces(@PathVariable String region) {
        List<TastePlace> entities = tastePlaceService.findByRegion(region);
        List<TastePlaceDto> dtos = entities.stream()
                .map(TastePlaceDto::new) // TastePlaceDto 생성자에서 Entity → DTO 변환
                .toList();
        return ResponseEntity.ok(dtos);
    }

    @PostMapping("/save/{region}")
    public ResponseEntity<String> saveTastePlaces(@PathVariable String region) throws Exception {
        tastePlaceService.fetchAndSaveTastePlaces(region);
        return ResponseEntity.ok("저장 완료");
    }
}
