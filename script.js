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

//comentarios da pagina
const formAvaliacoes = document.getElementById('form-mensagem');
const enviarMensagem = document.getElementById('mensagem');
const mensagemEnviada = document.getElementById('mensagens-exibidas');
const dataComentarioUsuario = document.getElementById('data-comentario');

// Quando o formulário for enviado
formAvaliacoes.addEventListener('submit', (event) => {
  event.preventDefault();

  // Pega os valores do formulário
  const usuarioComentou = {
    usuarioComentario: nomeUsuario.value,
    dataComentario: dataComentarioUsuario.value,
    pegarMensagemEnviada: enviarMensagem.value,
    horaComentario: new Date().toLocaleTimeString(),
  };

  // Pega os comentários salvos ou cria um array vazio
  let comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];

  // Adiciona o novo comentário
  comentarios.push(usuarioComentou);

  // Salva os comentários de volta no LocalStorage
  localStorage.setItem('comentarios', JSON.stringify(comentarios));

  // Exibe todos os comentários
  exibirComentarios();

  // Limpa o formulário
  formAvaliacoes.reset();
});

// Função para exibir os comentários
function exibirComentarios() {
  // Pega os comentários salvos
  const comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];

  // Exibe todos os comentários
  mensagemEnviada.innerHTML = comentarios.map(comentario => `
    <p><strong>${comentario.usuarioComentario}</strong> (${comentario.horaComentario}): ${comentario.pegarMensagemEnviada}</p>
  `).join('<hr>');
}

// Exibe os comentários ao carregar a página
exibirComentarios();


const nomeUsuario = document.getElementById("nome");

document.addEventListener("DOMContentLoaded", function () {
    // Obter as referências dos campos de entrada
    const email = document.getElementById("email");
    const telefone = document.getElementById("telefone");
    const limparDados = document.getElementById('limpar')
    // Função para carregar os dados do perfil do localStorage
    function loadProfile() {
        const usuario = JSON.parse(localStorage.getItem("usuario"));
        if (usuario) {
            nomeUsuario.value = usuario.nome || '';
            email.value = usuario.email || '';
            telefone.value = usuario.telefone || '';
        }
    }

    // Função para salvar os dados no localStorage
    function saveProfile() {
        const usuarioAtualizado = {
            nome: nomeUsuario.value,
            email: email.value,
            telefone: telefone.value
        };

        // Salvar os dados no localStorage
        localStorage.setItem("usuario", JSON.stringify(usuarioAtualizado));
        alert("Dados salvos com sucesso!");

        // Exibir os dados salvos no console (para depuração)
        console.log("Dados no localStorage:", localStorage.getItem("usuario"));
    }

    // Carregar os dados do perfil ao carregar a página
    loadProfile();

    // Verificar se o formulário existe antes de adicionar o evento
    const profileForm = document.getElementById("profileModal");
    if (profileForm) {
        profileForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Impede o envio do formulário

            saveProfile();
        });
    } else {
        console.error("Formulário não encontrado!");
    }

    limparDados.addEventListener('click' , ()=>{
    localStorage.removeItem("usuario")
    })
});

const menuToggle = document.getElementById('menu-toggle'); //menu hamburguer
const navMenu = document.querySelector('nav ul'); //navbar

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

const inputFile = document.querySelector("#picture__input");
const pictureImage = document.querySelector(".picture__image");
const pictureImageTxt = "carregar imagem";
const changePictureButton = document.querySelector("#changePictureButton");

pictureImage.innerHTML = pictureImageTxt;

// Função para carregar a imagem salva no Local Storage
function loadSavedImage() {
  const savedImage = localStorage.getItem("savedPicture");
  if (savedImage) {
    const img = document.createElement("img");
    img.src = savedImage;
    img.classList.add("picture__img");

    pictureImage.innerHTML = "";
    pictureImage.appendChild(img);
  } else {
    pictureImage.innerHTML = pictureImageTxt;
  }
}

// Chama a função ao carregar a página
loadSavedImage();

// Evento para alterar a imagem quando o arquivo for selecionado
inputFile.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("picture__img");

      // Salva a imagem no Local Storage
      localStorage.setItem("savedPicture", readerTarget.result);

      pictureImage.innerHTML = "";
      pictureImage.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImage.innerHTML = pictureImageTxt;
    localStorage.removeItem("savedPicture"); // Remove do Local Storage se nenhum arquivo for selecionado
  }
});

// Evento do botão para abrir o seletor de arquivo
changePictureButton.addEventListener("click", function () {
  inputFile.click(); // Simula um clique no input de arquivo
});

