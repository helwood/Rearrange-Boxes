$(function(){
	var colNum = 1,
	findNext = true;

	$('.project').each(function() {
	
		$(this).attr("data-col",colNum);
	
		if(colNum < 4) {
			colNum++;
		} else {
			colNum = 1;
		}
		
		// Change Title of Items to Represent how many columns it is
		if($(this).hasClass("width2")) {
			if(colNum < 4) {
				colNum++;
			} else {
				colNum = 1;
			}
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
				//console.log(findNext);
			}
			findNext = true;
		}
		/*var position = $(this).offset();
		var win_width = $(window).width();
		var item_width = $(this).width();
		var win_height = $(window).height();
		var item_height = $(this).height();
		var top = position.top;
		var left = position.left;
		var right = (win_width - item_width) - 2;
		var bottom = (win_height - item_height) - top - 2;
		var css_string = "inset(" + top + "px " + right + "px " + bottom + "px " + left + "px)";

		console.log(win_width);
		//console.log(css_string);
		//console.log("Top: " + position.top + " Right: " + right + " Left: " + position.left + " Bottom: " + bottom);
		$(this).find('.project-overlay').css({
			'-webkit-clip-path':'inset(0 0 0 0)',
			'clip-path':css_string,
			'opacity':'1',
		});*/
	});
	$('.project').removeAttr("data-col");

});



$('.project').click(function(){
		//console.log(css_string);
		//console.log("Top: " + position.top + " Right: " + right + " Left: " + position.left + " Bottom: " + bottom);

		var position = $(this).offset();
		var win_width = $(window).width();
		var item_width = $(this).width();
		var win_height = $(window).height();
		var item_height = $(this).height();
		var top = position.top;
		var left = position.left;
		var right = (win_width - item_width) - 2;
		var bottom = (win_height - item_height) - top - 2;
		var css_string = "inset(" + top + "px " + right + "px " + bottom + "px " + left + "px)";
		$(this).find('.project-overlay').css('left',left);

		$(this).find('.project-overlay').css({
			'-webkit-clip-path':css_string,
			'z-index':'9999',
			'opacity':'1',
		}).delay(400).queue(function(){
			$(this).css({
				'-webkit-clip-path':'inset(0 0 0 0)',
				'left':'0'
			});
		});

});