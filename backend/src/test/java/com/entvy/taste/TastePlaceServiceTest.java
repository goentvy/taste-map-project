package com.entvy.taste;

import com.entvy.taste.dto.TastePlaceDto;
import com.entvy.taste.entity.TastePlace;
import com.entvy.taste.repository.TastePlaceRepository;
import com.entvy.taste.service.TastePlaceService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.lang.reflect.Field;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class TastePlaceServiceTest {

    @Mock
    private TastePlaceRepository repository;

    @InjectMocks
    private TastePlaceService service;

    @Test
    void testFindByRegion() {
        String region = "수원시";
        List<TastePlace> mockList = List.of(new TastePlace());
        when(repository.findBySigunNm(region)).thenReturn(mockList);

        List<TastePlace> result = service.findByRegion(region);

        assertEquals(1, result.size());
        verify(repository).findBySigunNm(region);
    }

    @Test
    void testFetchTastePlaces() throws Exception {
        String region = "수원시";
        String mockXml = """
        <PlaceThatDoATasteyFoodSt>
            <row>
                <SIGUN_NM>수원시</SIGUN_NM>
                <RESTRT_NM>가보정</RESTRT_NM>
            </row>
        </PlaceThatDoATasteyFoodSt>
        """;

        RestTemplate restTemplate = mock(RestTemplate.class);
        TastePlaceService service = new TastePlaceService(repository, "dummy-api-key");
        Field restTemplateField = TastePlaceService.class.getDeclaredField("restTemplate");
        restTemplateField.setAccessible(true);
        restTemplateField.set(service, restTemplate);

        ResponseEntity<String> response = ResponseEntity.ok(mockXml);
        when(restTemplate.getForEntity(anyString(), eq(String.class))).thenReturn(response);

        List<TastePlaceDto> result = service.fetchTastePlaces(region);

        assertEquals(1, result.size());
        assertEquals("수원시", result.get(0).getSigunNm());
    }

    @Test
    void testFetchAndSaveTastePlaces() throws Exception {
        String region = "수원시";
        String mockXml = """
        <PlaceThatDoATasteyFoodSt>
            <row>
                <SIGUN_NM>수원시</SIGUN_NM>
                <RESTRT_NM>가보정</RESTRT_NM>
            </row>
        </PlaceThatDoATasteyFoodSt>
        """;

        RestTemplate restTemplate = mock(RestTemplate.class);
        TastePlaceService service = new TastePlaceService(repository, "dummy-api-key");
        Field restTemplateField = TastePlaceService.class.getDeclaredField("restTemplate");
        restTemplateField.setAccessible(true);
        restTemplateField.set(service, restTemplate);

        ResponseEntity<String> response = ResponseEntity.ok(mockXml);
        when(restTemplate.getForEntity(anyString(), eq(String.class))).thenReturn(response);
        when(repository.existsByRestrtNmAndSigunNm("가보정", "수원시")).thenReturn(false);

        service.fetchAndSaveTastePlaces(region);

        verify(repository).save(any(TastePlace.class));
    }
}
