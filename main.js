$(document).ready(function(){
    // Callback quando uma funcão é chamada dentro de outra
    $('#New-List').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })
    
    // Adicionando itens de lista ao enviar o formulário
    $('form').on('submit', function(e){
        // Evitar a atualização da página ao clicar no botão de envio
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<span>${novaTarefa}</span>`).appendTo(novoItem);
        $(novoItem).appendTo('#taskList');
        // Animação para o item de lista aparecer lentamente
        $(novoItem).fadeIn(1000);
        // Limpa o campo de entrada após adicionar o item de lista
        $('#nova-tarefa').val('');
    });

    // Aplicar linha sobre o texto ao clicar no item da lista
    $('#taskList').on('click', 'li', function(){
        $(this).toggleClass('completed');
    });
});
