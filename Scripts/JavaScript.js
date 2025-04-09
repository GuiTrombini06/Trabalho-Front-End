// Aguarda o carregamento completo do DOM antes de executar o script
document.addEventListener("DOMContentLoaded", function () {

  // Seleciona os campos de entrada e mensagens de erro
  const email = document.getElementById("email");         // Campo de email do formulário
  const senha = document.getElementById("senha");         // Campo de senha do formulário
  const erroEmail = document.getElementById("erroEmail"); // Elemento para exibir erro do email
  const erroSenha = document.getElementById("erroSenha"); // Elemento para exibir erro da senha

  // Variável usada para saber se o usuário já tentou enviar o formulário
  let tentouEnviar = false;

  // Função para validar os campos do formulário
  function validarCampos() {
    let valido = true; // Assume que os campos estão válidos

    if (tentouEnviar) {
      // Verifica se o campo de email está vazio
      if (email.value.trim() === "") {
        erroEmail.style.display = "block"; // Exibe o erro do email
        valido = false; // Invalida o formulário
      } else {
        erroEmail.style.display = "none"; // Esconde o erro do email
      }

      // Verifica se o campo de senha está vazio
      if (senha.value.trim() === "") {
        erroSenha.style.display = "block"; // Exibe o erro da senha
        valido = false; // Invalida o formulário
      } else {
        erroSenha.style.display = "none"; // Esconde o erro da senha
      }
    }

    return valido; // Retorna se o formulário está válido ou não
  }

  // Adiciona um ouvinte de evento para quando o formulário for enviado
  document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    tentouEnviar = true;    // Marca que o usuário tentou enviar

    // Se os campos forem válidos
    if (validarCampos()) {
      // Salva os dados digitados no localStorage com a chave "usuarioLogado"
      localStorage.setItem("usuarioLogado", JSON.stringify({
        email: email.value,
        senha: senha.value
      }));

      // Redireciona o usuário para a página "Main.html"
      window.location.href = "Main.html";
    }
  });

  // Adiciona eventos nos campos de email e senha para validar enquanto digita
  email.addEventListener("input", () => {
    tentouEnviar = true; // Considera que está tentando enviar ao digitar
    validarCampos();     // Valida os campos em tempo real
  });

  senha.addEventListener("input", () => {
    tentouEnviar = true; // Considera que está tentando enviar ao digitar
    validarCampos();     // Valida os campos em tempo real
  });

});