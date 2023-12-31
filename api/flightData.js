import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getAllFlights = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/flights`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getSingleFlight = (flightId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/flights/${flightId}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createFlightBooking = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/flight_bookings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateFlightBooking = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/flight_bookings/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    // .then((response) => response.json())
    .then(resolve)
    .catch(reject);
  // .then((data) => resolve(data))
  // .catch(reject);
});

const deleteFlightBooking = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/flight_bookings/${firebaseKey}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(reject);
});

const getSingleBooking = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/flight_bookings/${id}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getFlightsByDeparture = (departureId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/flights?departure_airport_id=${departureId}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export {
  getAllFlights,
  getSingleFlight,
  updateFlightBooking,
  deleteFlightBooking,
  createFlightBooking,
  getSingleBooking,
  getFlightsByDeparture,
};
