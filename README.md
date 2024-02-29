# Donation Application

React-Enhanced Crisis Management System

## Introduction

Welcome to my donation management application! My project aims to streamline the process of managing donations through a user-friendly and efficient web application built using React.js.

The heart of the application lies in its ability to connect to a server and retrieve data from a MongoDB database in real-time, ensuring that users always have access to the latest donation information.

The application features a well-defined set of routes that guide users through different sections, including displaying all donations, viewing specific donations, and creating new donations.

## Features

- Display all donations and the amount
- Find donation by id and then can Edit \ Delete the found donation
- Create a new donation

## Before you start

1. [x] Download the code from Git-Hub : https://github.com/eliyasamary/donation-a
2. [x] Navigate to the project directory and start the app using the following commands in the terminal:

- `$npm install`
- `$npm run start`

## How to Use

1. ### **Retrieve all donations:**
   - Route: "/" or "/allItems"
   - Page: All Donations Page
   - Summary: The home page serves as the entry point to the application. It displays a list of all donations along with their corresponding amounts. Users can quickly glance at the donations made and their respective amounts
2. ### **Retrieve a specific donation by ID:**
   - Route: "/item"
   - Page: Specific Donation Page
   - Summary: The Specific Donation page allows users to find a donation by its unique identifier (ID). Once found, users can perform actions such as editing or deleting the donation. This page provides a focused view for managing individual donations effectively.
3. ### **Create a new donation:**
   - Route: "/newItem"
   - Page: New Donation Page
   - Summary: The New Donation page facilitates the creation of a new donation. Users can input relevant information such as the donor's details and the donation amount to add a new donation to the database.
