// Este evento garante que o script só será executado após o carregamento completo do HTML.
// É uma boa prática para evitar erros de 'elemento não encontrado'.
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona o formulário de login pelo seu ID.
    // Usamos 'const' porque o valor desta variável (o formulário) não mudará.
    const loginForm = document.getElementById('login-form');

    // Verifica se o formulário de login realmente existe na página atual.
    // Isso evita erros em páginas que não têm o formulário (como a Home, Trilhas, etc.).
    if (loginForm) {
        
        // Adiciona um "ouvinte de eventos" ao formulário.
        // Ele vai "escutar" pelo evento 'submit', que ocorre quando o usuário clica no botão de entrar.
        loginForm.addEventListener('submit', (event) => {
            
            // event.preventDefault() é muito importante.
            // Ele impede o comportamento padrão do formulário, que é recarregar a página.
            // Como este é um projeto front-end, não queremos que a página recarregue.
            event.preventDefault();

            // Pega os valores digitados pelo usuário nos campos de email e senha.
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Simula uma resposta do sistema.
            // Em um projeto real, aqui você enviaria os dados para um back-end para verificação.
            // Como é um MVP front-end, apenas exibimos um alerta.
            alert(`Login simulado!\n\nEmail: ${email}\n\nFuncionalidade de back-end não implementada neste MVP.`);

            // Limpa os campos do formulário após o envio.
            loginForm.reset();
        });
    }

});