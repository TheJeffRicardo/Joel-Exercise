const express = require('express');
// route
const router = require('./controller');
// cors
const cors = require('cors');
// port 
const port = parseInt(process.env.PORT) || 3000;
// Express app
const app = express();
// Middleware
const {errorHandling} = require('./middleware/errorHandling');
//
const cookieParser = require('cookie-parser');
/*
express.json: setting the content-type to application/json
bodyParser.urlencoded( {extended: true} ): Object will contain
values of any type instead of just a string
*/

// Handling all errors
app.use(errorHandling)

app.use((req, res, next)=> {
        res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
        res.header("Access-Control-Allow-Credentials", "true")
        res.header("Access-Control-Allow-Methods", "*")
        res.header("Access-Control-Allow-Headers", "*")
        next();
});
app.use(router);
app.use(
    cors(),
    cookieParser(),
    express.json,
    express.urlencoded({extended: false})
)

// Server is running
app.listen(port, ()=> {
    console.log(`Server is running`)
})