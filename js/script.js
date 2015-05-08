var colNum = 1,
	findNext = true;

$(function(){
	$('.item').each(function() {
	
		$(this).attr("data-col",colNum);
	
		if(colNum < 4) {
			colNum++;
		} else {
			colNum = 1;
		}
		
		// Change Title of Items to Represent how many columns it is
		if($(this).hasClass("width2")) {
			$(this).find("h3").text("2 Col");
			if(colNum < 4) {
				colNum++;
			} else {
				colNum = 1;
			}
		} else {
			$(this).find("h3").text("1 Col");
		}

		//If the item is too big to fit in the last space - rearrange
		if($(this).hasClass("width2") && ($(this).attr("data-col") == 4)) {
	
			var tooBig = $(this);
			var before = $(this).prev();
			var next = $(tooBig).next();
	
			while(findNext) {
				if(!$(next).hasClass("width2")) {
					$(before).after(next);
					findNext = false;
				} else {
					next = $(next).next();
					findNext = true;
				}
			}
		}
	});
	$('.item').removeAttr("data-col");
});
