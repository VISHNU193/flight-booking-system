package com.flightbooking.ticketbooking.controller;


import com.flightbooking.ticketbooking.model.User;
import com.flightbooking.ticketbooking.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public String createUser(@RequestBody User user) {
        int result = userRepository.save(user);
        return result == 1 ? "User added successfully" : "Failed to add user";
    }
}
