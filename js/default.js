(function() {
	var exclusion_list = [" #houtiband"," #すたンプ"];

	function tweet_filter(){
		var items = getNoFilteredItems();
		for(var i=0;i<items.length;i++){
			var item = items[i];
			var text = $(item).find(".original-tweet .tweet-text").text();
			if(listIndexOf(text, exclusion_list)){
				$(item).css("opacity","0.1");
				//$(li).css("display","none");
			}
			$(item).attr("tweeterfilter_filtered_item","1");
		}
	}

	function getNoFilteredItems(){
		var items = [];
		var list = $("div.stream-container li.stream-item");
		for(var i=0;i<list.length;i++){
			var li = list[i];
			if($(li).attr("tweeterfilter_filtered_item")!="1"){
				items.push(li);
			}
		}
		return items;
	}

	function listIndexOf(text, list){
		for(i=0;i<list.length;i++){
			if(text.indexOf(list[i])>=0){
				return true;
			}
		}
		return false;
	}

	var observer = new MutationObserver(function(mutations){
		tweet_filter();
	});
	observer.observe($("#stream-items-id")[0], { childList: true, subtree: true});

	tweet_filter();
})();
