# MERN Register App

This is a full-stack user registration system built with React, Node.js, Express, and MongoDB.

## Project Structure

The project has two main folders:

- client: React + Vite (User Interface)
- server: Node.js + Express + MongoDB (API and database)

## How to Run This Project

### Server Setup

Go to the Server folder:

    cd Server

Install dependencies:

    npm install

Create a `.env` file in the backend folder with the following content:

    MONGO_URI=your_mongo_connection_string

Start the Server server:

    npm start

### Client Setup

Go to the Client folder:

    cd Client

Install dependencies:

    npm install

Start the development server:

    npm run dev

## Features

- Header Footer and Content
- User login & registration form (React)
- Protected route
- Data saved to MongoDB
- Backend built with Express
- Connected Client and Server

## Environment Variables

You need a `.env` file in the `backend/` folder with the following:

    MONGO_URI=your_mongodb_uri

An example file `.env.example` is included.
# Login-ProtectedRoute
