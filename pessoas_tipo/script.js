


function escolheUsuario(){
   let usuario = document.getElementById("pessoa_tipo");
 


    switch(usuario.value){
        case 'cliente':
            console.log('este é cliente');
            break;
        case 'mecanico':
            console.log('este é mecanico');
            break;
        case 'gerente':
            console.log('este é gerente');
            break

    }
}

