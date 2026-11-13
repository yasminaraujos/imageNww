package io.spring.image.demo.application.users;
import lombok.Data;

@Data // encapsulamento, protejo os métodos pelo lombok
public class CredentialDTO {
    private String email;
    private String password;
}
