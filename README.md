## AIRLINE RESERVATION API
 ### How to run Server
 - Install the required dependecies by running the following command
 - `npm install` 
 - Run the following command to start the server once all dependencies are installed
 - `npm run dev`
 - The server runs on port 3000

 ### Endpoints
 The API endpoints to use are
 `http://localhost:3000/flights/search?origin=${origin}&destination=${destination}&date=${date}`
 ### Things to NOTE
 - The server uses memory storage that is an array of flights generation by this function
 ```javascript
    const generateFlightData = () => {
    const today = new Date();
    const flights = [];
    ...
 ```

 