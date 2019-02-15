$("#btn-start").click(() => {

    $('.transition').show();

    $('.transition').addClass('anim-trans');

    setTimeout(() => {

        $('.transition').removeClass('anim-trans');

    }, 2000);

});

