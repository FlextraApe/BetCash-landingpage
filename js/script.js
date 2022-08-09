$("input[type='range']").change(function() {
    $(this).next('span').html(this.value);
  }).change();

var w = 0;
$(function() {
    "use strict";


    // ***** Preloader ***** //
    $(window).on("load", function() {
        setTimeout(function() {
          $('#preloader').addClass('loaded');
          $('#preloader').delay(800).fadeOut();
        }, 2200);
    });


    // ***** Sticky Header ***** //
    $(window).on("scroll", function(){
        if ($(this).scrollTop() > 40) {
            $('.header').addClass('sticky-header');
        } else {
            $('.header').removeClass('sticky-header');
        }
    });


    // ***** Menu Toggle Start ***** //
    $(document).ready(function(){
        $(".menu-toggle").click(function(){
            $(".main-menu, .menu-toggle").toggleClass("active");
            $(".header").toggleClass("primary-color");
            $(".main-menu").slideToggle();
        });

        $(".opener").on("click", function() {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
                $(this)
                    .siblings(".dropdown-content")
                    .slideUp(200);
            } else {
                $(".opener").removeClass("active");
                $(this).addClass("active");
                $(".dropdown-content").slideUp(200);
                $(this)
                    .siblings(".dropdown-content")
                    .slideDown(300);
                }
        });

        $("#customRange").on("change click", function(){
            $(".form-Year").text(this.value + " Year");
            $(".earned").text(($("#selected-amount").val() * 0.15 * this.value).toLocaleString());
            $(".total").text(($("#selected-amount").val() * 0.15 * this.value + $("#selected-amount").val() * 1).toLocaleString());
        });

        $("#currency-select").on("change", function() {
            $(".selected-currency").text(this.value);
        });

        $("#selected-amount").on("change", function() {
            $(".earned").text((this.value * 0.15 * $("#customRange").val()).toLocaleString());
            $(".total").text((this.value * 0.15 * $("#customRange").val() + this.value * 1).toLocaleString());
        })
    });


    // ***** Img Hover Tilt ***** //
    if ($(".img-tilt").length > 0) {
        $('.img-tilt').tilt({
            reset: false
        });
    }


    // ***** Heart Fill ***** //
    $(document).ready(function () {
        $(".heart-icon-box").click(function () {
            $(this).toggleClass("heart-fill");
        });
    });


    // ***** Header Search ***** //
    $(document).ready(function(){
        const $menu = $('.search-form-modal');
        $(document).mouseup(e => {
            if (!$menu.is(e.target)
            && $menu.has(e.target).length === 0)
            {
                $(".search-form-modal").removeClass("open");
            }
        });

        $(".header .search").on('click', function(){
            $(".search-form-modal").addClass("open");
            $(".search-form .form-control").focus();
        });

        $(".search-form .btn-close").on('click', function(){
            $(".search-form-modal").removeClass("open");
        });
    });


    // ***** Header Profile ***** //
    if ($(".header").length > 0) {
        const $menu = $('.header-profile-in,.header-profile a');
        $(document).mouseup(e => {
            if (!$menu.is(e.target)
            && $menu.has(e.target).length === 0)
            {
                $(".header-profile-in").slideUp();
            }
        });

        $('.header-profile a').on('click', () => {
            $(".header-profile-in").slideToggle();
        });
    }


    // ***** Tabing ***** //
    $('.explore-filter ul li a,.nav-tab ul li a').on('click', function(){
        var target = $(this).attr('data-tab');
        $('.explore-filter ul li a,.nav-tab ul li a').removeClass('active');
        $(this).addClass('active');
        $("#"+target).fadeIn(1000).siblings(".tab-panel").hide();
        return false;
    });


    // ***** Explore Creator Load More ***** //
    $(function() {
        $(".all-creator").slice(0, 12).show();
        $("#loadmore").on('click', function(e) {
            e.preventDefault();
            $(".all-creator:hidden").slice(0, 8).slideDown();
            if ($(".all-creator:hidden").length == 0) {
              $("#loadless").fadeIn('slow');
              $("#loadless").addClass('load-less');
              $("#loadmore").hide();
            }
        });

        $("#loadless").on('click', function(e) {
            e.preventDefault();
            $('.all-creator:not(:lt(12))').fadeOut();
            $("#loadmore").fadeIn('slow');
            $("#loadless").removeClass('load-less');
            $("#loadless").hide();
          });
    });


    // ***** Explore Artwork Load More ***** //
    $(function() {
        $(".all-auction-box").slice(0, 6).show();
        $("#loadmore").on('click', function(e) {
            e.preventDefault();
            $(".all-auction-box:hidden").slice(0, 3).slideDown();
            if ($(".all-auction-box:hidden").length == 0) {
              $("#loadless").fadeIn('slow');
              $("#loadless").addClass('load-less');
              $("#loadmore").hide();
            }
        });

        $("#loadless").on('click', function(e) {
            e.preventDefault();
            $('.all-auction-box:not(:lt(6))').fadeOut();
            $("#loadmore").fadeIn('slow');
            $("#loadless").removeClass('load-less');
            $("#loadless").hide();
          });
    });


    // ***** Activity Load More ***** //
    $(function() {
        $(".activity-box-content").slice(0, 6).show();
        $("#loadmore").on('click', function(e) {
            e.preventDefault();
            $(".activity-box-content:hidden").slice(0, 5).slideDown();
            if ($(".activity-box-content:hidden").length == 0) {
              $("#loadless").fadeIn('slow');
              $("#loadless").addClass('load-less');
              $("#loadmore").hide();
            }
        });

        $("#loadless").on('click', function(e) {
            e.preventDefault();
            $('.activity-box-content:not(:lt(6))').fadeOut();
            $("#loadmore").fadeIn('slow');
            $("#loadless").removeClass('load-less');
            $("#loadless").hide();
          });
    });


    // ***** Activity Filter ***** //
    $(".activity-filter ul li a").on('click', function(){
        $(this).addClass('active');
    });

    $(".clear-filter a").on('click', function(){
        $(".activity-filter ul li a").removeClass('active');
    });


    // ***** Single Artwork Load More ***** //
    $(function() {
        $(".single-auction-box").slice(0, 4).show();
        $("#loadmore").on('click', function(e) {
            e.preventDefault();
            $(".single-auction-box:hidden").slice(0, 4).slideDown();
            if ($(".single-auction-box:hidden").length == 0) {
              $("#loadless").fadeIn('slow');
              $("#loadless").addClass('load-less');
              $("#loadmore").hide();
            }
        });

        $("#loadless").on('click', function(e) {
            e.preventDefault();
            $('.single-auction-box:not(:lt(4))').fadeOut();
            $("#loadmore").fadeIn('slow');
            $("#loadless").removeClass('load-less');
            $("#loadless").hide();
          });
    });


    // ***** Timer ***** //
    if ($("#timer").length > 0) {
        // var target_date = new Date().getTime() + (1000*3600*10); // set the countdown date
        var your_date = new Date();
        var numberOfDaysToAdd = 11;
        your_date.setDate(your_date.getDate() + numberOfDaysToAdd);

        var hours, minutes, seconds;
        var countdown = document.getElementById("timer");
        
        getCountdown();
        setInterval(function () { getCountdown(); }, 1000);

        function getCountdown(){
            var current_date = new Date().getTime();
            var seconds_left = (your_date - current_date) / 1000;
            seconds_left = seconds_left % 86400; 
            hours = pad( parseInt(seconds_left / 3600) );
            seconds_left = seconds_left % 3600;
            minutes = pad( parseInt(seconds_left / 60) );
            seconds = pad( parseInt( seconds_left % 60 ) );
            countdown.innerHTML = "<span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>"; 
        }

        function pad(n) {
            return (n < 10 ? '0' : '') + n;
        }
    }


    // ***** Contact Form SMS Start ***** //
    $('.contactfrm').on('submit',function(e){
        e.preventDefault();
        $('.contactfrmmsg').slideDown('slow');
    });


    // ***** FAQ According Start ***** //
    $(function() {
        $('.faq-title').on("click", function(j) {
            var dropDown = $(this).closest('.faq-box').find('.faq-panel');
            $(this).closest('.tab-panel').find('.faq-panel').not(dropDown).slideUp();
        
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            } else {
                $(this).closest('.tab-panel').find('.faq-title.active').removeClass('active');
                $(this).addClass('active');
            }
            dropDown.stop(false, true).slideToggle();
            j.preventDefault();
        });
    });


    // ***** Multiple Countdown Start ***** //
    if (jQuery('[data-countdown]').length > 0) {

        jQuery('[data-countdown]').each(function(countKey) {
            const currentRef = jQuery(this);
            const data_time = jQuery(this).attr('data-time');
            var dataTimeArr = data_time.split(':');

            // current time + set data-time value
            const currentDate = new Date();
            const currentTime = currentDate.getTime();
            currentDate.setHours(currentDate.getHours() + parseInt(dataTimeArr[0]));
            currentDate.setMinutes(currentDate.getMinutes() + parseInt(dataTimeArr[1]));
            currentDate.setSeconds(currentDate.getSeconds() + parseInt(dataTimeArr[2]));

            // count timer
            var dataTimer = setInterval(() => {
                const difference = +currentDate - +new Date();

                if (difference > 0) {
                    const parts = {
                        //days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                        minutes: Math.floor((difference / 1000 / 60) % 60),
                        seconds: Math.floor((difference / 1000) % 60),
                    };
                    currentRef.find('.hours').html(parts.hours > 9 ? parts.hours : '0' + (parts.hours).toString());
                    currentRef.find('.minutes').html(parts.minutes > 9 ? parts.minutes : '0' + (parts.minutes).toString());
                    currentRef.find('.seconds').html(parts.seconds > 9 ? parts.seconds : '0' + (parts.seconds).toString());

                    // hours, minutes and seconds then timer off
                    if (parts.hours == 0 && parts.minutes == 0 && parts.seconds == 0) {
                        clearInterval(dataTimer);
                    }
                }
            }, 1000);

        })
    }


    // ***** Banner slider ***** //
    if ($(".home-banner-slider").length > 0) {
        $('.home-banner-slider').owlCarousel({
            loop:true,
            nav: true,
            dots: false,
            items: 1,
            smartSpeed: 900,
            responsiveClass: true,
            autoplay:true,
            autoplayTimeout:5000,
            animateOut: 'fadeOut',
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    dots: false,
                    nav: true,
                },
                767: {
                    items: 1,
                    dots: false,
                    nav: true,
                },
            }
        });
    }


    // ***** Auction slider ***** //
    if ($(".auction-slider,.blog-slider").length > 0) {
        $('.auction-slider,.blog-slider').owlCarousel({
            loop: false,
            nav: false,
            dots: false,
            items: 3,
            smartSpeed: 700,
            responsiveClass: true,
            autoplay:false,
            autoplayTimeout:5000,
            margin: 30,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    loop: true,
                    nav: false,
                    dots:true,
                },
                650: {
                    items: 2,
                    loop: false,
                    dots: false,
                    nav: false,
                },
                992: {
                    items: 3,
                    dots: false,
                    nav: false,
                },
            }
        });
    }


    // ***** Auction slider 2 ***** //
    if ($(".auction-slider-2").length > 0) {
        $('.auction-slider-2').owlCarousel({
            loop: false,
            nav: true,
            dots: false,
            items: 3,
            smartSpeed: 700,
            responsiveClass: true,
            autoplay:false,
            autoplayTimeout:5000,
            margin: 30,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    loop: true,
                    nav: false,
                    dots:true,
                },
                650: {
                    items: 2,
                    loop: false,
                    dots: true,
                    nav: false,
                },
                992: {
                    items: 3,
                    dots: false,
                    nav: true,
                },
            }
        });
    }

});

