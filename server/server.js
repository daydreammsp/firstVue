const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const movieRouter = require('./routes/movie.router');
const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');
const cors = require('cors')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(sessionMiddleware);

app.use(passport.initialize());
app.use(passport.session());

app.use('/', movieRouter);

app.use(express.static('build'));

const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
