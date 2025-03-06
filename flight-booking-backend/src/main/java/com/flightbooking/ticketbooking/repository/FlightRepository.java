package com.flightbooking.ticketbooking.repository;

import com.flightbooking.ticketbooking.model.Flight;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public class FlightRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    /**
     * Finds all flights departing after the given datetime.
     *
     * @param dateTime The datetime to filter flights.
     * @return List of available flights.
     */
    public List<Flight> findAvailableFlights(LocalDateTime dateTime) {
        String sql = """
                     SELECT flightid AS id, 
                            airlinename, 
                            flightnumber, 
                            departureairport, 
                            arrivalairport, 
                            departuretime, 
                            arrivaltime, 
                            totalseats,
                            ticketprice,
                            remainingseats
                     FROM flights 
                     WHERE departuretime > ? 
                     """;

        return jdbcTemplate.query(sql, new Object[]{dateTime}, new BeanPropertyRowMapper<>(Flight.class));
    }

    public List<Flight> findFlightsBetween(String fromAirport, String toAirport, LocalDateTime departureTime) {
        String q = """
                    SELECT flightid AS id,
                            airlinename, 
                            flightnumber,
                            departureairport, 
                            arrivalairport, 
                            departuretime, 
                            arrivaltime, 
                            totalseats,
                            ticketprice,
                            remainingseats
                    FROM flights
                    WHERE departureairport=? AND arrivalairport=? AND departuretime>=? 
                    ORDER BY ticketprice
                    """;
        return jdbcTemplate.query(q,new Object[]{fromAirport,toAirport,departureTime},new BeanPropertyRowMapper<>(Flight.class));
    }

    public List<Flight> findFLightsById(int flightId) {
        String q = """
                SELECT flightid AS id,
                            airlinename, 
                            flightnumber,
                            departureairport, 
                            arrivalairport, 
                            departuretime, 
                            arrivaltime, 
                            totalseats,
                            ticketprice,
                            remainingseats
                    FROM flights
                    WHERE flightid=?
                """;
        return jdbcTemplate.query(q, new Object[]{flightId}, new BeanPropertyRowMapper<>(Flight.class));
    }
}

