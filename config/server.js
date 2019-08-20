//Importar o módulo express
const express = require("express");
//Importar o módulo consign
const consign = require("consign");
//Importar o body-parser
const bodyParser = require("body-parser");
//Importar express-validator
const expressValidator = require("express-validator");
//Inicializando a variavel do express/
const app = express();
//configurar variáveis de views e engine
app.set("view engine", "ejs");
app.set("views", "./app/views");
//Configurar middlewares
app.use(express.static("./app/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
//Configurar o consign para autoload
consign()
  .include("app/routes")
  .then("app/models")
  .then("app/controllers")
  .into(app);

//Exportar o módulo app
module.exports = app;
