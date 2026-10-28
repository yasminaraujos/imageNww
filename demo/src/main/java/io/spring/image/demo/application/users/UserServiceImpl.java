package io.spring.image.demo.application.users;

import io.spring.image.demo.domain.entity.User;
import io.spring.image.demo.domain.exception.DuplicatedTupleException;
import io.spring.image.demo.domain.service.UserService;
import io.spring.image.demo.infra.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import static org.postgresql.util.PasswordUtil.encodePassword;


@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder; // inserir no pacote config
    private final JwtService jwtService;

    @Override
    public User getByEmail(String email){
        return userRepository.findByEmail(email);
    }

    @Override
    @Transactional
    public User save (User user) {
        var possibleUser = getByEmail(user.getEmail());
        if (possibleUser != null) {
            throw new DuplicatedTupleException("Usuário já existe!");
        } // alteração na senha...
        encodePassword(user);
        return userRepository.save(user);
    }
}
