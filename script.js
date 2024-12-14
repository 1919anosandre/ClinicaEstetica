//horario de funcionamento
function horario_funcionamento() {
    document.addEventListener('DOMContentLoaded', () => {
        const exibir_on_of = document.getElementById('horario-funcionamento');
        // pega o horario local
        const hora = new Date();
        const horarioFuncionamento = hora.getHours();
        //pegar dia 
        const diasFuncionamento = new Date()
        const exibirDias = diasFuncionamento.getDay()

        //verifica o horario de funcionamento da clinica 
        if (horarioFuncionamento >= 8 && horarioFuncionamento <= 18) {
            exibir_on_of.textContent = 'Aberto';
            exibir_on_of.style.color = 'green';
            exibir_on_of.style.fontSize = '1.3rem';
        }
        else {
            exibir_on_of.textContent = 'Fechado';
            exibir_on_of.style.color = 'red';
            exibir_on_of.style.fontSize = '1.3rem';
        } 
        if (exibirDias === 5 || exibirDias === 6) { // Sexta e sábado
            exibir_on_of.textContent = 'Fechado';
            exibir_on_of.style.color = 'red';
            exibir_on_of.style.fontSize = '1.3rem';
            alert('O estabelecimento está fechado. Abre: seg à sex, 08h00 às 18h00');
        }

    })
}
horario_funcionamento()
document.addEventListener('DOMContentLoaded', function () {
    // Recupera mensagens do localStorage e exibe
    const mensagensDisplay = document.getElementById('mensagens-display');
    const mensagens = JSON.parse(localStorage.getItem('mensagens')) || [];

    mensagens.forEach(function (mensagem) {
        const newComment = criarElementoMensagem(mensagem);
        mensagensDisplay.appendChild(newComment);
    });

    // Adiciona o evento de envio do formulário
    document.getElementById('form-mensagem').addEventListener('submit', function (event) {
        event.preventDefault(); // Previne o envio padrão do formulário

        const nome = document.getElementById('nome').value;
        const imagem = document.getElementById('imagem').value;
        const texto = document.getElementById('mensagem').value;
        const dataHora = new Date().toLocaleString();

        // Cria o objeto da mensagem
        const mensagem = { nome, imagem, texto, dataHora };

        // Adiciona a nova mensagem ao localStorage
        mensagens.push(mensagem);
        localStorage.setItem('mensagens', JSON.stringify(mensagens));

        // Cria e exibe o novo comentário
        const newComment = criarElementoMensagem(mensagem);
        mensagensDisplay.appendChild(newComment);

        // Limpa o formulário após o envio
        document.getElementById('nome').value = '';
        document.getElementById('imagem').value = '';
        document.getElementById('mensagem').value = '';
    });

    // Função para criar um elemento de mensagem
    function criarElementoMensagem(mensagem) {
        const commentWrapper = document.createElement('div');
        commentWrapper.classList.add('comment');

        const userImage = document.createElement('img');
        userImage.src = mensagem.imagem;
        userImage.alt = mensagem.nome;
        userImage.style.width = '50px';
        userImage.style.height = '50px';
        userImage.style.borderRadius = '50%';

        const userName = document.createElement('strong');
        userName.textContent = mensagem.nome;

        const messageText = document.createElement('p');
        messageText.textContent = mensagem.texto;

        const timestamp = document.createElement('small');
        timestamp.textContent = `Enviado em: ${mensagem.dataHora}`;

        // Monta o comentário
        commentWrapper.appendChild(userImage);
        commentWrapper.appendChild(userName);
        commentWrapper.appendChild(messageText);
        commentWrapper.appendChild(timestamp);

        return commentWrapper;
    }
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
// Seleciona a container e os cards
const container = document.getElementById('servicos');
const cards = document.querySelectorAll('.card');

// Função para verificar a visibilidade da container e dos cards
const handleScroll = () => {
    const triggerBottom = window.innerHeight * 0.8;

    // Quando a container aparecer na tela, animar ela
    const containerTop = container.getBoundingClientRect().top;
    if (containerTop < triggerBottom) {
        container.classList.add('show');
    }

    // Anima os cards quando eles entram na tela
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        // Se o card está visível, adiciona a classe de animação
        if (cardTop < triggerBottom) {
            card.classList.add('show');
        } else {
            // Se o card não está mais visível, remove a classe de animação
            card.classList.remove('show');
        }
    });
};

// Evento de rolagem para disparar a função
window.addEventListener('scroll', handleScroll);

// Executa ao carregar a página
handleScroll();

// script.js

// Seletores
const usuarioIcon = document.getElementById('usuario');
const modal = document.getElementById('profileModal');
const closeModal = document.getElementById('closeModal');

// Abrir o modal ao clicar na imagem do usuário
usuarioIcon.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Fechar o modal ao clicar no "X"
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fechar o modal ao clicar fora dele
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});
