(function() {
	chrome.storage.sync.get({src:null},function(script) {
		if(script.src==null){
			load_default(function(src){
				append_script(src);
			});
		}else{
			append_script(script.src);
		}
	});

	function append_script(text){
		var s = $("<script>");
		s.text(text);
		$("body").append(s);
	}

	function load_default(callback){
		$.ajax({
			type: "GET",
			url: chrome.extension.getURL("js/default.js"),
			dataType: "text",
			success: callback
		});
	}

	/*
	var observer = new MutationObserver(function(mutations){
		for(var i=0;i<mutations.length;i++){
			//console.log(mutations[i].target);
		}
		//mutations.forEach(function(mutation){});
	});
	*/

})();
