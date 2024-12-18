/*==========================sticky nav============================*/

window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
});



/*========================Scroll Section bottom to top====================*/
document.addEventListener("DOMContentLoaded", function() {
    $(document).ready(function(){

        $(window).scroll(function(){
            if($(this).scrollTop() > 40){
                $('.gotopbtn a').fadeIn();
            } else{
                $('.gotopbtn a').fadeOut();
            }
        });
    
        $(".gotopbtn a").click(function(){
            $('html, body').animate({scrollTop : 0},800);
        });
    }); 
    
});
