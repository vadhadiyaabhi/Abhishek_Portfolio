$(document).ready(function () {
    const skillsection = document.getElementById('about');
        $(window).scroll(function(){
            if(this.scrollY > 550){
                console.log('scroll working');
                $('.skill-per').each(function () {
                    var $this = $(this);
                    var per = $this.attr('per');
                    $this.css("width", per + '%');
    
                    // $({ animatedValue: 0 }).animate({ animatedValue: per }, {
                    //     duration: 1000,
                    //     step: function () {
                    //         $this.attr('per', Math.floor(this.animatedValue) + '%');
                    //     },
                    //     complete: function () {
                    //         $this.attr('per', Math.floor(this.animatedValue) + '%');
                    //     }
                    // });
                });
            }
 
    });
            

    $('.menu-toggler').click(function () {
        $(this).toggleClass("active");
        $('.custom-navbar-menu').toggleClass("active");
    });


});

// const currentLocation = location.href;
// const menuItem = document.querySelectorAll('a');
// const menuLength = menuItem.length;
// for(let i = 0; i<menuItem.length; i++){
//     if(menuItem[i].href === currentLocation){
//         menuItem[i].className = "active";
//     }
// }