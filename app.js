const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

// const errorController = require('./controllers/error');
const mongoConnect = require('./util/database').mongoConnect;
// const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./roots/admin');
const matchRoutes = require('./roots/match');
// const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res, next) => {
//   User.findById("5fba320c83a5399476594bd3")
//     .then(user => {
//       req.user = new User(user.name,user.email,user.cart,user._id); 
//       next();
//     })
//     .catch(err => console.log(err));
    
// });

app.use('/admin',adminRoutes);
app.use(matchRoutes);

// app.use(errorController.get404);

mongoConnect(() => {
    console.log('Connnn');
  app.listen(3000);
});