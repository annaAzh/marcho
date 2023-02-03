

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

/*---------------form styler-----------------*/

$('.select-style').styler();

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
  })

 /*-----------rating stars---------------*/
 $('.product-item__stars').rateYo({
   // rating: 3.6,
   starWidth: "20px",
   normalFill: "#ccccce",
   ratedFill: "#ffc35b",
   // readOnly: true,
   "starSvg": '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">'+
   '<path d="M6.01212 0.927074C6.31142 0.00575399 7.61482 0.00575399 7.91422 0.927074L8.80132 3.65735C8.93512 4.06937 9.31912 4.34834 9.75232 4.34834H12.6231C13.5918 4.34834 13.9946 5.58794 13.2109 6.15735L10.8883 7.84482C10.5379 8.09943 10.3912 8.55083 10.5251 8.96283L11.4122 11.6932C11.7115 12.6145 10.657 13.3806 9.87332 12.8112L7.55092 11.1238C7.20042 10.8691 6.72582 10.8691 6.37532 11.1238L4.05292 12.8112C3.26922 13.3806 2.21472 12.6145 2.51402 11.6932L3.40122 8.96283C3.53502 8.55083 3.38842 8.09943 3.03792 7.84482L0.715323 6.15734C-0.0683767 5.58794 0.334424 4.34834 1.30312 4.34834H4.17392C4.60712 4.34834 4.99112 4.06937 5.12502 3.65735L6.01212 0.927074Z"></path>'+
   '</svg>'
  })
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
