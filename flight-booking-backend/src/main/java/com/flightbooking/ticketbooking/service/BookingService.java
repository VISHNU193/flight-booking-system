package com.flightbooking.ticketbooking.service;

import com.flightbooking.ticketbooking.model.Booking;
import com.flightbooking.ticketbooking.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    /**
     * Creates a booking and returns the generated booking ID.
     *
     * @param booking The booking details.
     * @return The booking ID.
     */
    public int createBooking(Booking booking) {
        return bookingRepository.createBooking(booking);
    }

    public Booking getBookingById(int bookingId) {
        return bookingRepository.getBookingById(bookingId);
    }
}
