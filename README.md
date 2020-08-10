
![Version](https://img.shields.io/badge/Version-1.0-brightgreen?style=for-the-badge)

# Dispatch Tool

This project is for helping a dispatch team manage their employees and fleet van/truck and any documents that require to be uploaded. This website is designed to be a website where all your information can be accessable to your team. A website thats easy to navigate and get to where you need to be to change information. 

## Installation

To begin open your console of choice and navigate to your desktop.

1) run `git clone https://github.com/Lilkgb/nkgl`.
2) navigate to the new react-template folder by running `cd nkgl`.
3) run `npm install` or `npm i` to install all needed dependencies.
4) depending your text editor run the command to open the files. I use VSC so it would be `code .`.
*Note: The app in it's current state will not start when you run step 5 unless you have setup the .env for firebase.*
5) make sure to have firebase tools installed by running `npm i -g firebase-tools`.

#### To setup firebase.

6) run `touch .env` or `new-item .env`
7) copy this `
REACT_APP_FIREBASE_API_KEY = xxxx
REACT_APP_FIREBASE_AUTH_DOMAIN = xxxx.firebaseapp.com
REACT_APP_FIREBASE_DATABASE_URL = https://xxxx.firebaseio.com
REACT_APP_FIREBASE_PROJECT_ID = xxxx
REACT_APP_FIREBASE_STORAGE_BUCKET = xxxx.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID = xxxx
`
8) paste into `.env` file.
9) proceed to https://www.firebase.com and login and go to your console which appears in the top left corner after you sign in.
10) click on **Add Project** and name it however you would like and proceed through the steps. On **Google Analytics** I select **Use default account**.
11) should land on project overview page. in the middle under **Get Started by adding firebase to your app** select the icon that looks like **</>**.
12) name it what ever you would like. I use the same name as step 10.
13) click the **settings cog** in the top left next to **Project Overview** and click **Project Settings**.
14) Scroll down to **Your apps** and under **firebase SDK snippet** you will see **CDN** and **Config**. Click **Config** and you will see your **firebaseConfig**
15) replace all `x's` with information you recieve from https://www.firebase.com.
16) select `.firebaserc` file below `.env` and rename the **default** with your project ID found in `.env`.
*Note: Sometimes with the *firebaseConfig* will work with `"` like you see in the config given in your firebase console. If not then remove the `"` and it should work. Thats what I had to do.*
17) back in your firebase console. Click **Authentication** on the left. And click on **Set up sign-in method**. Select **Email/Password** and **enable**.
18) click on **Users** in the nav bar on top of the screen. Click **Add User** and put in what email and password you want to use.
19) select **Database** on the left under **Authentication**. Click **Create Database** click on **start in test mode**. Click **next** then **Done**.
20) next to **Databse** on the top it will say **Cloud Firestore** or **Realtime Database**. Make sure you are on **Realtime Database**
21) click on the three vertical dots on the right next to the **+** and **-**. Then click **import JSON**. I have attached a starting JSON file you can import. Click on **Browse** and navigate to the project folder and click on **nkgl-14aoe-export.json** and import.
22) run `firebase init` in terminal. Select what firebase features you would like. I used **Database** and **Hosting**. Click enter on **What file should be used for Databse Rules**. On **Hosting Setup** put **build**.
23) run `npm run start` when you are ready to start a development server.

#### Nothing shows under employees or vans
24) go to your firebase console. Click **Database** on the left. Then make sure you on **Realtime Database** select **Rules** on the top. Make sure it looks like this `{
  /* Visit https://firebase.google.com/docs/database/security to learn more about security rules. */
  "rules": {
    ".read": true,
    ".write": true
  }
}`

## Questions

If you have any questions or concerns please email me at rmcleandev@gmail.com

## License

*This Software is Licensed under the MIT License.*

Copyright (c) 2020 **_Ryan McLean_**

