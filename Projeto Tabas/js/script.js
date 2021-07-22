





function verificar(){
  
    var Txtfano = document.getElementById('txtano')
    
    var TxtNome = document.getElementById('NomeForm')
    var TxtEmail = document.getElementById('EmailForm')
    var fsex = document.getElementsByName('radsex')
    var res = document.querySelector('div#res')

    var Data = Txtfano.value;
    var Nome = TxtNome.value;
    var Email = TxtEmail.value;

if (Nome.length == 0 || Email.length == 0 || Data.length == 0){
    window.alert('[Erro] Preencha todos os Campos Corretamente')
    } else {

            var genero = ''
        
        
            if (fsex[0].checked) {
                genero = 'Homem'
                
            
            } else if (fsex[1].checked){
                genero = 'mulher'
                
            }
            res.style.textAlign = 'center'
            
            res.innerHTML += `<p> Nome ${Nome} </p>`
            res.innerHTML += `<p> Email ${Email} </p> `
            res.innerHTML += `<p> Sexo ${genero} </p>`
            res.innerHTML += `<p> Data de Nascimento ${Data} </p> `
        }
    }

        
            
            
          





