let heights = [];
let sections = [];
heights.push($('#slider-container').height());
var maxWidth = 35.4;
var counter = 1;
let hamCount = 0;

$(document).ready(() => {
    let $curwindow;

    $('#homeBubble').on('click', () => {
        $('#header').goTo();
    });
    $('#faqBubble').on('click', () => {
        $('#faq').goTo();
    });
    $('#tracksBubble').on('click', () => {
        $('#challenges').goTo();
    });
    $('#logisticsBubble').on('click', () => {
        $('#logistics').goTo();
    });
    $('#aboutBubble').on('click', () => {
        $('#basicInfo').goTo();
    });

    $('#home-small-button').on('click', () => {
        $('#header').goTo();
        $('#side-info').slideToggle();
        $('#ham-container').toggleClass('change');
    });
    $('#faq-small-button').on('click', () => {
        $('#faq').goTo();
        $('#side-info').slideToggle();
        $('#ham-container').toggleClass('change');
    });
    $('#tracks-small-button').on('click', () => {
        $('#challenges').goTo();
        $('#side-info').slideToggle();
        $('#ham-container').toggleClass('change');
    });
    $('#logistics-small-button').on('click', () => {
        $('#logistics').goTo();
        $('#ham-container').toggleClass('change');
        $('#side-info').slideToggle();
    });
    $('#about-small-button').on('click', () => {
        $('#basicInfo').goTo();
        $('#side-info').slideToggle();
        $('#ham-container').toggleClass('change');
    });

    $('#track1').on('click', () => {
        $('.black-overlay').fadeToggle('fast');
        $('#track1-info').fadeToggle('medium');
        $curwindow = $('#track1-info');
    });

    $('#track2').on('click', () => {
        $('.black-overlay').fadeToggle('fast');
        $('#track2-info').fadeToggle('medium');
        $curwindow = $('#track2-info');
    });

    $('#track3').on('click', () => {
        $('.black-overlay').fadeToggle('fast');
        $('#track3-info').fadeToggle('medium');
        $curwindow = $('#track3-info');
    });

    $('.black-overlay').on('click', () => {
        $('.black-overlay').fadeToggle('fast');
        $curwindow.fadeToggle('fast');
    });

    $('#ham-container').on('click', () => {
        $('#ham-container').toggleClass('change');
        $('#side-info').slideToggle();

        // if (hamCount == 0) {
        //     $("#ham-container").detach().appendTo("#side-info");
        //     hamCount = 1;
        // } else {
        //     $("#ham-container").detach().appendTo("#navbar");
        //     hamCount = 0;
        // }
    })
//sonny starts coding
    /*$("dropdown").hover(function() {
        if ($("#friday").on('click', () => {
            $('#friday').goTo();
        } else if (($("#saturday").on('click', () => {
            $('#saturday').goTo();
        } else {
            $('#sunday').goTo();
        }
    }*/
//sonny stops coding
    $(".faq-question").click(function() {
        if ($(this).parent().hasClass('open')) {
            $(this).closest('.faq-holder').find('.faq-answer-container').animate({height: '0'}, 300);
            $(this).closest('.faq-holder').removeClass('open');
            $(this).closest('.faq-holder').animate({height: '7rem'}, 300);
        } else {
            var newHeight = $(this).closest('.faq-holder').find('.answer-box').height() +'px';
            $(this).closest('.faq-holder').find('.faq-answer-container').animate({'height':newHeight},300);
            $(this).closest('.faq-holder').css('height', 'auto');
            $(this).closest('.faq-holder').addClass('open');
        }
    });

    $(".section-container").each(function() {

        heights.push($(this).position(this).top + heights[0]);
        counter++;
        sections.push($(this));
    });
    console.log(heights);
    sections.push($("#tracksBubble"));
    sections.push($("#logisticsBubble"));
    sections.push($("#faqBubble"));
});


$(document).scroll(function() {
    let scrollPosition = $(window).scrollTop();
    newWidth = (maxWidth * scrollPosition) / ($(document).height() - $(window).height());
    var withProp = newWidth.toString() +"rem";
    $("#moose-mark").css('width', withProp);
    // console.log(scrollPosition);
    $("#aboutBubble").removeClass("filled");
    $("#tracksBubble").removeClass("filled");
    $("#logisticsBubble").removeClass("filled");
    $("#faqBubble").removeClass("filled");
    for (var i = 0; i < heights.length; i++) {
        // console.log(heights[i]);
        // console.log(scrollPosition + " : " + heights[i]);

        if (scrollPosition - 380 > heights[i]) {
            if (i == 1) {
                $("#aboutBubble").addClass("filled");
                $("#tracksBubble").removeClass("filled");
                $("#logisticsBubble").removeClass("filled");
                $("#faqBubble").removeClass("filled");
            }
            else if (i == 2) {
                $("#aboutBubble").addClass("filled");
                $("#tracksBubble").addClass("filled");
                $("#logisticsBubble").removeClass("filled");
                $("#faqBubble").removeClass("filled");
            } else if (i == 3) {
                $("#aboutBubble").addClass("filled");
                $("#tracksBubble").addClass("filled");
                $("#logisticsBubble").addClass("filled");
                $("#faqBubble").removeClass("filled");
            } else if (i == 4) {
                $("#aboutBubble").addClass("filled");
                $("#tracksBubble").addClass("filled");
                $("#logisticsBubble").addClass("filled");
                $("#faqBubble").addClass("filled");
            }
        }
    }
});


(function($) {
    $.fn.goTo = function() {
        var placeToGo;
        placeToGo = $(this).offset().top - 150;
        $('html, body').animate({
            scrollTop: placeToGo + 'px'
        });
        return this;
    }
})(jQuery);
