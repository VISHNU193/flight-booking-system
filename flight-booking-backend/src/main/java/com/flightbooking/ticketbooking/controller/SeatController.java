package com.flightbooking.ticketbooking.controller;



import com.flightbooking.ticketbooking.model.Seat;
import com.flightbooking.ticketbooking.service.SeatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

@RestController
public class SeatController {

//    @GetMapping("/api/seats")
//    public List<Map<String, String>> getSeats() {
//        return Arrays.asList(
//                Map.of("number", "A1", "status", "free"),
//                Map.of("number", "A2", "status", "booked"),
//                Map.of("number", "A3", "status", "free"),
//                Map.of("number", "A4", "status", "booked"),
//                Map.of("number", "A5", "status", "free"),
//                Map.of("number", "A6", "status", "free"),
//                Map.of("number", "B1", "status", "booked"),
//                Map.of("number", "B2", "status", "free"),
//                Map.of("number", "B3", "status", "booked"),
//                Map.of("number", "B4", "status", "free"),
//                Map.of("number", "C1", "status", "free"),
//                Map.of("number", "C2", "status", "booked"),
//                Map.of("number", "C3", "status", "free"),
//                Map.of("number", "C4", "status", "free"),
//                Map.of("number", "C5", "status", "booked"),
//                Map.of("number", "C6", "status", "free"),
//                Map.of("number", "D1", "status", "booked"),
//                Map.of("number", "D2", "status", "free"),
//                Map.of("number", "D3", "status", "booked"),
//                Map.of("number", "D4", "status", "free"),
//                Map.of("number", "D5", "status", "free"),
//                Map.of("number", "D6", "status", "booked"),
//                Map.of("number", "E1", "status", "free"),
//                Map.of("number", "E2", "status", "free"),
//                Map.of("number", "E3", "status", "booked"),
//                Map.of("number", "E4", "status", "free"),
//                Map.of("number", "E5", "status", "booked"),
//                Map.of("number", "E6", "status", "free"),
//                Map.of("number", "F1", "status", "booked"),
//                Map.of("number", "F2", "status", "free"),
//                Map.of("number", "F3", "status", "free"),
//                Map.of("number", "F4", "status", "booked"),
//                Map.of("number", "F5", "status", "free"),
//                Map.of("number", "F6", "status", "booked"),
//                Map.of("number", "G1", "status", "free"),
//                Map.of("number", "G2", "status", "booked"),
//                Map.of("number", "G3", "status", "free"),
//                Map.of("number", "G4", "status", "booked"),
//                Map.of("number", "G5", "status", "free"),
//                Map.of("number", "G6", "status", "free"),
//                Map.of("number", "H1", "status", "booked"),
//                Map.of("number", "H2", "status", "free"),
//                Map.of("number", "H3", "status", "booked"),
//                Map.of("number", "H4", "status", "free"),
//                Map.of("number", "H5", "status", "free"),
//                Map.of("number", "H6", "status", "booked"),
//                Map.of("number", "I1", "status", "free"),
//                Map.of("number", "I2", "status", "free"),
//                Map.of("number", "I3", "status", "booked"),
//                Map.of("number", "I4", "status", "free"),
//                Map.of("number", "I5", "status", "free"),
//                Map.of("number", "I6", "status", "free")
//        );
//    }

    @Autowired
    private SeatService seatService;

    @GetMapping("/api/available-seats/{flightId}")
    public List<Seat> getAvailableSeats(@PathVariable Long flightId) {
        return seatService.getAvailableSeatsByFlightId(flightId);
    }
}
