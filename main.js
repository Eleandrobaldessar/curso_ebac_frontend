// cria mascaras nos campos
$('#fone').mask('(00) 00000-0000'),
$('#CEP').mask('00000-000'),
$('#CPF').mask('000.000.000-00')

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
            CPF: {
                required:true
            },
            endereco: {
                required:true
            },
            CEP: {
                required:true
            }
},
        // mudar a mensagem dos campos
            messages: {
                nome:'Por favor, insira o seu Nome',
                fone:'Insira o seu telefone',
                email:'Insira o seu E-mail',
                CPF:'Insira o seu CPF',
                endereco:'Insira o seu Endereço',
                CEP:'Insira o seu CEP',
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