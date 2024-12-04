import { getFirestore, collection, addDoc, getDocs, Timestamp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyA5c3UxBxCwhzc_8VrRL0Kr5iidhDXuMIc",
    authDomain: "clinica-estetica-484fa.firebaseapp.com",
    projectId: "clinica-estetica-484fa",
    storageBucket: "clinica-estetica-484fa.firebasestorage.app",
    messagingSenderId: "84922827873",
    appId: "1:84922827873:web:a6efc62251e4ea3ed19620"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Funções para autenticação
document.getElementById("signUpBtn").addEventListener("click", signUp);
document.getElementById("signInBtn").addEventListener("click", signIn);

function signIn() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Login bem-sucedido!");
            window.location.href = 'index.html'

        })
        .catch((error) => {
            alert(error.message);
        });
}

function signUp() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA5c3UxBxCwhzc_8VrRL0Kr5iidhDXuMIc`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true
        })
    })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                console.error("Erro:", data.error.message);
                alert(data.error.message);
            } else {
                console.log("Usuário cadastrado com sucesso:", data);
                alert("Cadastro bem-sucedido!");
                window.location.href = 'index.html'
            }
        })
        .catch(error => {
            console.error("Erro na solicitação:", error);
            alert("Ocorreu um erro ao tentar cadastrar o usuário.");

        });

}

// Manipular clique no link "Esqueci minha senha"
document.getElementById("forgotPasswordLink").addEventListener("click", showResetOptions);

function showResetOptions() {
    document.getElementById("resetOptions").style.display = "block";
}

// Opção: Enviar código por e-mail
document.getElementById("resetByEmail").addEventListener("click", () => {
    const email = document.getElementById("email").value;

    if (!email) {
        alert("Por favor, insira o seu e-mail.");
        return;
    }

    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("E-mail de recuperação enviado! Verifique sua caixa de entrada.");
        })
        .catch((error) => {
            console.error("Erro:", error.message);
            alert("Erro ao enviar e-mail de recuperação: " + error.message);
        });
});

// Opção: Enviar código por telefone (via SMS)
document.getElementById("resetByPhone").addEventListener("click", () => {
    const phoneNumber = prompt("Por favor, insira seu número de telefone (com DDD):");

    if (!phoneNumber) {
        alert("Número de telefone é obrigatório para enviar o código.");
        return;
    }

    // Simula envio de SMS (Firebase Auth requer configuração de verificação por telefone)
    // Aqui você deve integrar o Firebase Authentication com a opção de SMS:
    // https://firebase.google.com/docs/auth/web/phone-auth
    alert(`Um código de verificação será enviado para o número: ${phoneNumber}`);
});

// Inicializando o Firebase Firestore
const db = getFirestore(app);

// Referências do formulário e do elemento para exibir os comentários
const form = document.getElementById("form-mensagem");
const mensagensDisplay = document.getElementById("mensagens-display");

// Função para enviar o comentário ao Firestore
form.addEventListener("submit", async (e) => {
    e.preventDefault();  // Previne o comportamento padrão do formulário

    // Captura os dados do formulário
    const mensagem = document.getElementById("mensagem").value;
    const servico = document.getElementById("servico").value;
    const dataServico = document.getElementById("data").value;

    if (mensagem.trim() === "" || !servico || !dataServico) {  // Verifica se todos os campos estão preenchidos
        alert("Por favor, preencha todos os campos!");
        return;
    }

    try {
        // Envia o comentário para o Firestore
        await addDoc(collection(db, "comentarios"), {
            comentario: mensagem,
            servico: servico,
            dataServico: dataServico, // A data do serviço fornecida pelo usuário
            data: Timestamp.now(), // Adiciona a data e hora do comentário
            usuario: auth.currentUser ? auth.currentUser.email : "Anônimo", // Usuário logado (se houver)
        });

        alert("Comentário enviado com sucesso!");
        form.reset(); // Limpa o formulário após o envio

        // Atualiza a lista de comentários exibidos
        exibirComentarios();
    } catch (error) {
        console.error("Erro ao enviar comentário:", error);
        alert("Erro ao enviar comentário. Tente novamente.");
    }
});

// Função para exibir os comentários no Firestore
async function exibirComentarios() {
    // Limpa a seção onde os comentários serão exibidos
    mensagensDisplay.innerHTML = "";

    try {
        // Faz a leitura dos comentários no Firestore
        const querySnapshot = await getDocs(collection(db, "comentarios"));

        // Para cada comentário, criamos um elemento HTML para exibi-lo
        querySnapshot.forEach((doc) => {
            const { comentario, servico, dataServico, data, usuario } = doc.data();
            const dataFormatada = data.toDate().toLocaleString(); // Formata a data do comentário
            const dataServicoFormatada = new Date(dataServico).toLocaleDateString(); // Formata a data do serviço

            // Cria um div para cada comentário
            const comentarioDiv = document.createElement("div");
            comentarioDiv.classList.add("comentario-item");
            comentarioDiv.innerHTML = `
                <p><strong>Comentário:</strong> ${comentario}</p>
                <p><strong>Serviço:</strong> ${servico}</p>
                <p><strong>Data do Serviço:</strong> ${dataServicoFormatada}</p>
                <p><strong>Usuário:</strong> ${usuario}</p>
                <small><em>Postado em: ${dataFormatada}</em></small>
                <hr>
            `;

            // Adiciona o comentário à página
            mensagensDisplay.appendChild(comentarioDiv);
        });
    } catch (error) {
        console.error("Erro ao buscar comentários:", error);
    }
}

// Chama a função para exibir os comentários assim que a página carregar
window.onload = exibirComentarios;