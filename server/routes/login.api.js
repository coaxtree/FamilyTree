var express = require('express');
var router = express.Router();
var passport = require('passport');
//var controllers = require('.././controllers');
var LocalStrategy   = require('passport-local').Strategy;
var mysql = require('mysql');
var dbconfig = require('.././settings/database');
var connection = mysql.createConnection(dbconfig.connection);
//var AuthMiddleware = require('.././settings/authentication/login.auth');

router.post('/checkemail', function(req, res) {
     /*passport.use(
        new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req ,email, password, done) {*/
            passport.use(new LocalStrategy(function(email,password,done) {

            // find a user whose email is the same as the forms email
            // we are checking to see if the user trying to login already exists
            connection.query("SELECT * FROM LoginDetails WHERE email_id = ?",[email], function(err, user) {
                console.log(err);
                console.log("test");    
                  if (err) {
                res.json({ success: false, message: 'Something went wrong. This error has been logged and will be addressed by our staff. We apologize for this inconvenience!' });
            } else {
                if (user) {
                    res.json({ success: false, message: 'That e-mail is already taken' }); // If user is returned, then e-mail is taken
                } else {
                    res.json({ success: true, message: 'Valid e-mail' }); // If user is not returned, then e-mail is not taken
                }
              
                }
           });
          })
    );
      
    });

module.exports = router;
