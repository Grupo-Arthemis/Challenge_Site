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


// function validateForm() {
//     var name = document.forms[0]["name"].value;
//     if (name == "") {
//         alert("Por favor, preencha o campo Nome.");
//         return false;
//     }
//     var Email = document.forms[0]["Email"].value;
//     if ((Email == ""))  {
//         alert("Por favor, preencha o campo Email.");
//         return false;
//     }
//     var Number = document.forms[0]["Number"].value;
//     if ((Number == ""))  {
//         alert("Por favor, preencha o campo Celular.");
//         return false;
//     }
//     var sugestao = document.forms[0]["sugestao"].value;
//     if ((sugestao == ""))  {
//         alert("Não esqueça da sugestão");
//         return false;
//     }
// }
// document.forms[0].addEventListener("submit", validateForm);


function validarFormulario() {
    var nome = document.getElementById("name");
    var email = document.getElementById("Email");
    var numero = document.getElementById("number");
    var mensagem = document.getElementById("sugestao");

    if (nome.value === "" || email.value === "" || numero.value === "" || mensagem.value === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
      } else {
        alert("Obrigado por nos contatar!");
        return true;
    }
  }

  document.getElementById("Botaolegal").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("100").scrollIntoView();
    if (validarFormulario()) {
        document.getElementById("meuFormulario").submit()
    }
  });
