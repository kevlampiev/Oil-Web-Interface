/*var app = new Vue({
    el: '#app',
    data:{        
      vm: {}
    },
      mounted() {           
          axios.get('my-web-service.json') 
              .then(response => {
                  this.vm = response.data;      
              })
              .catch(error => {
                  console.log(error);                    
              }).finally(() => {});
      }
  });*/

$(document).ready(loadMain());

function loadMain() {
    $('#app').load('initial-text.html');
};
  
function loadModels() {
    $('#app').load('/models/models-view.html');  
      return nil;
  };

function loadModelLines() {
    $('#app').load('/model-lines/model-lines-view.html');  
      return nil;
  };

  function loadMakes() {
    $('#app').load('/makes/makes-view.html');  
      return nil;
  };

function loadPartTypes() {
    $("#app").load('/Tech-Parts/tech-part-view.html');
    return nil;
};

function loadOilManufacturers() {
    $("#app").load('/oil-manufacturers/oil-manufacturers-view.html');
    return nil;
}

