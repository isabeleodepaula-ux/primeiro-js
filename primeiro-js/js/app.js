console.log("JavaScript carregado com sucesso!");

const campoNome = document.getElementByID("nome");
const botao = document.getElementById("btnSaudar");
const mensagem = document.getElementById("mensagem");


function  exibirSaudacao() {
    const nome = campoNome.value.trim();
    console.log("Nome digitado:", nome;)
    
}

function exibirSaudacao() {
    cont nome = campoNome.value.trim();

    if (nome === "") {
        mensagem.textContent = "Digite seu nome.";
        mensagem.className = "erro";
        return;
    }

    mensagem.textContent = `Olá, ${nome}! Bem-vindo ao JavaScript.`;
    mensagem.className = "sucesso";
}

botao.addEventListener("click", exibirSaudacao);