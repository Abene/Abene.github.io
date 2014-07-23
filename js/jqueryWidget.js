(function(){

	$(document).ready(function() {

		$("#dropifiwidget_contact_right_side").addClass("dropifiwidget_hideRight");
		$("#vertical_toggle").addClass("vertical_buttonHide");

		/*Changing the content of the Iframe*/
		var srcAttr = $('#dropifiwidget_iframe');
		var screenWidth = window.screen.width;
		if(screenWidth == 480){
			srcAttr.attr('src','content_widget2.html');
		}
		else{
			srcAttr.attr('src','content_widget.html');
		}
		
		//var widgetPlacer = document.getElementById("widget-postion").value;
		var widgetPlacer = $('#widget-postion').find(":selected").val();

		$.fn.HorizontalSlideToggle = function(speed, fn) {
			this.animate({
				'width':'toggle'
			}, {duration:speed, complete:fn});

			var marginRight = $('#horizontal_toggle').css('margin-right');
			var marginLeft = $('#horizontal_toggle').css('margin-left');
			if (widgetPlacer=="right") {
				if(marginRight == '0px'){
					$('#horizontal_toggle').stop(true, false).animate({
					'margin-right':'295px',
					}, {duration:speed, complete:fn});

				}
				else{
					$('#horizontal_toggle').stop(true, false).animate({
					'margin-right':'0px',
					}, {duration:speed, complete:fn});
				}
			}
			else{
				if (marginLeft=='0px') {
					$('#horizontal_toggle').stop(true, false).animate({
					'margin-left':'295px',
					}, {duration:speed, complete:fn});
				}
				else{
					$('#horizontal_toggle').stop(true, false).animate({
					'margin-left':'0px',
					}, {duration:speed, complete:fn});
				}

			}
	
			return this;
		};
		

		$('#horizontal_toggle').on('click', function () {
			$('#dropifiwidget_contact_right_side').HorizontalSlideToggle(300, function() {console.log('complete!')});	
		});

		/*$('#close-button').on('click', function () {
			$('#dropifiwidget_contact_right_side').HorizontalSlideToggle(300, function() {console.log('complete!')});	
		});*/

		
	$.fn.VerticalSlideToggle = function (speed, fn){
			this.animate({
				'height':'toggle'
			}, {duration:speed, complete:fn});	

			var marginTop = $('#horizontal_toggle').css('top');
			var marginBottom = $('#horizontal_toggle').css('bottom');

			if(widgetPlacer=='top'){
				var getHeight  = $('#dropifiwidget_contact_right_side').height();
				console.log(top,"Top");
				var topOption = {};
				topOption['top'] = getHeight;
				if (marginTop == '0px'){
					$('#vertical_toggle').stop(true, false).animate({
					'margin-top':topOption,
					}, {duration:speed, complete:fn});
				}
				else{
					$('#vertical_toggle').stop(true, false).animate({
					'margin-top':'0px',
					}, {duration:speed, complete:fn});
				}
			}
			else{

				var get_Height  = $('#dropifiwidget_contact_right_side').height();
				var bottomOption = {};
				bottomOption['bottom'] = get_Height;
				
				if (marginBottom=='0px'){
					$('#vertical_toggle').stop(true, false).animate({
					'margin-bottom':'100',
					}, {duration:speed, complete:fn});
				}
				else{
					$('#vertical_toggle').stop(true, false).animate({
					'margin-bottom':'0px',
					}, {duration:speed, complete:fn});
				}
			}

			return this;
		};

		$('#vertical_toggle').on('click', function () {
			$('#dropifiwidget_contact_right_side').VerticalSlideToggle(300, function() {console.log('complete!')});	
		});

		/*$('#vertical_toggle').on('click', function () {
			$('#dropifiwidget_contact_right_side').VerticalSlideToggle(300, function() {console.log('complete!')});	
		});*/


		$.fn.placer = function(){
			widgetPlacer = $('#widget-postion').find(":selected").val();
			console.log(widgetPlacer);

			switch (widgetPlacer){
				case 'top': 
							$("#vertical_toggle").removeClass("vertical_buttonHide");
							$("#horizontal_toggle").addClass("horizontal_buttonHide");

							$("#vertical_toggle").removeClass("dropifiwidget_Bottom");
							$("#vertical_toggle").addClass("dropifiwidget_Top");

							$("#dropifiwidget_contact_right_side").addClass("dropifiwidget_hideTop");
							$("#dropifiwidget_contact_right_side").removeClass("dropifiwidget_hideRight");
							$("#dropifiwidget_contact_right_side").removeClass("dropifiwidget_hideLeft");
							$("#dropifiwidget_contact_right_side").removeClass("dropifiwidget_hideBottom");
							break;
				case 'bottom': 
								$("#vertical_toggle").removeClass("vertical_buttonHide");
								$("#horizontal_toggle").addClass("horizontal_buttonHide");

								$("#vertical_toggle").removeClass("dropifiwidget_Top");
								$("#vertical_toggle").addClass("dropifiwidget_Bottom");

								$("#dropifiwidget_contact_right_side").addClass("dropifiwidget_hideBottom");
								$("#dropifiwidget_contact_right_side").removeClass("dropifiwidget_hideRight");
								$("#dropifiwidget_contact_right_side").removeClass("dropifiwidget_hideLeft");
								$("#dropifiwidget_contact_right_side").removeClass("dropifiwidget_hideTop");
								break;
				case 'left': $("#horizontal_toggle").removeClass("horizontal_button_right");
							$("#horizontal_toggle").addClass("horizontal_button_left");
							$("#horizontal_toggle").removeClass("horizontal_buttonHide");
							$("#vertical_toggle").addClass("vertical_buttonHide");
							$("#dropifiwidget_contact_right_side").removeClass("dropifiwidget_hideRight");
							$("#dropifiwidget_contact_right_side").addClass("dropifiwidget_hideLeft");

							break;
				default: $("#horizontal_toggle").removeClass("horizontal_button_left");
						$("#horizontal_toggle").addClass("horizontal_button_right");
						$("#horizontal_toggle").removeClass("horizontal_buttonHide");
						$("#vertical_toggle").addClass("vertical_buttonHide");
						$("#dropifiwidget_contact_right_side").removeClass("dropifiwidget_hideLeft");
						$("#dropifiwidget_contact_right_side").addClass("dropifiwidget_hideRight");
			}
		};
		
		$('#widget-postion').on('click',function(){
			$("").placer();
		});
	});

})(); 
