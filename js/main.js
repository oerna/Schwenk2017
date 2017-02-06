$(document).ready(function () {
  'use strict';
  /* ========================================================================
     Fullscreen burger menu
   ========================================================================== */
  $(".menu-trigger, .mobilenav").click(function () {
    $(".mobilenav").fadeToggle(500);
  });
  $(".menu-trigger, .mobilenav").click(function () {
    $(".top-menu").toggleClass("top-animate");
    $(".mid-menu").toggleClass("mid-animate");
    $(".bottom-menu").toggleClass("bottom-animate");
  });

  /* ========================================================================
     On click menu item animate to the section
   ========================================================================== */
  $(".mobilenav li, .back-to-top").on('click', function() {
    var target = $(this).data('rel');
    var $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing');
  });

  /* Header Height Control
   ========================================================================== */
  var height = $(window).height();
  if(height<600) {
    height = 600;
  }
  $('header').css({
    'minHeight': 0,
    'maxHeight': 'none',
    'height': height
  });
  /* ========================================================================
   Header carousel
   ========================================================================== */
  $('.carousel').carousel({
    interval: 50000
  })

  /* ========================================================================
     Wow Animation
   ========================================================================== */
  var wow = new WOW({
    mobile: false
  });
  wow.init();

  /* ========================================================================
     Collapse event
   ========================================================================== */
  $('.panel-collapse').on('shown.bs.collapse', function () {
   $(this).parent().find(".state").html('<strong>-</strong>');
  });

  $('.panel-collapse').on('hidden.bs.collapse', function () {
    $(this).parent().find(".state").html('<strong>+</strong>');
  });

  /* ========================================================================
     Animated Skill Bar
   ========================================================================== */
  $('.skill-bar li').each(function (i) {
    $(this).appear(function() {
      $(this).animate({opacity:1,left:"0px"},1200);
      var b = $(this).find(".wrapper span").attr("data-width");
      $(this).find("span").animate({
      width: b + "%"
      }, 1700, "swing");
    });
  });

  /* ========================================================================
    Member Skill chart
   ========================================================================== */
    for(var i=1; i<=16; i++) { // 16 for 4 members | 4 x 4 = 16
      $('#skill-' + i).circliful();
    }

  /* ========================================================================
    Testimonial Carousel
   ========================================================================== */
  var testimonialCarousel = $("#testimonial-carousel");
  testimonialCarousel.owlCarousel({
    autoPlay : 5000,
    stopOnHover : true,
    slideSpeed  :  1000,
    paginationSpeed : 500,
    goToFirstSpeed : 2000,
    singleItem : true,
    responsive : true,
    addClassActive : true,
    navigation: false
  });

  /* ========================================================================
     Nivo Lightbox
   ========================================================================== */
  $('.portfolio a').nivoLightbox({
    effect: 'fall'
  });


  /* ========================================================================
    Grab Last Tweet
   ========================================================================== */
  var config = {
    "id": '526796576736301056',
    "domId": 'tweets',
    "maxTweets": 1, // defines how many tweet to show
    "enableLinks": false,
    "showUser": false,
    "showTime": false,
    "dateFunction": '',
    "showRetweet": false,
    "customCallback": handleTweets,
    "showInteraction": false
  };
  function handleTweets(tweets){
      var x = tweets.length;
      var n = 0;
      var element = document.getElementById('tweets');
      var html = '<p>';
      while(n < x) {
        html +=  tweets[n];
        n++;
      }
      html += '</p>';
      element.innerHTML = html;
  }
  twitterFetcher.fetch(config);


  /* ========================================================================
    Portfolio Filter
   ========================================================================== */
  var container = $('.portfolio-wrapper'); // portfoolio container

  container.isotope({
      itemSelector: '.portfolio-item',
      animationEngine: 'best-available',
      animationOptions: {
          duration: 200,
          queue: false
      },
      layoutMode: 'fitRows'
  });

  // sort items on button click
  $('.filters a').on( 'click', function() {
    $('.filters a').removeClass('active');
    $(this).addClass('active');
    var filterValue = $(this).attr('data-filter');
    container.isotope({
      filter: filterValue
    });
    initIsotope();
    return false;
  });

  // Split columns for different size layout
  function splitColumns() {
      var windowWidth = $(window).width(),
      columnNumber = 1; //  default column number
      if (windowWidth > 1200) {
          columnNumber = 4;
      } else if (windowWidth > 767) {
          columnNumber = 3;
      } else if (windowWidth > 600) {
          columnNumber = 2;
      }
      return columnNumber;
  }
  // Set width for portfolio item
  function setColumns() {
    var windowWidth = $(window).width(),
        columnNumber = splitColumns(),
        postWidth = Math.floor(windowWidth / columnNumber);

    container.find('.portfolio-item').each(function() {
        $(this).css({
            width: postWidth + 'px'
        });
    });
  }
  // initialize isotope
  function initIsotope() {
      setColumns();
      container.isotope('layout');
  }
  container.imagesLoaded(function() {
      setColumns();
  });
  $(window).bind('resize', function() {
      initIsotope();
  });
  $(window).load(function(){
    initIsotope();
  });

  /* ========================================================================
     Component: Map
   ========================================================================== */
  google.maps.event.addDomListener(window, 'load', init);

  function init() {
    var myLatlng = new google.maps.LatLng(49.2401, 6.9969);
    var tokyo = new google.maps.LatLng(35.6894, 139.6917);
    var telaviv = new google.maps.LatLng(32.0852999, 34.7817675999);
    var seychelles = new google.maps.LatLng(-4.679574, 55.491977);
    var bonaberi = new google.maps.LatLng(4.0776879, 9.650840099);
    var vancouver = new google.maps.LatLng(49.2827291, -123.1207375);
    var reunion = new google.maps.LatLng(-21.115141, 55.536384);
    var paris = new google.maps.LatLng(48.856614, 2.352221);
    var bangkok = new google.maps.LatLng(13.7563309, 100.5017651);
    var lapaz = new google.maps.LatLng(-16.489689,-68.119293599);
    var vallingby = new google.maps.LatLng(59.3670813,17.86914339);
    var portland = new google.maps.LatLng(27.8772463,-97.323880);
    var capetown = new google.maps.LatLng(-33.9248685,18.4240552);


      
    var mapOptions = {
        zoom: 2,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        center: myLatlng,
        styles: [{featureType:"landscape",stylers:[{saturation:-100},{lightness:65},{visibility:"on"}]},{featureType:"poi",stylers:[{saturation:-100},{lightness:51},{visibility:"simplified"}]},{featureType:"road.highway",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"road.arterial",stylers:[{saturation:-100},{lightness:30},{visibility:"on"}]},{featureType:"road.local",stylers:[{saturation:-100},{lightness:40},{visibility:"on"}]},{featureType:"transit",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"administrative.province",stylers:[{visibility:"off"}]/**/},{featureType:"administrative.locality",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",stylers:[{visibility:"on"}]/**/},{featureType:"water",elementType:"labels",stylers:[{visibility:"on"},{lightness:-25},{saturation:-100}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]}],
    };
    var mapElement = document.getElementById('map-container');
    var map = new google.maps.Map(mapElement, mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Headquarter'
    });
      
       var marker = new google.maps.Marker({
        position: tokyo,
        map: map,
        title: 'Schwenk - Tokyo'
    });
         var marker = new google.maps.Marker({
        position: telaviv,
        map: map,
        title: 'Schwenk - Tel Aviv'
    });
       var marker = new google.maps.Marker({
        position: seychelles,
        map: map,
        title: 'Schwenk - Seychelles'
    });
      var marker = new google.maps.Marker({
        position: bonaberi,
        map: map,
        title: 'Schwenk - Bonaberi'
    });
      var marker = new google.maps.Marker({
        position: vancouver,
        map: map,
        title: 'Schwenk - Vancouver'
    });
      var marker = new google.maps.Marker({
        position: vancouver,
        map: map,
        title: 'Schwenk - Reunion'
    });
      var marker = new google.maps.Marker({
        position: paris,
        map: map,
        title: 'Schwenk - Eiffel'
    });
      var marker = new google.maps.Marker({
        position: bangkok,
        map: map,
        title: 'Schwengkok'
    });
      var marker = new google.maps.Marker({
        position: lapaz,
        map: map,
        title: 'Schwenk - La Paz, Bolivia'
    });
    var marker = new google.maps.Marker({
        position: vallingby,
        map: map,
        title: 'Schwenk - Vällingby'
    });
    var marker = new google.maps.Marker({
        position: portland,
        map: map,
        title: 'Schwenk - Portland'
    });
    var marker = new google.maps.Marker({
        position: capetown,
        map: map,
        title: 'Schwenk the Cape'
    });
  }

  /* ========================================================================
     Component: Contact Form
   ========================================================================== */

    function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        return pattern.test(emailAddress);
    };

    $("#contact-formFFFF").submit(function (e) {
        e.preventDefault();
        var firstName = $("#first-name").val();
        var lastName = $("#last-name").val();
        var email = $("#email").val();
        var projectName = $("#project-name").val();
        var description = $("#description").val();

        var dataString = 'first_name=' + firstName + '&last_name=' + lastName + '&email=' + email + '&project_name=' + projectName + '&description=' + description;

        if (isValidEmail(email) && (description.length > 1) && (firstName.length > 1)) {
            $.ajax({
                type: "POST",
                url: "sendmail.php",
                data: dataString,
                success: function () {
                    notie.alert(1, 'Your message has been sent successfully.', 2.5);
                    $("#contact-form").val("");
                }
            });
        } else {
            notie.alert(3, 'Mail could not be sent. Please fill up all forms.', 2.5);
        }

        return false;
    });
});


$(function () {

    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "sendmail.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    })
});