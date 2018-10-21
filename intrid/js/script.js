$(document).ready(function(){
	$('input:radio[name=choise]').change(function() {
	        if (this.value == 'hide') {
	            $('.recipient').fadeOut(500);
	        }
	        else if (this.value == 'show') {
	            $('.recipient').fadeIn(500);
	        }
	    });
	//Делаем меню-бургер
	$('.mainnav-mobile .burger').click(function(event){
		event.preventDefault();
		$('.mainnav-nav').fadeToggle(500);
	});
	//Добавляем блок с суммой заказа в конец страницы
	if(window.matchMedia('(max-width: 970px)').matches)
	{
	  $('#toorder').appendTo('.maininfo-page-left');
	}
	$(window).resize(function() {
	  if ($(window).width() < 970) {
	     $('#toorder').appendTo('.maininfo-page-left');
	  }
	 else {
	 	$('#toorder').appendTo('.maininfo-page-right');
	  };
	});
	//создаем радиокнопки из div'ов с оплатой
	$('.payment-radio .radio').click(function(){
	    $('.payment-radio .radio').removeClass('selected');
	    $(this).addClass('selected');
	});

});