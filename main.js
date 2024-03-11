$(document).ready(function(){
    // cria mascaras nos campos
    $('#fone').mask('(00) 00000-0000', {
        placeholder:'(00) 00000-0000'
    })
    // faz com que os campos sejam obrigatorios tem conteudo
    $('form').validate({
        rules:{
            nome:{
                required:true
            },
            email: {
                required:true,
                email: true
                },
            fone: {
                required:true
            },
        },
        // mudar a mensagem dos campos
            messages: {
                nome:'Por favor, insira o seu nome'
            },
            submitHandler: function(form){
                console.log(form)
            },
            invalidHandler: function(evento, validador){
                let camposIncorretos = validador.numberOfInvalids();
                if (camposIncorretos){
                    alert(`Existem ${camposIncorretos} campos incorretos`)
                }
            }            
    })
})