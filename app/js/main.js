

$(function(){



  /*--------------view button---------------------*/

  $('.shop-content__filter-btn').on('click', function(){
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
    
  });



/*-------------change view shop--------------*/

$('.filter-list').on('click', function() {
  $('.product-item').addClass('product-item--list');
});
$('.filter-grid').on('click', function() {
  $('.product-item').removeClass('product-item--list');
});

/*-------------tabs--------------*/

$('.details-tabs__top-item').on('click', function(e){
  e.preventDefault();
  $('.details-tabs__top-item').removeClass('details-tabs__top-item--active');
  $(this).addClass('details-tabs__top-item--active');

  $('.details-tabs__content-item').removeClass('details-tabs__content-item--active');
  $($(this).attr('href')).addClass('details-tabs__content-item--active');
});


/*---------------form styler-----------------*/

$('.select-style, .details-item__num').styler();


  /*-----------ion rangeslider(filter)-------------------*/

  $(".filter__price-input").ionRangeSlider({
    type: "double",
    grid: false,
    prefix: "$",
    onStart: function (data){
      $('.filer__price-from').text(data.from);
      $('.filer__price-to').text(data.to);
    },
    onChange: function (data){
      $('.filer__price-from').text(data.from);
      $('.filer__price-to').text(data.to);
    }

  });

  /*-------------------slider------------*/

  $('.slider__inner').slick({
      dots: true,
      arrows: false,
      fade: true,
      autoplay: true,
      autoplaySpeed: 2000,
  });

  $('.blog-one__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg"width="7px"height="14px"viewBox="0 0 7 14"version="1.1"><path d="M 0.257812 6.382812 C -0.0859375 6.722656 -0.0859375 7.277344 0.257812 7.621094 L 4.632812 11.996094 C 4.972656 12.335938 5.527344 12.335938 5.871094 11.996094 C 6.210938 11.652344 6.210938 11.097656 5.871094 10.757812 L 2.113281 7 L 5.867188 3.242188 C 6.210938 2.902344 6.210938 2.347656 5.867188 2.003906 C 5.527344 1.664062 4.972656 1.664062 4.628906 2.003906 L 0.253906 6.378906 Z M 0.257812 6.382812 "/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg"width="7px" height="14px" viewBox="0 0 7 14" version="1.1"><path d="M 6.742188 6.382812 C 7.085938 6.722656 7.085938 7.277344 6.742188 7.621094 L 2.367188 11.996094 C 2.027344 12.335938 1.472656 12.335938 1.128906 11.996094 C 0.789062 11.652344 0.789062 11.097656 1.128906 10.757812 L 4.886719 7 L 1.132812 3.242188 C 0.789062 2.902344 0.789062 2.347656 1.132812 2.003906 C 1.472656 1.664062 2.027344 1.664062 2.371094 2.003906 L 6.746094 6.378906 Z M 6.742188 6.382812 "/></svg></button>',
    infinite: false,
  });

/*-------------------slider-details------------*/
$('.details-slide__big').slick({
  arrows: false,
  fade: true,
  asNavFor: '.details-slide__thumb',
  draggable: true
});
$('.details-slide__thumb').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.details-slide__big',
  focusOnSelect: true,
  vertical: true,
  draggable: true
});

 /*-----------rating stars---------------*/
 $('.product-item__stars, .details-item__stars').rateYo({
   // rating: 3.6,
   starWidth: "20px",
   normalFill: "#ccccce",
   ratedFill: "#ffc35b",
   // readOnly: true,
   "starSvg": '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">'+
   '<path d="M6.01212 0.927074C6.31142 0.00575399 7.61482 0.00575399 7.91422 0.927074L8.80132 3.65735C8.93512 4.06937 9.31912 4.34834 9.75232 4.34834H12.6231C13.5918 4.34834 13.9946 5.58794 13.2109 6.15735L10.8883 7.84482C10.5379 8.09943 10.3912 8.55083 10.5251 8.96283L11.4122 11.6932C11.7115 12.6145 10.657 13.3806 9.87332 12.8112L7.55092 11.1238C7.20042 10.8691 6.72582 10.8691 6.37532 11.1238L4.05292 12.8112C3.26922 13.3806 2.21472 12.6145 2.51402 11.6932L3.40122 8.96283C3.53502 8.55083 3.38842 8.09943 3.03792 7.84482L0.715323 6.15734C-0.0683767 5.58794 0.334424 4.34834 1.30312 4.34834H4.17392C4.60712 4.34834 4.99112 4.06937 5.12502 3.65735L6.01212 0.927074Z"></path>'+
   '</svg>'
  })

// /*----------stars----------------*/

// $('.comment-form__radio').on('click', function(){
//   this.style.fill = '#8d8d8d';
// });
  




  /*----------countdown timer----------------*/
  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }
 
  function initializeClock(id, endtime) {
   const clock = document.querySelector('.deal__items');
   const daysSpan = clock.querySelector('.deal__days');
   const hoursSpan = clock.querySelector('.deal__hours');
   const minutesSpan = clock.querySelector('.deal__minutes');
   const secondsSpan = clock.querySelector('.deal__seconds');
 
   function updateClock() {
     const t = getTimeRemaining(endtime);
 
     daysSpan.innerHTML = t.days;
     hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
     minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
     secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
 
     if (t.total <= 0) {
       clearInterval(timeinterval);
     }
   }
 
   updateClock();
   const timeinterval = setInterval(updateClock, 1000);
  }
 
  //  const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
  const deadline =$('.deal__items').attr('data-time');
  initializeClock('deal__items', deadline);





});
