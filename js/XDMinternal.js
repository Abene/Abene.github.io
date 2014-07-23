(function(){
	$(document).ready(function(){
		var socket = new easyXDM.Socket({ 
			swf: "https://s3.amazonaws.com/dropifi/js/widget/easyxdm.swf",
			onReady: function(){ 
				iframe = document.createElement("iframe"); 
				iframe.src = easyXDM.query.url;
			},
			onMessage: function(url, origin){
				iframe.src = url; 
			},
			onHeightChange: function(height){
			}
		});

	});
})();