const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");


let question = document.querySelectorAll(".question");

question.forEach(question => {
  question.addEventListener("click", event => {
    const active = document.querySelector(".question.active");
    if(active && active !== question ) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if(question.classList.contains("active")){
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  })
})


function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// // Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();


function openone(evt, cityName) {
    var i, tabcontent, tablinksone;
    tabcontent = document.getElementsByClassName("tabcontentone");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinksone = document.getElementsByClassName("tablinksone");
    for (i = 0; i < tablinksone.length; i++) {
      tablinksone[i].className = tablinksone[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
//   // Get the element with id="defaultOpen" and click on it
//   document.getElementById("defaultOpen").click();

const lotteryABI = [{"inputs":[{"internalType":"address","name":"_busdTokenAddress","type":"address"},{"internalType":"address","name":"_randomGeneratorAddress","type":"address"},{"internalType":"address","name":"_freeTokenAddress","type":"address"},{"internalType":"address","name":"_manager","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"AdminTokenRecovery","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"lotteryId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"firstTicketIdNextLottery","type":"uint256"}],"name":"LotteryClose","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"lotteryId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"injectedAmount","type":"uint256"}],"name":"LotteryInjection","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"lotteryId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"finalNumber","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"countWinningTickets","type":"uint256"}],"name":"LotteryNumberDrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"lotteryId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"startTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"priceTicketInBusd","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"firstTicketId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"injectedAmount","type":"uint256"}],"name":"LotteryOpen","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"address","name":"treasury","type":"address"},{"indexed":false,"internalType":"address","name":"injector","type":"address"}],"name":"NewOperatorAndTreasuryAndInjectorAddresses","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"randomGenerator","type":"address"}],"name":"NewRandomGenerator","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"claimer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"lotteryId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"numberTickets","type":"uint256"}],"name":"TicketsClaim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":true,"internalType":"uint256","name":"lotteryId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"numberTickets","type":"uint256"}],"name":"TicketsPurchase","type":"event"},{"inputs":[],"name":"MAX_LENGTH_LOTTERY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_TREASURY_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_DISCOUNT_DIVISOR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_LENGTH_LOTTERY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"busdToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lotteryId","type":"uint256"},{"internalType":"uint32[]","name":"_ticketNumbers","type":"uint32[]"}],"name":"buyTickets","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_discountDivisor","type":"uint256"},{"internalType":"uint256","name":"_priceTicket","type":"uint256"},{"internalType":"uint256","name":"_numberTickets","type":"uint256"}],"name":"calculateTotalPriceForBulkTickets","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"_randomGeneratorAddress","type":"address"}],"name":"changeRandomGenerator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lotteryId","type":"uint256"},{"internalType":"uint256[]","name":"_ticketIds","type":"uint256[]"},{"internalType":"uint32[]","name":"_brackets","type":"uint32[]"}],"name":"claimTickets","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lotteryId","type":"uint256"}],"name":"closeLottery","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentLotteryId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentTicketId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lotteryId","type":"uint256"},{"internalType":"bool","name":"_autoInjection","type":"bool"}],"name":"drawFinalNumberAndMakeLotteryClaimable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"freeToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lotteryId","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"injectFunds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"injectorAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"manager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxNumberTicketsPerBuyOrClaim","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPriceTicketInBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minPriceTicketInBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operatorAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingAmountToWinners","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingInjectionNextLottery","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"randomGenerator","outputs":[{"internalType":"contract IRandomNumberGenerator","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256","name":"_tokenAmount","type":"uint256"}],"name":"recoverWrongTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxNumberTicketsPerBuy","type":"uint256"}],"name":"setMaxNumberTicketsPerBuy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minPriceTicketInBusd","type":"uint256"},{"internalType":"uint256","name":"_maxPriceTicketInBusd","type":"uint256"}],"name":"setMinAndMaxTicketPriceInBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operatorAddress","type":"address"},{"internalType":"address","name":"_treasuryAddress","type":"address"},{"internalType":"address","name":"_injectorAddress","type":"address"}],"name":"setOperatorAndTreasuryAndInjectorAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_endTime","type":"uint256"},{"internalType":"uint256","name":"_priceTicketInBusd","type":"uint256"},{"internalType":"uint256","name":"_discountDivisor","type":"uint256"},{"internalType":"uint256[6]","name":"_rewardsBreakdown","type":"uint256[6]"},{"internalType":"uint256","name":"_treasuryFee","type":"uint256"}],"name":"startLottery","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasuryAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"viewCurrentLotteryId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lotteryId","type":"uint256"}],"name":"viewLottery","outputs":[{"components":[{"internalType":"enum CALottery.Status","name":"status","type":"uint8"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"uint256","name":"priceTicketInBusd","type":"uint256"},{"internalType":"uint256","name":"discountDivisor","type":"uint256"},{"internalType":"uint256[6]","name":"rewardsBreakdown","type":"uint256[6]"},{"internalType":"uint256","name":"treasuryFee","type":"uint256"},{"internalType":"uint256[6]","name":"busdPerBracket","type":"uint256[6]"},{"internalType":"uint256[6]","name":"countWinnersPerBracket","type":"uint256[6]"},{"internalType":"uint256","name":"firstTicketId","type":"uint256"},{"internalType":"uint256","name":"firstTicketIdNextLottery","type":"uint256"},{"internalType":"uint256","name":"amountCollectedInBusd","type":"uint256"},{"internalType":"uint32","name":"finalNumber","type":"uint32"}],"internalType":"struct CALottery.Lottery","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_ticketIds","type":"uint256[]"}],"name":"viewNumbersAndStatusesForTicketIds","outputs":[{"internalType":"uint32[]","name":"","type":"uint32[]"},{"internalType":"bool[]","name":"","type":"bool[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lotteryId","type":"uint256"},{"internalType":"uint256","name":"_ticketId","type":"uint256"},{"internalType":"uint32","name":"_bracket","type":"uint32"}],"name":"viewRewardsForTicketId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_lotteryId","type":"uint256"},{"internalType":"uint256","name":"_cursor","type":"uint256"},{"internalType":"uint256","name":"_size","type":"uint256"}],"name":"viewUserInfoForLotteryId","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint32[]","name":"","type":"uint32[]"},{"internalType":"bool[]","name":"","type":"bool[]"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
var endTime = Math.floor((Date.now()) / 1000);

function parseBigAmount(amount, decimals = 18) {
    return (new BigNumber(amount)).div(Math.pow(10, decimals)).toNumber();
}

function updateClock() {
    const now = Math.floor((Date.now()) / 1000);
    var timeLeft = endTime - now;
    timeLeft = timeLeft < 0 ? 0 : timeLeft;
    let h = Math.floor(timeLeft / 3600);
    const minuteLeft = timeLeft % 3600;
    let m = Math.floor(minuteLeft / 60);
    let s = minuteLeft % 60;
    let ampm = "AM";
  
    if (h > 12) {
      h = h - 12;
      ampm = "PM";
    }
  
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
  
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl, (innerText = ampm);
    setTimeout(() => {
      updateClock();
    }, 1000);
  }
  

$(document).ready(async function() {
    const web3 = new Web3(new Web3.providers.HttpProvider('https://bsc-nodes.1inch.io/', {
        timeout: 10000
    }));
    const lottery = new web3.eth.Contract(lotteryABI, '0xF4AaEcBf57252668eD3c4dFFa6058bd624Ee4793');
    const currentLotteryId = await lottery.methods.currentLotteryId().call();
    const currentLottery = await lottery.methods.viewLottery(currentLotteryId).call();
    endTime = currentLottery.endTime;
    updateClock();
    $("#prize").text("$" + parseBigAmount(currentLottery.amountCollectedInBusd).toLocaleString(undefined, {minimumFractionDigits: 2}));
    $("#lotteryId").text(currentLotteryId);
})