$('form').on('submit', function(e){ //Quando estiver em formulário e clicar no botão
    e.preventDefault(); //previnir o comportamento padrão do form que é atualizar a página

    const novaTarefa = $('#nova-tarefa').val();
    const novoItemLista = $('<li>').text(novaTarefa);

    $(novoItemLista).css('cursor','pointer');

    $('.lista ul').append(novoItemLista); // Adicionar o novo item de lista à lista existente
    $('#nova-tarefa').val(''); // Limpar o campo de entrada após adicionar a tarefa à lista

    $(novoItemLista).on('click', function() {
        $(this).toggleClass('riscado');
    });
});