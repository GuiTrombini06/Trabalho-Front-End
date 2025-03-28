document.addEventListener("DOMContentLoaded", function () {
    // Aguarda até que o HTML da página seja totalmente carregado antes de executar o script.

    // Obtendo os elementos do formulário
    const nome = document.getElementById("nome"); // Campo de nome
    const email = document.getElementById("email"); // Campo de e-mail
    const senha = document.getElementById("senha"); // Campo de senha
    const confirmarSenha = document.getElementById("confirmarSenha"); // Campo de confirmação de senha
    const cadastrarBtn = document.getElementById("cadastrarBtn"); // Botão de cadastro

    // Obtendo os elementos para exibir erros
    const erroNome = document.getElementById("erroNome"); // Mensagem de erro do nome
    const erroEmail = document.getElementById("erroEmail"); // Mensagem de erro do e-mail
    const erroSenha = document.getElementById("erroSenha"); // Mensagem de erro da senha
    const erroConfirmarSenha = document.getElementById("erroConfirmarSenha"); // Mensagem de erro da confirmação de senha

    // Função para validar os campos do formulário
    function validarCampos(exibirAlerta = false) {
        let valido = true; // Assume que todos os campos estão corretos

        // Validação do nome (deve ter pelo menos 3 caracteres)
        if (nome.value.trim().length < 3) {
            erroNome.style.display = "block"; // Exibe a mensagem de erro
            valido = false;
        } else {
            erroNome.style.display = "none"; // Esconde a mensagem de erro
        }

        // Validação do e-mail (não pode estar vazio)
        if (email.value.trim() === "") {
            erroEmail.style.display = "block";
            valido = false;
        } else {
            erroEmail.style.display = "none";
        }

        // Validação da senha (deve ter pelo menos 4 caracteres)
        if (senha.value.trim().length < 4) {
            erroSenha.style.display = "block";
            valido = false;
        } else {
            erroSenha.style.display = "none";
        }

        // Validação da confirmação de senha (deve ser igual à senha)
        if (confirmarSenha.value.trim() !== senha.value.trim()) {
            erroConfirmarSenha.style.display = "block";
            if (exibirAlerta) {
                alert("As senhas não coincidem!"); // Exibe um alerta apenas ao tentar enviar o formulário
            }
            valido = false;
        } else {
            erroConfirmarSenha.style.display = "none";
        }

        return valido; // Retorna verdadeiro se todas as validações passarem
    }

    // Adiciona um evento ao formulário para validar os campos ao tentar enviar
    document.getElementById("login").addEventListener("submit", function (event) {
        tentouEnviar = true; // Marca que o usuário tentou enviar o formulário
        if (!validarCampos(true)) {
            event.preventDefault(); // Impede o envio do formulário caso tenha erros
        } else {
            event.preventDefault(); // Impede o envio padrão do formulário
            window.location.href = "index.html"; // Redireciona para outra página se os campos estiverem corretos
        }
    });

    // Adiciona eventos para validar os campos conforme o usuário digita
    nome.addEventListener("input", () => validarCampos()); // Valida ao digitar no campo nome
    senha.addEventListener("input", () => validarCampos()); // Valida ao digitar no campo senha
    email.addEventListener("input", () => validarCampos()); // Valida ao digitar no campo e-mail
    confirmarSenha.addEventListener("input", () => validarCampos()); // Valida ao digitar no campo de confirmação de senha
});