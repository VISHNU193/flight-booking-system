package com.flightbooking.ticketbooking.model;


import java.time.LocalDateTime;

public class Flight {

    private Integer id;
    private String airlinename;
    private String flightnumber;
    private String departureairport;
    private String arrivalairport;
    private LocalDateTime departuretime;
    private LocalDateTime arrivaltime;
    private Integer totalseats;
    private Double ticketprice;
    private Integer remainingseats;

    public Integer getRemainingseats() {
        return remainingseats;
    }

    public void setRemainingseats(Integer remainingseats) {
        this.remainingseats = remainingseats;
    }

    public Double getTicketprice() {
        return ticketprice;
    }

    public void setTicketprice(Double ticketprice) {
        this.ticketprice = ticketprice;
    }



    // Getters and Setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getAirlinename() {
        return airlinename;
    }

    public void setAirlinename(String airlinename) {
        this.airlinename = airlinename;
    }

    public String getFlightnumber() {
        return flightnumber;
    }

    public void setFlightnumber(String flightnumber) {
        this.flightnumber = flightnumber;
    }

    public String getDepartureairport() {
        return departureairport;
    }

    public void setDepartureairport(String departureairport) {
        this.departureairport = departureairport;
    }

    public String getArrivalairport() {
        return arrivalairport;
    }

    public void setArrivalairport(String arrivalairport) {
        this.arrivalairport = arrivalairport;
    }

    public LocalDateTime getDeparturetime() {
        return departuretime;
    }

    public void setDeparturetime(LocalDateTime departuretime) {
        this.departuretime = departuretime;
    }

    public LocalDateTime getArrivaltime() {
        return arrivaltime;
    }

    public void setArrivaltime(LocalDateTime arrivaltime) {
        this.arrivaltime = arrivaltime;
    }

    public Integer getTotalseats() {
        return totalseats;
    }

    public void setTotalseats(Integer totalseats) {
        this.totalseats = totalseats;
    }
}
