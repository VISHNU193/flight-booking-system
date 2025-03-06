package com.flightbooking.ticketbooking.service;

import com.flightbooking.ticketbooking.model.Seat;
import com.flightbooking.ticketbooking.repository.SeatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SeatService {

    @Autowired
    private SeatRepository seatRepository;

    public List<Seat> getAvailableSeatsByFlightId(Long flightId) {
        return seatRepository.findAvailableSeatsByFlightId(flightId);
    }
}
