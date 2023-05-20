"use strict";



//CRIANDO OBJETOS
//CRIAR UMA LISTA DE OBJETOS
var listaUser = JSON.parse(localStorage.getItem("listaUser"));
if (listaUser == null) {
    console.log("Lista de usuários não encontrada, criando lista...");
    let listaDeUsuarios = [
        {
            nomeUsuario : "José",
            emailUsuario : "jose@gmail.com",
            senhaUsuario: "123456"
        }
        ,
        {
            nomeUsuario : "Paulo",
            emailUsuario : "paulo@gmail.com",
            senhaUsuario: "123456"
        }
        ,
        {
            nomeUsuario : "Maria",
            emailUsuario : "maria@gmail.com",
            senhaUsuario: "123456"
        }
        ,
        {
            nomeUsuario : "João",
            emailUsuario : "joao@gmail.com",
            senhaUsuario: "123456"
        }
    ];
    //Adicionando a lista de OBJETOS no localStorage
    localStorage.setItem("listaUser", JSON.stringify(listaDeUsuarios));

};

const botao = document.querySelector("#btnSubmit");

console.log(botao)

botao.addEventListener("click", ()=>{
        //Entrada do usuário
        let listaUser = JSON.parse(localStorage.getItem("listaUser"));
        const msgError = document.querySelector("#msgError");

        let usuarioValidado = {
            usuarioInput : document.querySelector("#usuario").value,
            senhaInput : document.querySelector("#senha").value,
        }

        try{
            listaUser.forEach((usuario)=>{
                if(usuarioValidado.usuarioInput == usuario.emailUsuario && usuarioValidado.senhaInput == usuario.senhaUsuario){
                    //Adicionando nova propriedade no objeto.
                    usuarioValidado["nomeCompleto"] = usuario.nomeUsuario;
                    throw "USUÁRIO VALIDADO!";
                }
            });

            throw "SENHA OU NOME DE USUÁRIO INVÁLIDO!";
        }catch(msg){

            if(msg == "USUÁRIO VALIDADO!"){
                
                //Adicionando o objeto usuarioValidado no localStorage
                localStorage.setItem("usuario-validado", JSON.stringify(usuarioValidado))

                
                //Criando o sistema de redirect
                
                
                msgError.setAttribute("style","color:#0c203f;background-color:#78dab9;display:block;")
                msgError.innerHTML = "<strong>Usuário validado!</strong>"

                setTimeout(function () {
                    window.location.href = "../index.html";
                }, 3000 );
            }else{
                msgError.innerHTML = "<strong>Senha ou Usuário inválidos!</strong>";
                msgError.setAttribute("style","color:#0c203f;display:block;");
            }
        }
    }
);