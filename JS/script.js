const Botao_1 =document.querySelector("#Botao_1")
const Botao_2 =document.querySelector("#Botao_2")
const Botao_3 =document.querySelector("#Botao_3")
const Botao_4 =document.querySelector("#Botao_4")
const Botao_5 =document.querySelector("#Botao_5")







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
// --------------------------------------------------------------------------

function destacarBotao(botao) {
    // botao.style.backgroundColor = "yellow";
    botao.style.color = "#121e2e";
    botao.style.textDecoration = "underline";
}

function removerDestaqueBotao(botao) {
    // botao.style.backgroundColor = "";
    botao.style.color = "";
    botao.style.textDecoration = "";
}
