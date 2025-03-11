School Management API
This project is a Node.js-based REST API for managing school data, built using Express.js and MySQL. It allows users to:

Add new schools with details such as name, address, latitude, and longitude.
Retrieve a list of schools sorted by proximity to a given location using the Haversine formula.
Features:
✅ RESTful API endpoints
✅ MySQL database integration
✅ Location-based sorting using the Haversine formula
✅ Input validation and error handling

Endpoints:
POST /api/addSchool – Add a new school
GET /api/listSchools?latitude={lat}&longitude={lon} – Get schools sorted by proximity
Tech Stack:
Node.js
Express.js
MySQL
Aiven.io (for cloud-hosted database)