jQuery(document).ready(function() {
    $("#simpan").on('click', function(e){
        e.preventDefault();
        let todo = $("#todo").val();

        if(todo === ""){
            alert('Todo tidak boleh kosong');
            return false;
        }else{
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                type: 'POST',
                url: '/',
                dataType: 'JSON',
                data: {
                    'todo': todo
                },
                success: function (data){
                    if(data.id != null){
                        $("#table").append('<tr>' + 
                            '<td width="20px"><input type="checkbox" name="todo_item" id="'+ data.id +'"></td>'+
                            '<td>'+data.todo+'</td>'
                        );
                        $("#todo").val("");
                        $("#todo").focus();
                    }
                }
            });
        }
    });

    $("#delete").on('click', function(e){
        e.preventDefault();
        let id = [];
        $('input[name="todo_item"]:checked').each(function (){
            id.push($(this).attr('id'));
        });

        if(id.length > 0){
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                type: 'DELETE',
                url: '/' + id.join(),
                dataType: 'html',
                success: function (data){
                    if(data == "true"){
                        $('input[name="todo_item"]:checked').each(function (){
                            $(this).closest('tr').remove();
                        });
                        id = [];
                    }
                }
            });
        }else{
            alert('Pilih salah satu Todo');
        }
    });
});