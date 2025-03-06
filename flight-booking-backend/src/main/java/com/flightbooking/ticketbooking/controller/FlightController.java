package com.flightbooking.ticketbooking.controller;


import com.flightbooking.ticketbooking.service.FlightService;
import com.flightbooking.ticketbooking.model.Flight;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.List;

@RestController
public class FlightController {
    @Autowired
    private FlightService flightService;

    @GetMapping("/flights/all")
    public List<Flight> getAvailableFlights(
            @RequestParam("dateTime") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime dateTime) {

        return flightService.getAllFlights(dateTime);
    }

    @GetMapping("/flights/available")
    public List<Flight> getAvailableFlights(
            @RequestParam("departureAirport") String departureAirport,
            @RequestParam("arrivalAirport") String arrivalAirport,
            @RequestParam("departureTime") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime departureTime

    ){
        return flightService.getAvailableFlights(departureAirport,arrivalAirport,departureTime);
    }

    @GetMapping("/flights/availableById")
    public List<Flight> getAvailableFlights(
            @RequestParam("id") int flightId){
        return flightService.getAvailableFlightsById(flightId);
    }
}
