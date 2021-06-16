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
* ![Screen Shot 2021-06-16 at 8 32 32 AM](https://user-images.githubusercontent.com/79331882/122223149-ecdd6480-ce80-11eb-9d13-89ca651fcec6.png)


* `GET *` should return the `index.html` file.
* ![Screen Shot 2021-06-16 at 8 33 09 AM](https://user-images.githubusercontent.com/79331882/122223199-f5ce3600-ce80-11eb-8adc-bc93e2d6c439.png)


The following API routes should be created:

* `GET /api/notes` reads the `db.json` file and return all saved notes as JSON.

* `POST /api/notes` receives a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

## Screenshots
![Screen Shot 2021-06-16 at 8 32 32 AM](https://user-images.githubusercontent.com/79331882/122223233-fcf54400-ce80-11eb-8c4e-b7d62ec66c19.png)
![Screen Shot 2021-06-16 at 8 33 09 AM](https://user-images.githubusercontent.com/79331882/122223247-fff03480-ce80-11eb-8e9c-e135f864cfeb.png)

## Instalation 
* npm install --save
* node server.js
* localhost:3000

### [Deployed Application on Heroku](https://notetaker1111111111.herokuapp.com/)

## Usage 
This project is intended to be used for note-taking and saving.
## Technologies Used
Node.js, Express

## Test
npm run test
