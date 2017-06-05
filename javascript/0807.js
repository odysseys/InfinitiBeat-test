var click_times = 0;

function display() {
	click_times ++;
/*	var click_times_new_item = document.createElement("span");
	click_times_new_item.setAttribute("class", "like-times");
	var click_times_text = document.createTextNode(click_times);
	click_times_new_item.appendChild(click_times_text);*/
	
	$(".like-text").addClass('show');
	$(".like-times").text(click_times);

	if(click_times > 10) {
		$(".article_area").css("background-color", "#ffb3b3");
	}
}

var f_num_display = document.getElementById("navigation");
var f_num = [0, 1];
var fibonacci_serial = document.createElement("p");
for (var i = 0; i < 10; i++) {
	if(i < 2){
		var f_num_now = document.createTextNode(f_num[i] + ", ");
		fibonacci_serial.appendChild(f_num_now);
	}
	else {
		var f_num_now = document.createTextNode(f_num[0] + f_num[1] + ", ");
		fibonacci_serial.appendChild(f_num_now);
		f_num = [f_num[1], f_num[0] + f_num[1]];
	}	
}

//f_num_display.appendChild(fibonacci_serial);
$("#navigation").before(fibonacci_serial);
