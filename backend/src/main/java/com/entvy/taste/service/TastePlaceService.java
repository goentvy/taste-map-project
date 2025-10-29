package com.entvy.taste.service;

import com.entvy.taste.dto.TastePlaceDto;
import com.entvy.taste.entity.TastePlace;
import com.entvy.taste.repository.TastePlaceRepository;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.beans.BeanUtils;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@Service
public class TastePlaceService {
    private final String apikey;
    private final RestTemplate restTemplate = new RestTemplate();
    private final TastePlaceRepository repository;

    public TastePlaceService(TastePlaceRepository repository) {
        this.repository = repository;
        Dotenv dotenv = Dotenv.load();
        this.apikey = dotenv.get("SPRING_OPENAPI_KEY");
    }

    public List<TastePlace> findByRegion(String sigunNm) {
        return repository.findBySigunNm(sigunNm);
    }

    public List<TastePlaceDto> fetchTastePlaces(String sigunNm) throws Exception {
        String url = "https://openapi.gg.go.kr/PlaceThatDoATasteyFoodSt?"
                + "Key=" + apikey
                + "&Type=xml"
                + "&SIGUN_NM=" + sigunNm;

        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
        String xml = response.getBody();

        XmlMapper xmlMapper = new XmlMapper();
        JsonNode root = xmlMapper.readTree(xml.getBytes());

        List<TastePlaceDto> result = new ArrayList<>();
        JsonNode rows = root.path("row");

        for(JsonNode node : rows) {
            TastePlaceDto dto = xmlMapper.treeToValue(node, TastePlaceDto.class);
            result.add(dto);
        }

        return result;
    }

    public void fetchAndSaveTastePlaces(String sigunNm) throws Exception {
        String url = "https://openapi.gg.go.kr/PlaceThatDoATasteyFoodSt?"
                + "KEY=" + apikey
                + "&Type=xml"
                + "&SIGUN_NM=" + sigunNm;

        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
        String xml = response.getBody();
        try {
            XmlMapper xmlMapper = new XmlMapper();
            JsonNode root = xmlMapper.readTree(xml.getBytes());
            JsonNode rows = root.path("row");

            for (JsonNode node : rows) {
                TastePlaceDto dto = xmlMapper.treeToValue(node, TastePlaceDto.class);

                String restrtName = dto.getRestrtNm() != null ? dto.getRestrtNm().trim() : "";
                String sigunName = dto.getSigunNm() != null ? dto.getSigunNm().trim() : "";

                boolean exists = repository.existsByRestrtNmAndSigunNm(restrtName, sigunName);

                if (!exists) {
                    TastePlace entity = new TastePlace();
                    BeanUtils.copyProperties(dto, entity);
                    repository.save(entity);
                }
            }
        } catch (Exception e) {
            System.out.println("XML 파싱 중 예외 발생: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
