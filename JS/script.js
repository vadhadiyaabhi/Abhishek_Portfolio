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

    $(".works").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {enabled:true}
    });
});

function blurToggle(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('blur');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
    var close_btn = document.getElementById('close-btn');
    close_btn.classList.toggle('active');
}

// const currentLocation = location.href;
// const menuItem = document.querySelectorAll('a');
// const menuLength = menuItem.length;
// for(let i = 0; i<menuItem.length; i++){
//     if(menuItem[i].href === currentLocation){
//         menuItem[i].className = "active";
//     }
// }