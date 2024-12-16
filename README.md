# How to set GoPass

## Downloads
using *Command Prompt* enter
cd C:\ *{Location}*

Setup React Vite - javascript
```
npm create vite@latest
```
Name it **GoPass**

For the front end:
```
npm install react-router-dom
npm install axios
npm install zustand
npm install concurrently --save-dev
```

For the back end:
```
mkdir backend
cd backend
npm init -y
npm install express
npm install express mysql2 cors
npm install dotenv
```
## After the Downloads
unzip the folder, copy the content in the GoPass folder, there should be a promt to replace files, replace them.
Open Xampp and start *apache* and *MySQL*
Import the ***eventmanagement.sql***

## Opening
make sure Xampp, *apache*, and *MySQL* is open with the eventmanager database up

### Use 
cd C:\ *{Location}*
```
npm run start:all
```

### Or
Manual
open cmd
To activate the backend:
```
cd C:\{Location}\backend
node index.js
```

open another window of cmd
To activate the frontend:
```
cd C:\{Location}
npm run dev
```

