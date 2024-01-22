# Async Race

## <img src="https://raw.githubusercontent.com/antasth/images-for-readme.md/main/AsyncRace/asyncrace1.png" width="30%"></img> <img src="https://raw.githubusercontent.com/antasth/images-for-readme.md/main/AsyncRace/asyncrace2.png" width="30%"></img> <img src="https://raw.githubusercontent.com/antasth/images-for-readme.md/main/AsyncRace/asyncrace3.png" width="30%"></img>

---

[Deploy](https://antasth.github.io/async-race/)

---

## **About the project**

This project was developed as part of the RSSchool frontend course. [Link to task](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/async-race.md). The task was to create SPA to manage the collection of the cars, operate its engines, and show races statistics. The purpose of this assignment was to study communication with a server (fetch, REST API), Async coding / Promises, JS Animations, DOM Api.

## **Features**

1. Garage  
   _The garage contain its name, page number, and the full amount of items in the database (how many car user has in his garage). User is able to create, update, delete a car, and see the list of the cars. Car has only two attributes: "name" and "color". For "delete"-operation car deleted from "garage" table as well as from "winners". User is able to select any color from an RGB-Palette and see the picture of the car colored with the color selected and car's name._
2. Winners  
   _After some car wins it displayed at the "Winners" table. The table is includes the next columns: "№", "Image of the car", "Name of the car", "Wins number", "Best time in seconds" (names of the columns can differ). If the same car wins more than once the number of wins will be incremented while best time will be saved only if it's better than the stored one. User is able to sort cars by wins number and by best time (ASC, DESC)._
3. Race  
   _There is a button to start race. After user clicks this button all the cars on the current page start driving. Also there is a button to reset race. After user clicks this button all the cars return to it's initial places. After some car finishes first user will see the message contains car's name that shows which one has won._
4. Car animation  
   _Near the car's picture there are buttons to start/ stop the car engine. User clicks to the engine start button -> UI is waiting for car's velocity answer -> animate the car and makes another request to drive. In case api returned 500 error car animation will be stopped. When user clicks to the engine stop button -> UI is waiting for answer for stopping engine -> car returned to it's initial place. Start engine button will be disabled in case car is already in driving mode. As well as stop engine button will be disabled when car is on it's initial place._

## **Stack**

- HTML5
- CSS3
- Typescript
- Eslint
- Prettier
- Webpack
