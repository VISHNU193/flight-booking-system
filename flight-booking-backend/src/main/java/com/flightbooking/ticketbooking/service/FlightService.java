package com.flightbooking.ticketbooking.service;

import com.flightbooking.ticketbooking.model.Flight;
import com.flightbooking.ticketbooking.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;


@Service
public class FlightService {

    @Autowired
    private FlightRepository flightRepository;

    /**
     * Get all flights available from a specific datetime.
     *
     * @param dateTime The datetime to filter flights.
     * @return List of available flights.
     */
    public List<Flight> getAllFlights(LocalDateTime dateTime) {
        return flightRepository.findAvailableFlights(dateTime);
    }

    public List<Flight> getAvailableFlights(String from, String to, LocalDateTime departureTime) {
        return flightRepository.findFlightsBetween(from, to, departureTime);
    }

    public List<Flight> getAvailableFlightsById(int flightId) {
        return flightRepository.findFLightsById(flightId);
    }
}
