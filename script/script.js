
const ButtonCrypt = () => {
    const textoarea = document.querySelector('.textoInput');
    const mensagem = document.querySelector('.txtmensagem'); 

    if (textoarea && mensagem) { 
        mensagem.value = encrypt(textoarea.value);
        textoarea.value = ""; 
    } else {
        console.error("Elemento 'textoarea' ou 'mensagem' não encontrado");
    }
}

const ButtonDescrypt = () =>  {
    const textoarea = document.querySelector('.textoInput'); 
    const mensagem = document.querySelector('.txtmensagem'); 

    if (textoarea && mensagem) { 
        mensagem.value = decrypt(textoarea.value);
        textoarea.value = ""; 
    } else {
        console.error("Elemento 'textoarea' ou 'mensagem' não encontrado");
    }
}
const CopyText = () => {
    const mensagem = document.querySelector('.txtmensagem');
        navigator.clipboard.writeText(mensagem.value) .then(()=>{
        alert ("texto copiado")
     })

    } 

function encrypt(stringCriptografia){

    let matrizcodigo= [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];

    stringCriptografia =stringCriptografia.toLowerCase();

    for( let i = 0; i < matrizcodigo.length; i++) {
        if(stringCriptografia.includes(matrizcodigo[i][0])) {
            stringCriptografia = stringCriptografia.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1]);
        }
        
    }
    return stringCriptografia;
}
function decrypt(stringDesencriptar){

    let matrizcodigo= [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];

    stringDesencriptar =stringDesencriptar.toLowerCase();
    for( let i = 0; i<matrizcodigo.length; i++) {
        if(stringDesencriptar.includes(matrizcodigo[i][1])) {
            stringDesencriptar=stringDesencriptar.replaceAll(matrizcodigo[i][1],matrizcodigo[i][0]);
         }
    }
     return stringDesencriptar;
}