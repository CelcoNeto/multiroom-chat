//Importar as configurações de servidor
const app = require("./config/server");
//Parametrizar a porta de escuta
const server = app.listen(3000, (req, res) => {
  console.log("Servidor online");
});

const io = require("socket.io").listen(server);
app.set("io", io);
//Criar a conexão por WebSocket
io.on("connection", function(socket) {
  console.log("Usuario conectou");

  socket.on("disconnect", function() {
    console.log("Usuário desconectou");
  });

  socket.on("msgParaServidor", function(data) {
    //diálogos
    socket.emit("msgParaCliente", {
      apelido: data.apelido,
      mensagem: data.mensagem
    });

    socket.broadcast.emit("msgParaCliente", {
      apelido: data.apelido,
      mensagem: data.mensagem
    });
  });
});
