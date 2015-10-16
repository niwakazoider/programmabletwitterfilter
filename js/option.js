(function() {

	chrome.storage.sync.get({src:null},function(script) {
		if(script.src==null){
			load_default(function(src){
				$("#src").val(src.replace(/\t/g,"  "));
			});
		}else{
			$("#src").val(script.src);
		}
	});

	$("#save").click(function(){
		chrome.storage.sync.set({src:$("#src").val()}, function(){
		});
	});

	function load_default(callback){
		$.ajax({
			type: "GET",
			url: "js/default.js",
			dataType: "text",
			success: callback
		});
	}

})();
