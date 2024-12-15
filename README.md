# How to set this up

Open Xampp and start apache and MySQL
Import the eventmanagement.sql

using Command Prompt enter
cd C:\{Location}


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


## After Setup
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

