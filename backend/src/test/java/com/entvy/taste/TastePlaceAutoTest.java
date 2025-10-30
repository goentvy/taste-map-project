package com.entvy.taste;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;
import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

public class TastePlaceAutoTest {
    public static void main(String[] args) throws Exception {
        Dotenv dotenv = Dotenv.load();
        String apikey = dotenv.get("SPRING_OPENAPI_KEY");
        String baseUrl = "https://openapi.gg.go.kr/PlaceThatDoATasteyFoodSt?Key=" + apikey + "&Type=xml&SIGUN_NM=";

        List<String> regions = Arrays.asList(
                "수원시", "성남시", "고양시", "용인시", "부천시", "안산시", "안양시", "평택시", "의정부시", "시흥시",
                "김포시", "광명시", "군포시", "오산시", "이천시", "구리시", "남양주시", "하남시", "파주시", "여주시",
                "양평군", "가평군", "연천군", "포천시", "동두천시", "과천시", "광주시", "화성시", "양주시", "안성시", "의왕시"
        );

        RestTemplate restTemplate = new RestTemplate();
        XmlMapper xmlMapper = new XmlMapper();

        for (String region : regions) {
            String url = baseUrl + region;
            try {
                ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
                JsonNode root = xmlMapper.readTree(response.getBody().getBytes());
                JsonNode rows = root.path("row");

                if (rows.isArray() && rows.size() > 0) {
                    System.out.println("✅ 데이터 있음: " + region + " (" + rows.size() + "건)");
                } else {
                    System.out.println("❌ 데이터 없음: " + region);
                }
            } catch (Exception e) {
                System.out.println("⚠️ 요청 실패: " + region + " → " + e.getMessage());
            }
        }
    }
}