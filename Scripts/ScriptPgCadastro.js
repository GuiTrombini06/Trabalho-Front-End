// Aguarda o carregamento completo da página antes de rodar o script
document.addEventListener("DOMContentLoaded", function () {
    // Captura os elementos de entrada do formulário de cadastro
    const nomeInput = document.getElementById("nome"); // Campo de nome
    const emailInput = document.getElementById("email"); // Campo de email
    const senhaInput = document.getElementById("senha"); // Campo de senha
    const confirmarSenhaInput = document.getElementById("confirmarSenha"); // Campo de confirmação de senha
    const cadastrarBtn = document.getElementById("cadastrarBtn"); // Botão de cadastro
  
    // Adiciona um ouvinte de clique no botão de cadastro
    cadastrarBtn.addEventListener("click", function (e) {
      e.preventDefault(); // Impede o envio padrão do formulário
  
      // Pega os valores digitados e remove espaços em branco
      const nome = nomeInput.value.trim();
      const email = emailInput.value.trim();
      const senha = senhaInput.value.trim();
      const confirmarSenha = confirmarSenhaInput.value.trim();
  
      // Verifica se algum campo está vazio
      if (nome === "" || email === "" || senha === "" || confirmarSenha === "") {
        alert("Por favor, preencha todos os campos."); // Exibe alerta se faltar algo
        return; // Encerra a função
      }
  
      // Verifica se a senha e a confirmação são iguais
      if (senha !== confirmarSenha) {
        alert("As senhas não coincidem."); // Alerta se as senhas forem diferentes
        return;
      }
  
      // Cria um objeto com os dados do usuário
      const usuario = {
        nome,
        email,
        senha,
      };
  
      // Salva o usuário no localStorage com a chave "usuarioLogado"
      localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
  
      // Redireciona para a página "index.html" (ou página de informações)
      window.location.href = "index.html";
    });
  });
  