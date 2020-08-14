$(document).ready(function(){

    configuracion();

    $('.myicono').click(function(e){
        $('#navbar ul').toggleClass('lista')              

    })

 
    function configuracion(){
        var urlPath = window.location.pathname;
        $('nav a').each(function(){

            var href= $(this).attr('href');        
            var indice=urlPath.length-href.length;
            if(urlPath.substring(indice) === href){
                console.log('match');
                $(this).closest('li').addClass('active');
            }
        })
    }

})