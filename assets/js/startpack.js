
//////////////////////////////////////////////////////////////////////////////////////
// Fast scroll to
//////////////////////////////////////////////////////////////////////////////////////
function stp_fast_scroll_to(cmd) {
	var id = cmd.attr("data-stp-fastscroll-cmd");
	var target = $("[data-stp-fastscroll-target="+id+"]");
	var exclusion = $("[data-stp-fastscroll-exclusion="+id+"]").outerHeight();
	if(exclusion){
		//test if exclusion is not null,undefined,NaN,empty string,0,false
	} else {
		exclusion = 0;
	}

	var offset = target.offset();
	offset = offset.top - exclusion;

	$('html,body').animate({scrollTop: offset}, 500);
}

$(document).ready(function() {
	$("[data-stp-fastscroll-cmd]").click(function(){
		stp_fast_scroll_to($(this));
		return false;
	});
});


//////////////////////////////////////////////////////////////////////////////////////
// Autopopup
//////////////////////////////////////////////////////////////////////////////////////
function stp_close_popup(autopopup){
	autopopup.fadeOut(function(){
		if(autopopup.find("iframe").length > 0){
			var iframe = autopopup.find("iframe");
			var video = iframe.attr("src");
			iframe.attr("src","");
			iframe.attr("src",video);
		}
	});
}

function stp_show_popup(id){
	var popup = $("#"+id);

	if(popup.is(".generated")){
		popup.fadeIn();
	}else{
		popup.contents().wrapAll("<div class='content_wrapper'>");
		popup.contents().wrapAll("<div class='margin_wrapper'>");
		popup.contents().wrapAll("<div class='vert_wrapper'>");
		popup.contents().wrapAll("<div class='hor_wrapper'>");
		popup.contents().wrapAll("<div class='center_wrapper'>");
		popup.find(".content_wrapper").append("<span class='close cross'><i class='fa fa-times'></i></span>");

		popup.addClass("generated");

		$.event.trigger({
			type: "autopopup_created",
			id_popup: id,
		});

		popup.fadeIn();
	}
}

$(document).ready(function(){
	// open by click on command
	$("[data-popup]").click(function(){
		var id_popup = $(this).attr("data-popup");

		stp_show_popup(id_popup);
		return false;
	});

	// open by test mode
	$(".autopopup.test").each(function(){
		var id_popup = $(this).attr("id");

		stp_show_popup(id_popup);
		return false;
	});

	// close by cross
	$("body").on("click",".autopopup .close",function(){
		stp_close_popup($(this).parents(".autopopup"));
	});
	
	// close by click on black
	$("body").on("click","[id^='popup_']",function(e){
		if($(e.target).is(".autopopup") || $(e.target).is(".vert_wrapper")){
			stp_close_popup($(this));
		}
	});
});


//////////////////////////////////////////////////////////////////////////////////////
// Lift (when scrolltop is bigger...)
//////////////////////////////////////////////////////////////////////////////////////
function stp_lift_tester(){
	if($("[data-stp-lift-pusher]").length > 0) {
		var lift_pusher = $("[data-stp-lift-pusher]").outerHeight();
	} else {
		var lift_pusher = 0;
	}

	// content_lift must have a fixed height to not move when children are moved
	if($("[data-stp-lift-wrapper]").length > 0 && $(window).scrollTop() > ($("[data-stp-lift-wrapper]").offset().top-lift_pusher)) {
		$("[data-stp-lift]").addClass("stp-lift-on");
	} else {
		$("[data-stp-lift]").removeClass("stp-lift-on");
	}
}

$(document).ready(function() {
	stp_lift_tester();
});

$(window).scroll(function() {
	stp_lift_tester();
});


//////////////////////////////////////////////////////////////////////////////////////
// Parallax
//////////////////////////////////////////////////////////////////////////////////////
function stp_parallax_move(){
	$("[data-stp-parallax]").each(function(){
		var point_0 = $(this).offset().top - $(window).height();
		if(point_0 < 0){
			point_0 = 0;
			$(this).css("background-position","50% 0%");
		}
		var point_100 = $(this).offset().top + $(this).height();

		var scrolltop_rel = $(window).scrollTop()-point_0;
		var point_100_rel = point_100-point_0;
		var scrolltop_perc = scrolltop_rel/point_100_rel*100

		if(scrolltop_perc > 0 && scrolltop_perc < 100){
			$(this).css("background-position","50% "+scrolltop_perc+"%");
		}
	});
}

$(window).load(function() {
	stp_parallax_move();
});

$(window).scroll(function() {
	stp_parallax_move();
});


//////////////////////////////////////////////////////////////////////////////////////
// Autoloader
//////////////////////////////////////////////////////////////////////////////////////
function autoloader(cmd){
	if(cmd=="start"){
		if($("#autoloader").length == 0){
			$("body").prepend('<div id="autoloader"><i class="fa fa-spinner fa-spin"></i></div>');
		}
		$("#autoloader").fadeIn();
	}else if(cmd=="stop"){
		$("#autoloader").fadeOut();
	}
}


//////////////////////////////////////////////////////////////////////////////////////
// Mobilemenu
//////////////////////////////////////////////////////////////////////////////////////
function stp_show_menu(id){
	// select the target menu
	var menu = $("[data-stp-menu=" + id + "]");

	if($("#stp-sidemenu-mask").length > 0) {
		// stp-sidemenu-mask already created
	} else {
		$("body").prepend("<div id='stp-sidemenu-mask'></div>");
	}

	// open the menu by a class
	menu.addClass("stp-menu-open");

	// Fade IN stp-sidemenu-mask
	$("#stp-sidemenu-mask").fadeIn();
}

function stp_close_menu(menu){
	// Close the menu by removing a class
	menu.removeClass("stp-menu-open");

	// Fade OUT stp-sidemenu-mask
	$("#stp-sidemenu-mask").fadeOut();
}

$(document).ready(function() {
	// Open by button
	$("[data-stp-menu-open]").click(function() {
		var id_menu = $(this).attr("data-stp-menu-open");

		stp_show_menu(id_menu);
		return false;
	});

	// Close by cross
	$("[data-stp-menu-close]").on("click", function() {
		var menu = $(this).closest("[data-stp-menu]");

		stp_close_menu(menu);
		return false;
	});

	// Close by mask click
	$("body").on("click","#stp-sidemenu-mask",function() {
		var menu = $(".stp-menu-open");

		stp_close_menu(menu);
	});
});
