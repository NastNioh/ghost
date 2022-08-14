$(document).ready(function() {

    $('.equipe').hide()
    $('.img1').on({
        mouseenter: function() {
            $('.basket .equipe').fadeIn(1500);
        },
        mouseleave: function() {
            $('.basket .equipe').fadeOut();
        }
    })


    $('.equipe1').hide()
    $('.img2').on({
        mouseenter: function() {
            $('.basket .equipe1').fadeIn(1500);
        },
        mouseleave: function() {
            $('.basket .equipe1').fadeOut();
        }
    })


    $('.supporters').hide()
    $('.img3').on({
        mouseenter: function() {
            $('.basket1 .supporters').fadeIn(1500);
        },
        mouseleave: function() {
            $('.basket1 .supporters').fadeOut();
        }
    })


    $('.supporters1').hide()
    $('.img4').on({
        mouseenter: function() {
            $('.basket1 .supporters1').fadeIn(1500);
        },
        mouseleave: function() {
            $('.basket1 .supporters1').fadeOut();
        }
    })


    $('.merites').hide()
    $('.img5').on({
        mouseenter: function() {
            $('.basket2 .merites').fadeIn(1500);
        },
        mouseleave: function() {
            $('.basket2 .merites').fadeOut();
        }
    })

    $('.merites1').hide()
    $('.img6').on({
        mouseenter: function() {
            $('.basket2 .merites1').fadeIn(1500);
        },
        mouseleave: function() {
            $('.basket2 .merites1').fadeOut();
        }
    })

})