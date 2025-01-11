import { getFirestore, collection, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";

// Configuração do Firebase
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
const db = getFirestore(app);
const auth = getAuth(app);

// Referências do DOM
const form = document.getElementById("form-agendamento");

// Verifica se o usuário está autenticado
onAuthStateChanged(auth, (user) => {
    if (!user) {
        alert("Você precisa estar logado para agendar um serviço.");
        form.style.display = "none"; // Oculta o formulário se o usuário não estiver autenticado
    } else {
        form.style.display = "block"; // Mostra o formulário se o usuário estiver autenticado

        // Lidar com o envio do formulário
        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            const nome = document.getElementById("nome").value.trim();
            const dataHora = document.getElementById("dataHora").value.trim();
            const servico = document.getElementById("servico").value.trim();
            const observacoes = document.getElementById("observacoes").value.trim();

            if (!nome || !dataHora || !servico) {
                alert("Por favor, preencha todos os campos obrigatórios!");
                return;
            }

            try {
                // Adiciona o agendamento ao Firestore
                await addDoc(collection(db, "agendamentos"), {
                    nome,
                    dataHora,
                    servico,
                    observacoes,
                    criadoPor: user.uid, // Adiciona o ID do usuário autenticado
                    criadoEm: Timestamp.now(),
                });

                alert("Agendamento realizado com sucesso!");
                form.reset(); // Limpa o formulário após o envio
            } catch (error) {
                console.error("Erro ao salvar agendamento:", error);
                alert("Erro ao realizar o agendamento. Tente novamente.");
            }
        });
    }
});
