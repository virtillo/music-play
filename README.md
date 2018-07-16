# Beyond assessment - Music Play

This is a simple page aplication that loads a Youtube Video Chanel list of videos. Every video has its own view where the video can be played. 

The project has been developed from a boilerplate created from React Create App.

There are 2 main routes, managed by React Router Dom:
* / - Main list of videos
* /video/:videoID - specific video page


Functionality is written in vanilla JS with ES6 code.
Styles are written in SCSS and imported into the bundle in main.js.

Technologies/Stack:

* Webpack for bundling
* Babel for ES6
* ESLint for JS style enforcement
* SCSS for styling
* Jest for testing


Folder structure:

* config - Webpack build/bundling set up folder
* public - for all static assets
* scripts - main scripts configuration
* src - source code (Javascript & SCSS )


---
## Minimum requirements to run the project
* node
* yarn or npm

---
## Commands

``` bash
# install dependencies
yarn

# serve with hot reload at localhost:8080
yarn run start

# build for production with minification
yarn run build

# build for production
yarn run build

# run all tests
yarn run test

```


---
## Running the project

First of all, you need to install the required packages:

``` bash
yarn (or npm install) 
```

Run the project with:

``` bash
yarn start (or npm run start)
```

---
## Expected browsers where it will be tested:
* Google Chrome
* Mozilla Firefox
* Internet explorer 11