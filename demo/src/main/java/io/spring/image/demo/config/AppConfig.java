package io.spring.image.demo.config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class AppConfig {
    @Bean
    public RestTemplate restTemplate(){
        // Instanciação e configuração manual do objeto
        RestTemplate restTemplate = new RestTemplate();
        // É possível adicionar interceptores, timeouts, cabeçalhos padrão, etc.
        return restTemplate;
    }
}
