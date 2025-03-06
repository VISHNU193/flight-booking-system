package com.flightbooking.ticketbooking.controller;

import com.flightbooking.ticketbooking.model.Booking;
import com.flightbooking.ticketbooking.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.UUID;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    /**
     * Creates a booking.
     *
     * @param booking The booking details.
     * @return The generated booking ID.
     */
    @PostMapping
    public ResponseEntity<HashMap<String,Integer>> createBooking(@RequestBody Booking booking) {
        try {
            int bookingId = bookingService.createBooking(booking);
            HashMap<String,Integer> response = new HashMap<>();
            response.put("bookingId", bookingId);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/booking/{bookingId}")
    public Booking getBookingById(@PathVariable("bookingId") int bookingId) {
        return bookingService.getBookingById(bookingId);
    }

}
