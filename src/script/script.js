  const nome = document.querySelector('#nome');
  const email = document.querySelector('#email');
  const assunto = document.querySelector('#assunto');
  const mapa = document.querySelector('#mapa')

  
  let nomeOk = false;
  let emailOk = false;
  let mensagemOk = false;
  
  function validaNome() {
    let txtNome = document.querySelector("#txtNome")
  
    if (nome.value.length < 3) {
      txtNome.innerHTML = 'Nome muito curto'
      txtNome.style.color = 'red'
      nomeOk = false
    } else {
      txtNome.innerHTML = 'Nome ok'
      txtNome.style.color = 'green'
      nomeOk = true
    }
  }
  
  function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
      txtEmail.innerHTML = 'E-mail inválido'
      txtEmail.style.color = 'red'
      emailOk = false
    } else {
      txtEmail.innerHTML = 'E-mail válido'
      txtEmail.style.color = 'green'
      emailOk = true
    }
  }
  
  function validaEmail2() {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.match(regex)) {
      txtEmail.innerHTML = 'E-mail válido'
      txtEmail.style.color = 'green'
      emailOk = true
    } else {
      txtEmail.innerHTML = 'E-mail inválido'
      txtEmail.style.color = 'red'
      emailOk = false
    }
  }
  
  function validaAssunto() {
    let txtMsg = document.querySelector('#txtAssunto')
    
    if(assunto.value.length > 100) {
      txtMsg.innerHTML = 'Escreveu demais, meu bom, fica em no máximo 100 caracteres ae.'
      txtMsg.style.color = '#d90429'
      mensagemOk = false
    } else {
      txtMsg.innerHTML = assunto.value.length + '/100'
      txtMsg.style.color = '#2b2d42'
      mensagemOk = true
    }
  }
  
  function enviarForm(){
    // event.preventDefault()
    if(nomeOk  && emailOk  && mensagemOk ) {
      alert(nome.value + ', mandou a true, só esperar que na volta a gente responde.')
    } else {
      alert('Oh, esqueceu de preencher tudo. Volta aqui pra terminar.')
    }
  }
  