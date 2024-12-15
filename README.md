# How to set GoPass

## Downloads
using Command Prompt enter
cd C:\{Location}

Setup React Vite - javascript
```
npm create vite@latest
```
Name it GoPass

For the front end:
```
npm install react-router-dom
npm install axios
```

For the back end:
```
mkdir backend
cd backend
npm init -y
npm install express
npm install express mysql2 cors
```
## After Downloading all the dependencies
unpack the go pass zip in the folder, if there's overlap, replace all.
Open Xampp and start apache and MySQL
Import the eventmanagement.sql

## Opening
make sure Xampp, apache, and MySQL is open with the eventmanager database up

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

