package com.lfr.springsecurity.config;

import com.lfr.springsecurity.entities.Role;
import com.lfr.springsecurity.entities.User;
import com.lfr.springsecurity.repository.RoleRepository;
import com.lfr.springsecurity.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Set;

@Configuration
public class AdminUserConfig implements CommandLineRunner {

    private RoleRepository roleRepository;
    private UserRepository userRepository;
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public AdminUserConfig(RoleRepository roleRepository,
                           UserRepository userRepository,
                           BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.roleRepository = roleRepository;
        this.userRepository = userRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @Override
    @Transactional
    public void run(String ... args) throws Exception {
        var roleAdmin = roleRepository.findByName(Role.Values.ADMIN.name());
        var userAdmin = userRepository.findByUsername("LuaComTil");

        userAdmin.ifPresentOrElse(
                user -> {
                    System.out.println("The admin user already exists");
                },
                () -> {
                    var user = new User();
                    user.setUsername("LuaComTil");
                    user.setPassword(bCryptPasswordEncoder.encode("Senha415"));
                    user.setRoles(Set.of(roleAdmin));
                    userRepository.save(user);
                }
        );
    }
}
