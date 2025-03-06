package com.flightbooking.ticketbooking.repository;

import com.flightbooking.ticketbooking.model.Seat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class SeatRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    /**
     * Finds all available seats for a given flight ID.
     *
     * @param flightId The flight ID to filter seats.
     * @return List of available seats for the flight.
     */
    public List<Seat> findAvailableSeatsByFlightId(Long flightId) {
        String sql = """
                     SELECT id, 
                            flight_id, 
                            seat_number, 
                            is_booked
                     FROM seats 
                     WHERE flight_id = ?
                     ORDER BY id
                     """;

        return jdbcTemplate.query(sql, new Object[]{flightId}, new BeanPropertyRowMapper<>(Seat.class));
    }
}
