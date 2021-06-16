# Note Taker

## Table of Contents
- [Description](#Description)
- [Screenshots](#Screenshots)
- [Instalation](#Instalation)
- [Usage](#Usage)
- [Technologies Used](#TechnologiesUsed)
- [Test](#Test)



## Description

Create an application that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.

The application’s front end has already been created. I build the back end and connected the two.


* `GET /notes` returns the `notes.html` file.


* `GET *` should return the `index.html` file.

The following API routes should be created:

* `GET /api/notes` reads the `db.json` file and return all saved notes as JSON.

* `POST /api/notes` receives a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

## Screenshots
## Instalation 
*npm install --save
*node server.js
*localhost:3000

## Usage 
This project is intended to be used for note-taking and saving.
## Technologies Used
Node.js, Express

## Test
npm run test
