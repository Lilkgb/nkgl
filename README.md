
![Version](https://img.shields.io/badge/Version-1.0-brightgreen?style=for-the-badge)

# Welcome to my React Template

This is a React Template built on top of npx create-react-app. This template includes many more dependencies and little to no set required to use redux and firebase database

## Installation

To begin open your console of choice and navigate to your desktop.

1) run `git clone https://github.com/Lilkgb/React-Template`
2) navigate to the new react-template folder by running `cd react-template`
3) run `npm install` or `npm i` to install all needed dependencies
4) depending your text editor run the command to open the files. I use VSC so it would be `code .`
5) run `npm run start` when you are ready to start a development server

#### If you want to use firebase then continue below

6) run `touch .env`
7) copy this `
REACT_APP_FIREBASE_API_KEY = "xxxx"
REACT_APP_FIREBASE_AUTH_DOMAIN = "xxxx.firebaseapp.com"
REACT_APP_FIREBASE_DATABASE_URL = "https://xxxx.firebaseio.com"
REACT_APP_FIREBASE_PROJECT_ID = "xxxx"
REACT_APP_FIREBASE_STORAGE_BUCKET = "xxxx.appspot.com"
REACT_APP_FIREBASE_MESSAGING_SENDER_ID = "xxxx"
`
8) paste into `.env` file
9) replace all `x's` with information you recieve from https://www.firebase.com
10) uncomment line 2 and line 5 in `react-template/src/actions/index.js` to activate firebase in your project

## Questions

If you have any questions or concerns please email me at rmcleandev@gmail.com

## License

*This Software is Licensed under the MIT License.*

Copyright (c) 2020 **_Ryan McLean_**

