var express = require('express');
var app = express();
const PORT = process.env.PORT || 5050
//const {books} = require('./handlers/books');
const { db } = require('./util/admin');

/** Body parser*/
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
/** Body parser*/

app.get('/api/', async (req, res) => {
    res.send('This is my demo project')
});

app.post('/api/graba_alerta/', async (req, res) => {

  const tipo_alerta = req.body.tipoAlerta; 
  const mde_id = req.body.mdeid;
  
  console.log(tipo_alerta);
  console.log(mde_id);
  res.send('Valores registrados con exito!');
});

//app.get('/api/books', books.read);
//app.post('/api/books/:titulo', books);
/*
 0 = martillo
 1 = humo
 2 = temperatura
*/ 
app.post('/eventos/:tipo', async (req, res) => {
    const fecha = new Date();
    fecha.getFullYear();
    
    try {
        let alerta = req.params.tipo;
        let mensaje;
        switch (alerta) {
            case '0':
                mensaje = "martillo";
                break;
            case '1':
                mensaje = "humo";
                break;
            case '2':
                mensaje = "temperatura";
                    break;
            case '3':
                mensaje = "voltaje";
                break;        
            default:
              console.log("Error");
          }    

      const userJson = {
        tipo: mensaje,
        fecha: fecha
      };

      console.log(userJson);

      const usersDb = db.collection('eventos'); 
      const response = await usersDb.add(userJson);
      res.send(response);
    } catch(error) {
      res.send(error);
    }
    
  });
/*
app.get('/api/books/:id', async (req, res) => {
    console.log(req.params.id);
    try {
      const userRef = db.collection("books");
      const response = await userRef.get().doc(req.params.id);
      console.log(response);
      res.send(response.data());
    } catch(error) {
        return res
        .status(500)
        .json({ general: "Something went wrong, please try again"});          
    }
  });
*/
/*
app.get('/api/books/:id', async (req, res) => {
    try {
      const userRef = db.collection("books").doc(req.params.id);
      const response = await userRef.get();
      res.send(response.data());
    } catch(error) {
      res.send(error);
    }
  });
*/
app.listen(PORT, function () {
    console.log(`Demo project at: ${PORT}!`); 
});
