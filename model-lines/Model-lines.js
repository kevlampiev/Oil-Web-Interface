

function addModelLine() {
    $('#myModalLabel').text('Добавление записи');
    $('#editModelLineForm').modal('show');
      }

function editModelLine() {
  $('#myModalLabel').text("Редактирование модели");
  $('#editModelLineForm').modal('show');
          }
    

function deleteModelLine(id, mlname){ 
  $('#model-line-for-deleting').text("Действительно удалить данные о линейке "+mlname);
  $('#deleteModelLineForm').modal('show');

}          

