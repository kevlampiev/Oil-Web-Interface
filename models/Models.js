function addModel() {
    $('#myModalLabel').text('Добавление записи');
    $('#editModelForm').modal('show');
      }

function editModel() {
  $('#myModalLabel').text("Редактирование модели");
  $('#editModelForm').modal('show');
          }
    

function deleteModel(id, mname){ 
  //alert('Im here');
  $('#model-for-deleting').text("Действительно удалить данные о модели "+mname);
  $('#deleteModelForm').modal('show');
      }          
          
          