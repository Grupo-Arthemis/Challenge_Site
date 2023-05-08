const Botao_1 =document.querySelector("#Botao_1")
const Botao_2 =document.querySelector("#Botao_2")
const Botao_3 =document.querySelector("#Botao_3")
const Botao_4 =document.querySelector("#Botao_4")
const Botao_5 =document.querySelector("#Botao_5")
const Botao_6 =document.querySelector("#Botao_6")







// --------------------------------------------------------------------------
Botao_1.addEventListener("click", () => {
    const element = document.getElementById("Area_1");
    element.scrollIntoView({behavior: "smooth", block: "center"});
})

Botao_2.addEventListener("click", () => {
    const element = document.getElementById("Area_2");
    element.scrollIntoView({behavior: "smooth", block: "center"});
})

Botao_3.addEventListener("click", () => {
    const element = document.getElementById("Area_3");
    element.scrollIntoView({behavior: "smooth", block: "center"});
})

Botao_4.addEventListener("click", () => {
    const element = document.getElementById("Area_4");
    element.scrollIntoView({behavior: "smooth", block: "center"});
})

Botao_5.addEventListener("click", () => {
    const element = document.getElementById("Area_5");
    element.scrollIntoView({behavior: "smooth", block: "center"});
})

Botao_6.addEventListener("click", () => {
    const element = document.getElementById("Area_6");
    element.scrollIntoView({behavior: "smooth", block: "center"});
})
// --------------------------------------------------------------------------
// funcao para destacar o botao
function destacarBotao(botao) {
    botao.style.color = "#ffffff";
    botao.style.textDecoration = "underline";
}

function removerDestaqueBotao(botao) {
    botao.style.color = "";
    botao.style.textDecoration = "";
}

// validando se esta tudo preenchido
function validarFormulario() {
    var nome = document.getElementById("name");
    var email = document.getElementById("Email");
    var numero = document.getElementById("number");
    var mensagem = document.getElementById("sugestao");

    var emailRegExp = /\S+@\S+\.\S{2,}/;

    if (nome.value === "" || email.value === "" || numero.value === "" || mensagem.value === "") {
        alert("Por favor, preencha todos os campos. (nome, email, numero e sugestão)");
        return false;
    } else if (!emailRegExp.test(email.value)) {
        alert("Por favor, informe um e-mail válido.");
        return false;
    } else {
        limparCampos();
        return true;
    }
}

// limpar campos
function limparCampos() {
    document.getElementById("name").value = '';
    document.getElementById("Email").value = '';
    document.getElementById("number").value = '';
    document.getElementById("sugestao").value = '';
}

// clique do botao
document.getElementById("Botaolegal").addEventListener("click", function(event) {
    event.preventDefault();
    if (validarFormulario()) {
        var confirmacao = confirm("Tem certeza de que deseja enviar o formulário?");
        if (confirmacao) {
            document.getElementById("meuFormulario").reset();
            alert("Obrigado por nos contatar!");
        }
        return false;
    }
});
