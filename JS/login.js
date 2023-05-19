"use strict";



//CRIANDO OBJETOS
//CRIAR UMA LISTA DE OBJETOS

const botao = document.querySelector("#btnSubmit");

console.log(botao)

botao.addEventListener("click", ()=>{
        //Entrada do usuário
        let usuarioValidado = {
            usuarioInput : document.querySelector("#usuario").value,
            senhaInput : document.querySelector("#senha").value
        }
        const msgError = document.querySelector("#msgError");

        try{

            let listaUser = JSON.parse(localStorage.getItem("listaUser"));

            listaUser.forEach((usuario)=>{

                if(usuarioValidado.usuarioInput == usuario.emailUsuario && usuarioValidado.senhaInput == usuario.senhaUsuario){
                    //Adicionando nova propriedade no objeto.
                    usuarioValidado["nomeCompleto"] = usuario.nomeCompleto;
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
            }else{
                msgError.innerHTML = "<strong>Senha ou Usuário inválidos!</strong>";
                msgError.setAttribute("style","color:#0c203f;display:block;");
            }
        }
           


    }
);