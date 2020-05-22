$(document).ready(function(){

    $('#sCrit').find('a').on('click', function(e){
      e.preventDefault();
  
      // $('#critterDescription').load('../data/turtle.html');
  
      var $desc = $('#critterDescription');
  
      switch($(this).attr('href')) {
        case '01.html' :
          $desc.load('../data/turtle.html');
          break;
        case '02.html' :
          $desc.load('../data/shark.html');
          break;
        case '03.html' :
          $desc.load('../data/seal.html');
          break;
      }
    });
  
  }); // end doc ready