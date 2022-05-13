const owl = $('.owl-carousel');

owl.owlCarousel({
    loop: true,
    margin: 53,
    responsive: {
        0: {
            items: 1
        },
        552: {
            items: 3,
            margin: 20
        },
        800: {
            margin: 40
        },
        1024: {

        }

    }
});

$('[data-vector]').click(function () {
    const vector = $(this).data('vector');

    owl.trigger(`${vector}.owl.carousel`);
});

//accordeon

$('[data-trigger]').click(function () {
    const accordeon = $(this).closest('[data-accordeon]');
    const content = accordeon.find('[data-content]');
    const contentHeight = content.find(':first-child').innerHeight()

    if (accordeon.hasClass('active')) {
        accordeon.removeClass('active');
        content.height(0);
    } else {
        accordeon.addClass('active');
        content.height(contentHeight);
    }
});

$('[data-trigger]:eq(0)').click();

