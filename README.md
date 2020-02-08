# Back-End OmniStack 10 - Rocketseat

This project was developed at rocketseat's OmniStack 10 week. The aim of this project is to develop a platform to search for developers near you by technology, so companies and developers can find people close by, who work with the technologies they seek through the GitHub profile.

[Front-End Web](https://github.com/CarlosValdiero/frontend-web-omniStack10-rocketseat) - Front-end project using ReactJS

[Front-End Mobile](https://github.com/CarlosValdiero/frontend-mobile-omniStack10-rocketseat) - Front-end project using React Native

The motivation to develop this project was to learn about NodeJS with Express.

### Tech

 - NodeJS
 - Express
 - Mongoose
 - Socket io 
 - Axios

### System idea

 - In this system the developer informs which technologies he works with, their location and profile on GitHub.
 - Another developer, or company, looks for developers in your region for a particular technology, and accesses their GitHub profile.

### Installation

Clone the repository with:
```
$ git clone https://github.com/CarlosValdiero/backend-Omnistack10-Rocketseat.git
```
Install all dependencies:
```
$ yarn install or npm install
```
Now it is necessary to put the database URL in a .env file, in my case, I used [MongoDB Atlas](https://www.mongodb.com/cloud/atlas):
```
DATABASE_CONNECTION_STRING = <url>
```
