$(document).ready(function(){
    //     //http://ZiptasticAPI.com/ZIPCODE OR http://ZiptasticAPI.com/ZIPCODE?callback=myCallback
    
          $('#zip').keyup(function(e) {
             var zip = $(this).val();
             if(zip.length === 5 && $.isNumeric(zip)){
               var requestURL = 'http://ZiptasticAPI.com/' + zip + '?callback=?';
               $.getJSON(requestURL, null, function(data) {
                   if(data.city) $('#city').val(data.city);
                   if(data.state) $('#state').val(data.state);
              });
             }
         }); 
   
         //phone fix
         $('input[type="tel"]').keyup(function(e){
             var tar = e.target;
             var val = tar.value;
            if(val.length == 3) {
                tar.value = val + '-';
                }
            if(val.length == 7) {
                tar.value = val + '-'; 
               }
   
         })
       });//end doc ready