package com.flightbooking.ticketbooking.model;

import jakarta.persistence.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Table(name = "seats")
public class Seat {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seats_id_gen")
    @SequenceGenerator(name = "seats_id_gen", sequenceName = "seats_id_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Long id;


    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "flight_id", nullable = false)
    private Integer flight_id;

    @Column(name = "seat_number", nullable = false, length = 10)
    private String seatNumber;

    @ColumnDefault("false")
    @Column(name = "is_booked")
    private Boolean isBooked;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getFlightId() {
        return flight_id;
    }

    public void setFlightId(Integer flight_id) {
        this.flight_id = flight_id;
    }

    public String getSeatNumber() {
        return seatNumber;
    }

    public void setSeatNumber(String seatNumber) {
        this.seatNumber = seatNumber;
    }

    public Boolean getIsBooked() {
        return isBooked;
    }

    public void setIsBooked(Boolean isBooked) {
        this.isBooked = isBooked;
    }

}