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

