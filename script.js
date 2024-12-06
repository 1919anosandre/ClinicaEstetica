//horario de funcionamento
function horario_funcionamento(){
document.addEventListener('DOMContentLoaded', ()=>{
    const exibir_on_of = document.getElementById('horario-funcionamento');
// pega o horario local
const hora = new Date();
const horarioFuncionamento = hora.getHours();

//verifica o horario de funcionamento da clinica 
if(horarioFuncionamento >=8 && horarioFuncionamento <=18){
exibir_on_of.textContent = 'Aberto';
exibir_on_of.style.color = 'green';
exibir_on_of.style.fontSize = '1.3rem';
}
else{
exibir_on_of.textContent = 'Fechado';
exibir_on_of.style.color = 'red';
exibir_on_of.style.fontSize = '1.3rem';


}
})
}
horario_funcionamento()

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
