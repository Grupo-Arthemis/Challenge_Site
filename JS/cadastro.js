// funcao para limpar os campos depois de cadastrar
function limparCampos() {
    document.getElementById("fname").value = '';
    document.getElementById("lname").value = '';
    document.getElementById("email").value = '';
    document.getElementById("senha").value = '';
    document.getElementById("confirm").value = '';
}

var emailRegExp = /\S+@\S+\.\S{2,}/;
// verificar se os campos estao vazios, ver se o email é realmente um email, ver se o nome, sobnome e email tem mais de 5 digitos
// ver se a senha tem entre 6 e 8 digitos, verificar se a senha esta igual na confirmacao
// e por ultimo limpar os campos se tudo for feito corretamente
function validarFormulario() {
    var nome = document.getElementById("fname");
    var sobnome = document.getElementById("lname");
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");
    var confirm = document.getElementById("confirm");
    
    // Verificando se os campos estão preenchidos e corretos
    if (nome.value === "" || sobnome.value === "" || email.value === "" || senha.value === "" || confirm.value === "") {
        alert("Por favor, preencha todos os campos (nome, sobrenome, email, senha e confirmação).");
        return false;
    } else if (!emailRegExp.test(email.value)) {
        alert("Por favor, informe um e-mail válido.");
        return false;
    } else if (nome.value.length < 5 || sobnome.value.length < 5 || email.value.lenght < 5) {
        alert("Os campos nome, sobrenome e email devem ter no minimo 5 digitos.");
        return false;
    } else if (senha.value.length < 6 || senha.value.length > 8) {
        alert("A senha deve ter no minimo 6 digitos e no maximo 8 digitos.")   
        return false;
    } else if (senha.value !== confirm.value) {
        alert("A senha e a confirmação devem ser iguais.");
        return false;
    } else {
        limparCampos();
        return true;
    }
}


//clique do botao onde faz a verificação, pergunta se deseja salvar e limpa os campos
document.getElementById("Botaolegal").addEventListener("click", function(event) {
    event.preventDefault();
    if (validarFormulario()) {
        var confirmacao = confirm("Está certo das suas informações?");
        if (confirmacao) {
            document.getElementsByClassName("formulario_itens");
            limparCampos();
            alert("Cadastrado!");
        }
        return false;
    }
});

//ficar verde se o minimo de caracteres ter sido atingido---------------------------
var nome = document.getElementById("fname");
var sobnome = document.getElementById("lname");
var email = document.getElementById("email");
var senha = document.getElementById("senha");
var confirma = document.getElementById("confirm");

nome.addEventListener("focus", ()=>{
    if (nome.value.length < 5){
        nome.setAttribute("style","outline-color:#ff0000;")}
});

nome.addEventListener("keyup", ()=>{
    if(nome.value.length < 5){
        nome.setAttribute("style","outline-color:#ff0000;")

    }else{
        nome.setAttribute("style","outline-color:#00ff00;")
    }
});


sobnome.addEventListener("focus", ()=>{
    if (sobnome.value.length < 5){
        sobnome.setAttribute("style","outline-color:#ff0000;")}
});

sobnome.addEventListener("keyup", ()=>{
    if(sobnome.value.length < 5){
        sobnome.setAttribute("style","outline-color:#ff0000;")

    }else{
        sobnome.setAttribute("style","outline-color:#00ff00;")
    }
});


email.addEventListener("focus", ()=>{
    if (email.value.length < 5){
        email.setAttribute("style","outline-color:#ff0000;")}
});

email.addEventListener("keyup", ()=>{
    if((email.value.length < 5)||(!emailRegExp.test(email.value))) {
        email.setAttribute("style","outline-color:#ff0000;")
        
    }else{
        email.setAttribute("style","outline-color:#00ff00;")
    }
});


senha.addEventListener("focus", ()=>{
    if (senha.value.length < 5){
        senha.setAttribute("style","outline-color:#ff0000;")}
});

senha.addEventListener("keyup", ()=>{
    if((senha.value.length < 6)||(senha.value.length > 8)) {
        senha.setAttribute("style","outline-color:#ff0000;")

    }else{
        senha.setAttribute("style","outline-color:#00ff00;")
    }
    
});

confirma.addEventListener("focus", ()=>{
    if((confirma.value != senha.value)||(confirma.value.length < 6)){
        confirma.setAttribute("style","outline-color:#ff0000;")}
});

confirma.addEventListener("keyup", ()=>{
    if((confirma.value != senha.value)) {
        confirma.setAttribute("style","outline-color:#ff0000;")

    }else{
        confirma.setAttribute("style","outline-color:#00ff00;")
    }
    
});


// fim da verificaçao com cor verde-----------------------------------------------


console.log("toggle");
const toggle = document.querySelector(".toggle-switch > label > input[type='checkbox']");
toggle.addEventListener("click", ()=>{
    console.log("clicou");
})

//Botão de dark mode
console.log("teste")
const tit = document.querySelector('.checkbox');
const fundo = document.querySelector('body')
const labels = document.querySelector('.formulario_itens')  
const titulo = document.querySelector('.formulario h1')  
const botao = document.querySelector('.Botaozin')
const cabecalho = document.querySelector('.cabeçalho')



console.log(fundo)
fundob = true

tit.addEventListener("click", ()=>{
    if (fundob == true) {
        fundo.style.backgroundImage = 'url(../Assets/Fundo-Chuva.png)';
        labels.style.color = '#fff';
        titulo.style.color = '#fff';
        cabecalho.style.backgroundColor = '#0c203f';
        fundob = false;
    }else{
        fundo.style.backgroundImage = 'url(../Assets/Fundo-1.jpg)';
        labels.style.color = '#0c203f';
        titulo.style.color = '#0c203f';
        cabecalho.style.backgroundColor = '#0c203f';
        fundob = true;
    }
})

