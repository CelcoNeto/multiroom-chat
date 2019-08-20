module.exports.inciachat = (application, req, res) => {
  let dadosForm = req.body;
  req.assert("apelido", "Digite um apelido").notEmpty();
  req
    .assert("apelido", "Nome ou apelido deve conter entre 3 e 15 caracteres")
    .len(3, 15);

  let errors = req.validationErrors();

  if (errors) {
    res.render("index", { validacao: errors });
    return;
  }
  application.get("io").emit("msgParaCliente", {
    apelido: dadosForm.apelido,
    mensagem: "acabou de entrar no chat"
  });

  res.render("chat", { dadosForm: dadosForm });
};
