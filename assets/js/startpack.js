
//////////////////////////////////////////////////////////////////////////////////////
// Fast scroll to
//////////////////////////////////////////////////////////////////////////////////////
$("[data-fast-scroll-cmd]").click(function(){
	var id = $(this).attr("data-fast-scroll-cmd");
	var target = $("[data-fast-scroll-target="+id+"]");
	var exclusion = $("[data-fast-scroll-exclusion="+id+"]").outerHeight();
	if(exclusion){
		//test if exclusion is not null,undefined,NaN,empty string,0,false
	}else {
		exclusion = 0;
	}

	var offset = target.offset();
	offset = offset.top - exclusion;

	$('html,body').animate({scrollTop: offset}, 500);

	return false;
});


//////////////////////////////////////////////////////////////////////////////////////
// Propagate link to parent
//////////////////////////////////////////////////////////////////////////////////////
$("body").on("click",".expend",function(e){
	if($(e.target).hasClass("link_block")){

	}else if($(e.target).parents(".link_block").length){

	}else{
		if($(this).find(".link").length > 0){
			var link = $(this).find(".link").attr("href");
		}else{
			var link = $(this).find("a").attr("href");
		}

		if($(this).find(".link").is("[target=_blank]")){
			window.open(link,'_blank');
		}else{
			window.location = link;
		}
	}
});


//////////////////////////////////////////////////////////////////////////////////////
// Autopopup
//////////////////////////////////////////////////////////////////////////////////////
$("body").on("click",".autopopup .close",function(){
	close_popup($(this).parents(".autopopup"));
});
$("body").on("click","[id^='popup_']",function(e){
	if($(e.target).is(".autopopup") || $(e.target).is(".vert_wrapper")){
		close_popup($(this));
	}
});
$("[data-popup]").click(function(){
	var id_popup = $(this).attr("data-popup");

	show_popup(id_popup);
	return false;
});
$(document).ready(function(){
	$(".autopopup.test").each(function(){
		var id_popup = $(this).attr("id");

		show_popup(id_popup);
		return false;
	});
});
function close_popup(autopopup){
	autopopup.fadeOut(function(){
		if(autopopup.find("iframe").length > 0){
			var iframe = autopopup.find("iframe");
			var video = iframe.attr("src");
			iframe.attr("src","");
			iframe.attr("src",video);
		}
	});
}
function show_popup(id){
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
//idea: un systeme d'autinjection d'iframe est trouvable dans le monjquery d'alliance


//////////////////////////////////////////////////////////////////////////////////////
// Lift (when scrolltop is bigger...)
//////////////////////////////////////////////////////////////////////////////////////
function lift_shopping(){
	if($(".lift_pusher").length > 0){
		var lift_pusher = $(".lift_pusher").outerHeight();
	}else{
		var lift_pusher = 0;
	}

	// content_lift must have a fixed height to not move when children are moved
	if($(".content_lift").length > 0 && $(window).scrollTop() > ($(".content_lift").offset().top-lift_pusher)){
		$(".lift").addClass("fixed");
	}else{
		$(".lift").removeClass("fixed");
	}
}
$(document).ready(function() {
	lift_shopping();
});
$(window).scroll(function() {
	lift_shopping();
});


//////////////////////////////////////////////////////////////////////////////////////
// Parallax
//////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
	parallax_move();
});
$(window).scroll(function() {
	parallax_move();
});
function parallax_move(){
	$(".parallax").each(function(){
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


//////////////////////////////////////////////////////////////////////////////////////
// Infos icon hover
//////////////////////////////////////////////////////////////////////////////////////
$("i.icon-info-sign").hover(
	function(){
		$("body").append('<div id="qtip_nike"></div>');
		var position = $(this).offset();
		var ctn_title = $(this).attr("data-text");
		$("#qtip_nike").html(ctn_title)
		$("#qtip_nike").prepend('<i class="icon-info-sign"></i>')

		$("#qtip_nike").css("top", position["top"] + 10);
		$("#qtip_nike").css("left", position["left"] - 230);
	},function(){
		$("#qtip_nike").remove();
	}
);


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
$("body").on("click",".autopopup .close",function() {
	close_popup($(this).parents(".autopopup"));
});

// Close by cross
$("[data-stp-menu-close]").on("click", function() {
	var menu = $(this).closest("[data-stp-menu]");

	close_stp_menu(menu);
	return false;
});

// Close by mask click
$("body").on("click","#stp-sidemenu-mask",function() {
	var menu = $(".stp-menu-open");

	close_stp_menu(menu);
});

// Open by button
$("[data-stp-menu-open]").click(function() {
	var id_menu = $(this).attr("data-stp-menu-open");

	show_stp_menu(id_menu);
	return false;
});

function show_stp_menu(id){

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

function close_stp_menu(menu){
	// Close the menu by removing a class
	menu.removeClass("stp-menu-open");

	// Fade OUT stp-sidemenu-mask
	$("#stp-sidemenu-mask").fadeOut();
}
