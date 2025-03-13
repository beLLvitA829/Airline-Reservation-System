import { faker } from '@faker-js/faker';

const generateFlightData = () => {
    const today = new Date();
    const flights = [];
    
    for (let i = 0; i < 30; i++) { // Generate flights for the next 30 days
        const futureDate = new Date(today);
        futureDate.setDate(today.getDate() + i);
        const dateString = futureDate.toISOString().split("T")[0];
        
        flights.push(
            { origin: "NYC", destination: "LAX", date: dateString, time: "10:00 AM", price: "$250", availability: "Available", flight_name: faker.airline.airline().name },
            { origin: "NYC", destination: "LAX", date: dateString, time: "2:30 PM", price: "$300", availability: "Limited Seats", flight_name: faker.airline.airline().name },
            { origin: "NYC", destination: "LAX", date: dateString, time: "6:45 PM", price: "$200", availability: "Sold Out", flight_name: faker.airline.airline().name },
            { origin: "SFO", destination: "ORD", date: dateString, time: "9:15 AM", price: "$480", availability: "Available", flight_name: faker.airline.airline().name },
            { origin: "SFO", destination: "ORD", date: dateString, time: "10:30 AM", price: "$480", availability: "Available", flight_name: faker.airline.airline().name },
            { origin: "SFO", destination: "ORD", date: dateString, time: "12:45 PM", price: "$480", availability: "Available", flight_name: faker.airline.airline().name },
            { origin: "SFO", destination: "ORD", date: dateString, time: "6:15 PM", price: "$480", availability: "Available", flight_name: faker.airline.airline().name },
            { origin: "Ottawa", destination: "Toronto", date: dateString, time: "8:15 AM", price: "$600", availability: "Available", flight_name: faker.airline.airline().name },
            { origin: "Ottawa", destination: "Toronto", date: dateString, time: "10:15 AM", price: "$600", availability: "Available", flight_name: faker.airline.airline().name },
            { origin: "Ottawa", destination: "Toronto", date: dateString, time: "12:30 PM", price: "$600", availability: "Available", flight_name: faker.airline.airline().name },
            { origin: "Las Vegas", destination: "NYC", date: dateString, time: "10:45 AM", price: "$280", availability: "Sold Out", flight_name: faker.airline.airline().name },
            { origin: "Las Vegas", destination: "NYC", date: dateString, time: "12:45 PM", price: "$280", availability: "Available", flight_name: faker.airline.airline().name },
            { origin: "Las Vegas", destination: "NYC", date: dateString, time: "2:30 PM", price: "$280", availability: "Available", flight_name: faker.airline.airline().name },
            { origin: "Los Angelas", destination: "Washington DC", date: dateString, time: "7:30 PM", price: "$340", availability: "Available", flight_name: faker.airline.airline().name },
        );
    }
    
    return flights;
};

const flights = generateFlightData();
export const getAvailableFlights = (req, res) => {
    const { origin, destination, date } = req.query;

    if (!origin || !destination || !date) {
        return res.status(400).json({ message: "Origin, destination, and date are required query parameters" });
    }

    const availableFlights = flights.filter(flight => 
        flight.origin.toLowerCase() === origin.toLowerCase() &&
        flight.destination.toLowerCase() === destination.toLowerCase() &&
        flight.date === date
    );

    if (availableFlights.length === 0) {
        return res.status(404).json({ message: "No flights available for the given criteria" });
    }
    return res.status(200).json(availableFlights);
};

