const btn_gravar = document.querySelector("#btn_gravar")
const btn_cancelar = document.querySelector("#btn_cancelar")
const f_nome = document.querySelector("#f_nome")
const f_celular = document.querySelector("#f_celular")
const f_email = document.querySelector("#f_email")
const f_dtnasc = document.querySelector("#f_dtnasc")


btn_gravar.addEventListener("click", (ect)=>{
   const dados = {
    "f_nome":f_nome.value,
    "f_celular":f_celular.value,
    "f_email":f_email.value,
    "f_dtnasc":f_dtnasc.value
   }
   const cabecalho = {
      method: 'POST',
      body:JSON.stringify(dados)  
   }
   const endpoint ="http://localhost:1880/addcontatos"
    fetch(endpoint, cabecalho)
    .then(res=>{
        if(res.status==200){
            reset()
        }else {
            alert("erro ao gravar novo contatoa")
        }
    })
})

btn_cancelar.addEventListener("click", (ect)=>{
    reset()
})

const reset = ()=> {
    f_nome.value = "";
    f_celular.value = "";
    f_email.value = "";
    f_dtnasc.value = "";
    f_nome.focus();
}

