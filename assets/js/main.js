jQuery(document).ready(function($) {

    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#header', offset: 400});

    /* ======= Fixed header when scrolled ======= */
    $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 50) {
             $('#header').addClass('navbar-fixed-top');
         }
         else {
             $('#header').removeClass('navbar-fixed-top');
         }
    });

    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function(e){
        //store hash
        var target = this.hash;
        e.preventDefault();
        $('body').scrollTo(target, 800, {offset: -70, 'axis':'y'});
        //Collapse mobile menu after clicking
        if ($('.navbar-collapse').hasClass('in')){
          $('.navbar-collapse').removeClass('in').addClass('collapse');
        }
    });

    /* ======= Gallery Slider ======= */
    const slides = document.querySelectorAll('.gallery-slider .slide');
    let currentSlide = 0;

    function showSlide(index) {
        const slider = document.querySelector('.gallery-slider');
        slider.style.transform = `translateX(-${index * 100}%)`;
        currentSlide = index;
    }

    // Auto-slide every 3 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 3000); // Change slide every 3 seconds

    // Optional: Manual controls (if needed)
    // Add buttons with classes .prev and .next in the HTML if you want manual controls
    document.querySelector('.gallery-controls .prev').addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    document.querySelector('.gallery-controls .next').addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

});
