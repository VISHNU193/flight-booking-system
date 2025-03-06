package com.flightbooking.ticketbooking.repository;
import com.flightbooking.ticketbooking.model.Booking;
import com.flightbooking.ticketbooking.model.Flight;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.*;
import java.util.Arrays;
import java.util.UUID;

@Repository
public class BookingRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public int createBooking(Booking booking) {
        String sql = """
                INSERT INTO bookings_1 (flight_id, passenger_count, passengers, selected_seats, trip_type, 
                                        from_location, to_location, departure_date, return_date, promo_code, 
                                        payment_type, status, created_at, updated_at) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) 
                RETURNING booking_id
                """;


        KeyHolder keyHolder = new GeneratedKeyHolder();

        jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setObject(1, booking.getFlightId()); // UUID handling
            ps.setInt(2, booking.getPassengerCount());
            ps.setArray(3, connection.createArrayOf("VARCHAR", booking.getPassengers().toArray())); // Handle array
            ps.setArray(4, connection.createArrayOf("VARCHAR", booking.getSelectedSeats().toArray())); // Handle array
            ps.setString(5, booking.getTripType());
            ps.setString(6, booking.getFromLocation());
            ps.setString(7, booking.getToLocation());
            ps.setTimestamp(8, booking.getDepartureDate());
            ps.setTimestamp(9, booking.getReturnDate());
            ps.setString(10, booking.getPromoCode());
            ps.setString(11, booking.getPaymentType());
            ps.setString(12, booking.getStatus());
            ps.setTimestamp(13, new Timestamp(System.currentTimeMillis())); // created_at
            ps.setTimestamp(14, new Timestamp(System.currentTimeMillis())); // updated_at
            return ps;
        }, keyHolder);

        String updateSeats = """
                UPDATE seats SET is_booked=true WHERE flight_id = ? AND seat_number = ? 
                """;
        for (String seatNumber : booking.getSelectedSeats()) {
            jdbcTemplate.update(updateSeats, booking.getFlightId(),seatNumber);
        }

        String updateAvailableSeats = """
                UPDATE flights
                SET remainingseats = totalseats - (
                    SELECT COUNT(*)\s
                    FROM seats\s
                    WHERE seats.flight_id = flights.flightid AND seats.is_booked = true
                )
                WHERE flightid = ?
                
                """;
        jdbcTemplate.update(updateAvailableSeats, booking.getFlightId());
        return (int) keyHolder.getKeys().get("booking_id");
    }

//    public Booking getBookingById(int bookingId) {
//        String sql = "SELECT * FROM bookings_1 WHERE booking_id = ?";
//        return jdbcTemplate.queryForObject(sql, new Object[]{bookingId}, new BeanPropertyRowMapper<>(Booking.class));
//    }

    private static final class BookingRowMapper implements RowMapper<Booking> {
        @Override
        public Booking mapRow(ResultSet rs, int rowNum) throws SQLException {
            Booking booking = new Booking();
            booking.setBookingId(rs.getInt("booking_id"));
            booking.setFlightId(rs.getInt("flight_id"));
            booking.setPassengerCount(rs.getInt("passenger_count"));

            // Convert PgArray to List<String> for passengers
            Array passengersArray = rs.getArray("passengers");
            if (passengersArray != null) {
                String[] passengers = (String[]) passengersArray.getArray();
                booking.setPassengers(Arrays.asList(passengers));
            }

            // Convert PgArray to List<String> for selected seats
            Array selectedSeatsArray = rs.getArray("selected_seats");
            if (selectedSeatsArray != null) {
                String[] selectedSeats = (String[]) selectedSeatsArray.getArray();
                booking.setSelectedSeats(Arrays.asList(selectedSeats));
            }

            booking.setTripType(rs.getString("trip_type"));
            booking.setFromLocation(rs.getString("from_location"));
            booking.setToLocation(rs.getString("to_location"));
            booking.setDepartureDate(rs.getTimestamp("departure_date"));
            booking.setReturnDate(rs.getTimestamp("return_date"));
            booking.setPromoCode(rs.getString("promo_code"));
            booking.setPaymentType(rs.getString("payment_type"));
            booking.setStatus(rs.getString("status"));
//            booking.setCreatedAt(rs.getTimestamp("created_at"));
//            booking.setUpdatedAt(rs.getTimestamp("updated_at"));
            return booking;
        }
    }

    /**
     * Fetch booking by booking_id
     * @param bookingId
     * @return Booking object
     */
    public Booking getBookingById(int bookingId) {
        String sql = "SELECT * FROM bookings_1 WHERE booking_id = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{bookingId}, new BookingRowMapper());
    }
}

