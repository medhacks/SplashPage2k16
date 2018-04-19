let heights = [];
let sections = [];
heights.push($('#slider-container').height());
var maxWidth = 35;
var counter = 1;
let hamCount = 0;

$(document).ready(() => {
    let $curwindow;

    $('#homeBubble').on('click', () => {
        $('#header').goTo();
        $("#aboutBubble").removeClass("filled");
        $("#tracksBubble").removeClass("filled");
        $("#logisticsBubble").removeClass("filled");
        $("#faqBubble").removeClass("filled");
    });
    $('#faqBubble').on('click', () => {
        $('#faq').goTo();
        $("#aboutBubble").addClass("filled");
        $("#tracksBubble").addClass("filled");
        $("#logisticsBubble").addClass("filled");
        $("#faqBubble").addClass("filled");
    });
    $('#tracksBubble').on('click', () => {
        $('#challenges').goTo();
        $("#aboutBubble").addClass("filled");
        $("#tracksBubble").addClass("filled");
        $("#logisticsBubble").removeClass("filled");
        $("#faqBubble").removeClass("filled");
    });
    $('#logisticsBubble').on('click', () => {
        $('#logistics').goTo();
        $("#aboutBubble").addClass("filled");
        $("#tracksBubble").addClass("filled");
        $("#logisticsBubble").addClass("filled");
        $("#faqBubble").removeClass("filled");
    });
    $('#aboutBubble').on('click', () => {
        $('#basicInfo').goTo();
        $("#aboutBubble").addClass("filled");
        $("#tracksBubble").removeClass("filled");
        $("#logisticsBubble").removeClass("filled");
        $("#faqBubble").removeClass("filled");
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
    });

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

        heights.push($(this).position(this).top - heights[0] - 75);
        counter++;
        sections.push($(this));
    });
    console.log(heights);
    sections.push($("#tracksBubble"));
    sections.push($("#logisticsBubble"));
    sections.push($("#faqBubble"));
});

$('#schedule-select').change(function () {
    if ($(this).val() == "Friday September 7") {
        $('#friday2').addClass('active');
        $('#saturday2').removeClass('active');
        $('#sunday2').removeClass('active');
    } else if ($(this).val() == "Saturday September 8") {
        $('#friday2').removeClass('active');
        $('#saturday2').addClass('active');
        $('#sunday2').removeClass('active');
    } else {
        $('#friday2').removeClass('active');
        $('#saturday2').removeClass('active');
        $('#sunday2').addClass('active');
    }
});

$(document).scroll(function() {
    let scrollPosition = $(window).scrollTop();
    let percentage = 0;
    let section = 1;
    if (scrollPosition >= heights[4]) {
        percentage = (scrollPosition - heights[4]) / (heights[5] - heights[4]);
        scrollPosition = 0.75 + percentage / (4);
        section = 4;
    } else if (scrollPosition >= heights[3]) {
        percentage = (scrollPosition - heights[3]) / (heights[4] - heights[3]);
        scrollPosition = 0.5 + percentage / (4);
        section = 3
    } else if (scrollPosition >= heights[2]) {
        percentage = (scrollPosition - heights[2]) / (heights[3] - heights[2]);
        // percentage = percentage + .5;
        scrollPosition = 0.25 + percentage / 4 ;
        section = 2;
    } else {
        section = 1;
        scrollPosition = scrollPosition / ($(document).height());
        percentage = (scrollPosition - heights[1]) / (heights[2] - heights[1]) + 0.4;
    }
    if (scrollPosition > 1) {
        scrollPosition = 1;
    }
    newWidth = (maxWidth * scrollPosition);
    var withProp = newWidth.toString() +"rem";
    $("#moose-mark").css('width', withProp);
    // console.log(scrollPosition);
    $("#aboutBubble").removeClass("filled");
    $("#tracksBubble").removeClass("filled");
    $("#logisticsBubble").removeClass("filled");
    $("#faqBubble").removeClass("filled");
    if (percentage > .85) {
        if (section == 1) {
            $("#aboutBubble").addClass("filled");
            $("#tracksBubble").removeClass("filled");
            $("#logisticsBubble").removeClass("filled");
            $("#faqBubble").removeClass("filled");
        } else if (section == 2) {
            $("#aboutBubble").addClass("filled");
            $("#tracksBubble").addClass("filled");
            $("#logisticsBubble").removeClass("filled");
            $("#faqBubble").removeClass("filled");
        } else if (section == 3) {
            $("#aboutBubble").addClass("filled");
            $("#tracksBubble").addClass("filled");
            $("#logisticsBubble").addClass("filled");
            $("#faqBubble").removeClass("filled");
        } else if (section == 4) {
            $("#aboutBubble").addClass("filled");
            $("#tracksBubble").addClass("filled");
            $("#logisticsBubble").addClass("filled");
            $("#faqBubble").addClass("filled");
        }
    } else {
        if (section == 1) {
            $("#aboutBubble").removeClass("filled");
            $("#tracksBubble").removeClass("filled");
            $("#logisticsBubble").removeClass("filled");
            $("#faqBubble").removeClass("filled");
        } else if (section == 2) {
            $("#aboutBubble").addClass("filled");
            $("#tracksBubble").removeClass("filled");
            $("#logisticsBubble").removeClass("filled");
            $("#faqBubble").removeClass("filled");
        } else if (section == 3) {
            $("#aboutBubble").addClass("filled");
            $("#tracksBubble").addClass("filled");
            $("#logisticsBubble").removeClass("filled");
            $("#faqBubble").removeClass("filled");
        } else if (section == 4) {
            $("#aboutBubble").addClass("filled");
            $("#tracksBubble").addClass("filled");
            $("#logisticsBubble").addClass("filled");
            $("#faqBubble").removeClass("filled");
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
