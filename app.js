const express = require('express');
const createError = require('http-errors');
const morgan = require('morgan');
require('dotenv').config();
const cookieParser=require("cookie-perser");
const { path } = require('express/lib/application');
const app = express();
app.use(express.json());        //recuperer les donnees qui sont envoye dans la requete sous format json
app.use(express.urlencoded({ extended: false }));     //recuperer les donnees qui sont envoye dans la requete sous format urlencoded
app.use(morgan('dev'));
app.use(cookieParser())
app.get('/', async (req, res, next) => {
  res.send({ message: 'Awesome it works 🐻' });
});


app.use('/api', require('./routes/article'));
app.use('/api', require('./routes/categorie'));
app.use('/api', require('./routes/commentaire'));
app.use('/api', require('./routes/utilisateur'));
app.use(express.static(path.join(__dirname,'public')),{index:"index.html"})



app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
