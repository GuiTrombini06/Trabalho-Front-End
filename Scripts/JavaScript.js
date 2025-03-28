// Aguarda o carregamento completo da página antes de executar o script
document.addEventListener("DOMContentLoaded", function () {

  // Obtendo os elementos do formulário
  const email = document.getElementById("email"); // Campo de e-mail
  const senha = document.getElementById("senha"); // Campo de senha
  const entrarBtn = document.getElementById("entrarBtn"); // Botão de entrar
  const erroEmail = document.getElementById("erroEmail"); // Mensagem de erro do e-mail
  const erroSenha = document.getElementById("erroSenha"); // Mensagem de erro da senha

  let tentouEnviar = false; // Variável para rastrear se o usuário já tentou enviar o formulário

  function validarCampos() {

    let valido = true; // Assume que os campos são válidos por padrão

    // Só exibe os erros se o usuário já tentou enviar o formulário
    if (tentouEnviar) {

      // Verifica se o campo de e-mail está vazio
      if (email.value.trim() === "") {
        erroEmail.textContent = "O e-mail é obrigatório!"; // Define a mensagem de erro
        erroEmail.style.display = "block"; // Exibe a mensagem de erro
        valido = false; // Indica que há erro no formulário
      } else {
        erroEmail.style.display = "none"; // Oculta a mensagem de erro se o campo estiver preenchido
      }

      // Verifica se a senha tem pelo menos 4 caracteres
      if (senha.value.trim().length < 4) {
        erroSenha.style.display = "block"; // Exibe a mensagem de erro
        valido = false; // Indica que há erro no formulário
      } else {
        erroSenha.style.display = "none"; // Oculta a mensagem de erro se o campo estiver correto
      }

    }

    // Habilita ou desabilita o botão "Entrar" com base na validade dos campos
    entrarBtn.disabled = !valido;

    return valido; // Retorna verdadeiro se tudo estiver correto
  }

  // Evento para processar o envio do formulário
  document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {
      tentouEnviar = true; // Marca que o usuário tentou enviar
      if (!validarCampos()) {
        event.preventDefault(); // Impede o envio do formulário se houver erro
      } else {
        event.preventDefault(); // Impede o envio padrão
        window.location.href = "Main.html"; // Redireciona para outra página se os campos estiverem corretos
      }
    });

  // Adiciona eventos para validar os campos conforme o usuário digita
  email.addEventListener("input", validarCampos);
  senha.addEventListener("input", validarCampos);
});