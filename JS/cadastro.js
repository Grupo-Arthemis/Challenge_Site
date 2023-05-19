var nome = document.getElementById("fname");
var sobnome = document.getElementById("lname");
var email = document.getElementById("email");
var senha = document.getElementById("senha");
var confirma = document.getElementById("confirm");

let listaDeUsuarios = [
    {
        emailUsuario : "jose@gmail.com",
        senhaUsuario: "123456"
    }
    ,
    {
        emailUsuario : "paulo@gmail.com",
        senhaUsuario: "123456"
    }
    ,
    {
        emailUsuario : "maria@gmail.com",
        senhaUsuario: "123456"
    }
    ,
    {
        emailUsuario : "joao@gmail.com",
        senhaUsuario: "123456"
    }
];

//Adicionando a lista de OBJETOS no localStorage
localStorage.setItem("listaUser", JSON.stringify(listaDeUsuarios));

// funcao para limpar os campos depois de cadastrar
function limparCampos() {
    nome.value = '';
    sobnome.value = '';
    email.value = '';
    senha.value = '';
    confirma.value = '';
};

// verificar se os campos estao vazios, ver se o email é realmente um email, ver se o nome, sobnome e email tem mais de 5 digitos
// ver se a senha tem entre 6 e 8 digitos, verificar se a senha esta igual na confirmacao
// e por ultimo limpar os campos se tudo for feito corretamente
var emailRegExp = /\S+@\S+\.\S{2,}/;
function validarFormulario() {
    
    // Verificando se os campos estão preenchidos e corretos
    if (nome.value === "" || sobnome.value === "" || email.value === "" || senha.value === "" || confirma.value === "") {
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
    } else if (senha.value !== confirma.value) {
        alert("A senha e a confirmação devem ser iguais.");
        return false;
    } else {
        return true;
    }
};
// Verifica se o nome atende aos requisitos----------------------
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
// ---------------------------------------------------------------
// Verifica se o sobrenome atende aos requisitos------------------
sobnome.addEventListener("focus", ()=>{
    if (sobnome.value.length < 1){
        sobnome.setAttribute("style","outline-color:#ff0000;")}
});

sobnome.addEventListener("keyup", ()=>{
    if(sobnome.value.length < 1){
        sobnome.setAttribute("style","outline-color:#ff0000;")

    }else{
        sobnome.setAttribute("style","outline-color:#00ff00;")
    }
});
// ---------------------------------------------------------------
// Verifica se o email atende aos requisitos----------------------

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
// ---------------------------------------------------------------
// Verifica se o senha atende aos requisitos----------------------

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
// ---------------------------------------------------------------
// Verifica se o senha foi confirmada-----------------------------

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
// ---------------------------------------------------------------


//clique do botao onde faz a verificação, pergunta se deseja salvar e limpa os campos
document.getElementById("Botaolegal").addEventListener("click", function(event) {
    
    event.preventDefault();
    if (validarFormulario()) {
        var confirmacao = confirm("Está certo das suas informações?");
        if (confirmacao) {
            document.getElementsByClassName("formulario_itens");
            console.log(email.value);
            console.log(senha.value);
            console.log("-----------------------");

            var listaUser = JSON.parse(localStorage.getItem("listaUser"));
            newUser = {
                emailUsuario : email.value,
                senhaUsuario : senha.value
            };

            try{
                listaUser.forEach((usuario) => {
                    console.log(usuario.emailUsuario);
                    if (usuario.emailUsuario == newUser.emailUsuario) {
                        msgError.innerHTML = "<strong>Esse email já existe</strong>";
                        msgError.setAttribute("style","color:#0c203f;display:block;");
                        console.log("Esse email já existe");
                    }else{
                        console.log("Novo usuario!!!");
                        throw "Novo usuario!!!";
                    }
                });

            }catch(error){
                if (error == "Novo usuario!!!"){
                    console.log("taporra");
                    listaUser.push(newUser);
                    console.log(listaUser);
                    localStorage.setItem("listaUser", JSON.stringify(listaUser));
                    
                    msgError.setAttribute("style","color:#0c203f;background-color:#78dab9;display:block;")
                    msgError.innerHTML = "<strong>Usuário Cadastrado!</strong>"
        
                    setTimeout(function () {
                        window.location.href = "./login.html";
                    }, 3000 );
                }
            }
        } 
    }
});