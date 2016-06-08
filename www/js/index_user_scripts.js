(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Home */
    $(document).on("click", ".uib_w_7", function(evt)
    {
         activate_subpage("#uib_page_2"); 
    });
    
        /* button  Favourites */
    $(document).on("click", ".uib_w_6", function(evt)
    {
         activate_subpage("#uib_page_3"); 
    });
    
        /* button  messages */
    $(document).on("click", ".uib_w_3", function(evt){
         activate_subpage("#uib_page_4");
        var fnCapturar = function(imageSrc){
            var item = '<li><img src="data:image/jpeg;base64,'+imageSrc+'"></li>';
            $('#listFile').html(item); 
            $('.filtro-box').html(item);
            
        }
        
        
        
        var fnFalhar = function(error){
            navigator.notification.alert("Erro ao capturar: " + error, null, "INFORMAÇÃO");  
        }
        
        var opcoes = {
            quality: 75,
            destinationType: Camera.DestinationType.DATA_URL
        }
        navigator.camera.getPicture(fnCapturar, fnFalhar, opcoes);
        
    });
    
        /* button  Profile */
    $(document).on("click", ".uib_w_4", function(evt)
    {
         activate_subpage("#uib_page_5"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
