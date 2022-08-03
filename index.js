const express = require('express');
const app = express();
const morgan = require('morgan');


app.set('port', process.env.PORT || 8080);
app.set('json spaces', 2);


app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use('/api/contactos', require('./rutas/contactos'));


app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
}
)