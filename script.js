
document.addEventListener('DOMContentLoaded', function () {
    // Recupera mensagens do localStorage e exibe
    const mensagensDisplay = document.getElementById('mensagens-display');
    const mensagens = JSON.parse(localStorage.getItem('mensagens')) || [];

    mensagens.forEach(function (mensagem) {
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.textContent = mensagem;
        mensagensDisplay.appendChild(newComment);
    });

    // Adiciona o evento de envio do formulário
    document.getElementById('form-mensagem').addEventListener('submit', function (event) {
        event.preventDefault(); // Previne o envio padrão do formulário

        // Obtém a mensagem do textarea
        const mensagem = document.getElementById('mensagem').value;

        // Adiciona a nova mensagem ao localStorage
        mensagens.push(mensagem);
        localStorage.setItem('mensagens', JSON.stringify(mensagens));

        // Cria um novo div para exibir a mensagem
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.textContent = mensagem;

        // Anexa o novo comentário à seção de exibição
        mensagensDisplay.appendChild(newComment);

        // Limpa o textarea após o envio
        document.getElementById('mensagem').value = '';
    });
});

let currentFeedbackIndex = 0;
const feedbacks = document.querySelectorAll('.feedback');

function showFeedback(index) {
    feedbacks.forEach((feedback, i) => {
        feedback.style.display = (i === index) ? 'block' : 'none';
    });
}

function changeFeedback(direction) {
    currentFeedbackIndex += direction;
    if (currentFeedbackIndex < 0) {
        currentFeedbackIndex = feedbacks.length - 1; // Volta para o último feedback
    } else if (currentFeedbackIndex >= feedbacks.length) {
        currentFeedbackIndex = 0; // Volta para o primeiro feedback
    }
    showFeedback(currentFeedbackIndex);
}

// Função para iniciar a troca automática de feedbacks
function startFeedbackRotation() {
    setInterval(() => {
        changeFeedback(1); // Muda para o próximo feedback
    }, 5000); // 5000 milissegundos = 5 segundos
}

// Exibe o primeiro feedback ao carregar a página
showFeedback(currentFeedbackIndex);

// Inicia a rotação automática de feedbacks
startFeedbackRotation();