
FROM maven:3.9.5-eclipse-temurin-21-alpine AS build

ENV DATASOURCE_URL='jdbc:postgresql://ep-tiny-cherry-a1vig0gs.ap-southeast-1.aws.neon.tech/flight-db?sslmode=require'
ENV DATASOURCE_USER='flight-db_owner'
ENV DATASOURCE_PASSWORD='rJw5ch0uXmHO'

WORKDIR /app

COPY pom.xml .
RUN #mvn dependency:go-offline


COPY src ./src
RUN mvn package


FROM openjdk:21-slim

WORKDIR /app

COPY --from=build /app/target/flight-ticket-booking-0.0.1-SNAPSHOT.jar .

EXPOSE 8080

ENTRYPOINT ["java","-jar","/app/flight-ticket-booking-0.0.1-SNAPSHOT.jar"]
