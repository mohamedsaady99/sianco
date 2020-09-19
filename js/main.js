$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
    // go up button to the top of page
    var goUpButton = document.getElementById('go-up');
    window.onscroll = function(){
        'use strict';
        if(window.pageYOffset >= 1100)
            {
                goUpButton.style.display ='block';
            }
        else
            {
                 goUpButton.style.display = 'none'; 
                
            }
    };
   
 })

