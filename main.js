$(document).ready(function() {
    $('#task-form').submit(function(event) {
        event.preventDefault();

        var taskName = $('#task-input').val();
        if (taskName.trim() === '') {
            alert('Por favor, insira uma tarefa.');
            return;
        }

        $('#task-list').append('<li>' + taskName + '</li>');

        $('#task-input').val('');
    });

    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
