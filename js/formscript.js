(function(){
	$(document).ready(function(){
		$("#widget-form").validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				email: {
					required: true,
					email: true,
				},
				phone: {
					required: true,
					number: true
				},
				messagepane:{
					required: true,
				}
			},
			messages: {
				name: {
					required: "This field is required",
					minlength: "Please enter atleast 2 characters"
				},
				email: {
					required: "This field is required",
					email: "Please type a valid email"
				},
				phone: {
					required: "This field is required",
					number: "A number is required"
				},
				message: {
					required: "This field is required"
				}
			},
			tooltip_options: {
				name: {
					trigger:'focus',
					placement:'bottom'
				},
				email: {
					trigger:'focus',
					placement:'bottom'
				},
				phone: {
					trigger:'focus',
					placement:'bottom'
				},
				messagepane: {
					trigger:'focus',
					placement:'bottom'
				}
			}
		});
	});
})();