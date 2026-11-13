package io.spring.image.demo.domain.service;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ClientService {
    private final RestTemplate restTemplate;

    // O Spring injeta automaticamente a instância criada pelo método @Bean acima
    public ClientService(RestTemplate restTemplate){
        this.restTemplate = restTemplate;
    }
}
