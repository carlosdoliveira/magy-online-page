// Exemplo de script para validação do formulário
document.querySelector('form').addEventListener('submit', function (e) {
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmar-senha').value;

    if (senha !== confirmarSenha) {
        e.preventDefault();
        alert('As senhas não coincidem!');
    }
});

// Validação e envio do formulário de criação de personagem
document.getElementById('character-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    // Captura dos valores do formulário
    const nomePersonagem = document.getElementById('nome-personagem').value;
    const classePersonagem = document.getElementById('classe-personagem').value;

    // Validação simples
    if (!nomePersonagem || !classePersonagem) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Exibição dos dados (simulação de envio)
    console.log('Personagem Criado:');
    console.log('Nome:', nomePersonagem);
    console.log('Classe:', classePersonagem);

    // Redirecionamento ou outra ação após o cadastro
    alert('Personagem criado com sucesso!');
    window.location.href = 'index.html'; // Redireciona para a página inicial
});

// Validação e simulação de login
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    // Captura dos valores do formulário
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Validação simples
    if (!email || !senha) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Simulação de login bem-sucedido
    console.log('Login realizado com sucesso:');
    console.log('E-mail:', email);
    console.log('Senha:', senha);

    // Redirecionamento após o login
    alert('Login realizado com sucesso!');
    window.location.href = 'index.html'; // Redireciona para a página inicial
});