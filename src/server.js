const express = require('express');
//Inyeccion de la dependencia de express
const app = express();
//App que hace la función de servidor
const mongoose = require('mongoose');
//Inyectamos la dependecia de mongoose
const personsRoutes = require('../routes/persons'); //incluimos el router que viene de persons

mongoose.Promise = global.Promise; //Setteamos un valor de mongoose

app.set('view engine', 'ejs');
app.use(express.urlencoded( {extended: false} ));
app.use(personsRoutes);


mongoose.connect(
    `mongodb+srv://root:root@cluster0.wdwzc.mongodb.net/?retryWrites=true&w=majority`,
    {
    useNewUrlParser: true,
    useUnifiedTopology: true
    }
    ); //Codigo de conexión a la base de datos
    
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
console.log("Connected successfully");
}); //Verificación de conectividad a la base de datos


let PORT = process.env.PORT || 3000;
// definición del puerto de escucha

app.listen(PORT, () => {
    console.log('escuchando en el puerto 3000');
});