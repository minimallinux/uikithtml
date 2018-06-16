$(document).ready(function() {

	var set_style = $("#template_settings");

	$("body").append("<div class='settings'><style>.settings{background:#fff;position:fixed;top:50%;margin-top:-100px;right:0;padding:7px}.settings div{width:35px;height:35px;margin:3px 0;cursor:pointer;transition:all .2s}.settings div.active{box-shadow: rgba(255,255,255,.3) 0 0 0 3px inset}</style>");

	var colors = {
		// red : "#CD5C5C",
		blue : "#4682B4",
		green : "#2E8B57",
		purple : "#551A8B",
		// orange : "#FF4500"
	};

	var props = "red";
	for (var i in colors) {
			$(".settings").append("<div class='" + i + "' style='background: " + colors[i] + "' title='" + i + " color'>");
	};

	$(".settings div").click(function() {
		var tcolor = $(this).attr("class");
		set_style.attr("href", ""+ tcolor + ".css");
		$(".settings div").removeClass("active");
		$(this).addClass("active");
	});

});
$(".settings div:nth-child(2)").addClass("active");