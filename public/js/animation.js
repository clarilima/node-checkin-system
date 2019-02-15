$("#btn-start").click(() => {

    $('.transition').addClass('anim-trans');

    setTimeout(() => {

        $('.transition').removeClass('anim-trans');

    }, 2000);

});

