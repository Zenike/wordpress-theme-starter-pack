!function(y){var C=/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);y.sliker=function(t,a){var n={nbr_li:1,vitesse_auto:3e3,vitesse:.5,auto:0,type:"none",cible:"none",isolement:0,pc_only:0,loop:0,liquid:1,drag:0,creer_afficheur:0,fading_mode:0,fading_type:1,buffering_nbr:1,fullscreen:0,bullets:1,bullets_limit:20,bullets_limit_mobile:8,arrows:1},s=this;s.settings={};var i,r,l,o,d,c,f,u,h,p,_,g,m,k,v,b,w=y(t),x=1;y(window).on("load",function(){w.removeClass("sliker--safeload")}),s.init=function(){if(s.settings=y.extend({},n,a),1==s.settings.fading_mode&&2==s.settings.fading_type&&(s.settings.liquid=1),0==C&&1==s.settings.fullscreen&&1==s.settings.liquid&&w.find(".sliker__btn-fullscreen").length<1&&w.append('<a class="sliker__btn-fullscreen" href=""><i class="fa fa-expand"></i></a>'),0==C&&1==s.settings.arrows){if(w.is("[data-arrow]"))var t=w.attr("data-arrow");else t="fa fa-chevron";w.find(".sliker__arrow-left").length<1&&(w.append('<a class="sliker__arrow-left" href=""><i class="'+t+'-left"></i></a>'),w.append('<a class="sliker__arrow-right" href=""><i class="'+t+'-right"></i></a>'))}if(0!=C&&("mobile"==s.settings.drag&&(s.settings.drag=1,s.settings.fading_mode=0),w.addClass("mobile"),1==s.settings.pc_only&&w.remove(),"auto"==s.settings.bullets_limit_mobile||(s.settings.bullets_limit=s.settings.bullets_limit_mobile)),1==s.settings.creer_afficheur&&(0==C&&"none"!=s.settings.cible||(w.prepend('<div class="sliker__displayer"><img class="sliker__displayer-img" src=""></div>'),w.find(".sliker__displayer img").attr("src",w.find(".sliker__item:first-child img").attr("src")),w.find(".sliker__item").click(function(){w.find(".sliker__displayer .sliker__displayer-img").attr("src",y(this).find("img").attr("src"))}))),0==y(".sliker-isolation").length&&1==s.settings.isolement&&y("body").append('<div class="sliker-isolation"></div>'),1==s.settings.drag&&(s.settings.loop=0),1==s.settings.fading_mode&&(s.settings.loop=0),s.reset(),0!=s.settings.auto){var i=1;!function t(){if(0==i&&(x++,1==s.settings.loop||x<=c||(x=1),s.defilement_images()),i=0,"custom"==s.settings.auto)var e=w.find(".sliker__item:nth-child("+x+")").attr("data-timer");else e=s.settings.vitesse_auto;f=setTimeout(t,e)}()}var e;(s.reset(),1==s.settings.drag&&(0==C?(w.mousedown(function(t){s.appuyer(t)}),w.mouseup(function(t){s.lacher()}),w.find(".sliker__window").mouseout(function(t){s.lacher()})):(w.bind("touchstart",function(t){clearTimeout(f),s.appuyer(t)}),w.bind("touchend",function(t){s.lacher()})),w.find("img").on("dragstart",function(t){t.preventDefault()})),w.on("click",".sliker__btn-fullscreen",function(){return clearTimeout(f),w.hasClass("sliker--fullscreen")?(w.removeClass("sliker--fullscreen"),s.settings.fading_mode=b):(w.addClass("sliker--fullscreen"),b=s.settings.fading_mode,s.settings.fading_mode=1),s.reset(),!1}),y(window).resize(function(){s.reset()}),w.mousedown(function(t){clearTimeout(f)}),w.on("click",".sliker__arrow-left, .sliker__pages-btn-left",function(){return clearTimeout(f),x-=1,1==s.settings.isolement&&0==C&&s.afficher_cache(),s.defilement_images(),!1}),w.on("click",".sliker__arrow-right, .sliker__pages-btn-right",function(){return clearTimeout(f),x+=1,1==s.settings.isolement&&0==C&&s.afficher_cache(),s.defilement_images(),!1}),w.on("click",".sliker__bulletitem",function(){return x=y(this).index()+1,1==s.settings.isolement&&0==C&&s.afficher_cache(),s.defilement_images(),clearTimeout(f),!1}),"visualiseur"==s.settings.type)&&(y(s.settings.cible).on("mousedown"," .sliker__item",function(t){e=t.pageX}),y(s.settings.cible).on("click"," .sliker__item",function(t){if((e=Math.abs(t.pageX-e))<10||0!=C)return y(this).parents(".sliker__track").children("li:first-child").is("[data-group]")?(x=0,y(this).prevAll().each(function(){x+=Math.round(y(this).attr("data-group"))}),x++):x=y(this).index()+1,s.defilement_images(),clearTimeout(f),1==s.settings.isolement&&0==C&&s.afficher_cache(),!1}));y(window).scroll(function(){y(".sliker-isolation").fadeOut()}),y("body").on("click",".sliker-isolation",function(){y(".sliker-isolation").fadeOut()}),s.buffering_imgs()},s.defilement_images=function(){y.event.trigger({type:"sliker_defilement",cpt:x,slider:w}),s.buffering_imgs(),w.find(".sliker__bulletitem").removeClass("sliker__bulletitem--selected"),w.find(".sliker__bulletitem:nth-child("+x+")").addClass("sliker__bulletitem--selected"),1!=s.settings.fading_mode&&(w.find(".sliker__item").removeClass("sliker__item--selected"),w.find(".sliker__item:nth-child("+x+")").addClass("sliker__item--selected")),1==x?w.find(".sliker__arrow-left, .sliker__pages-btn-left").css("visibility","hidden"):w.find(".sliker__arrow-left, .sliker__pages-btn-left").css("visibility","visible"),c<=x?w.find(".sliker__arrow-right, .sliker__pages-btn-right").css("visibility","hidden"):w.find(".sliker__arrow-right, .sliker__pages-btn-right").css("visibility","visible"),1==s.settings.loop&&(w.find(".sliker__arrow-right, .sliker__pages-btn-right").css("visibility","visible"),w.find(".sliker__arrow-left, .sliker__pages-btn-left").css("visibility","visible")),w.find(".sliker__track").stop();w.find(".sliker__item.rajout:first").index();w.find(".sliker__pages .sliker__pages-text .sliker__pages-text-nbr").text(x),1==s.settings.fading_mode||x==c+1||0==x||s.moveTo("-"+r*(x-1)),1!=s.settings.fading_mode&&y.event.trigger({type:"sliker_defilement_end",cpt:x,slider:w})},s.moveTo=function(t){w.find(".sliker__track").css({"transition-duration":s.settings.vitesse+"s","-webkit-transform":"translate("+t+"px,0) translateZ(0)","-ms-transform":"translate("+t+"px,0) translateZ(0)",transform:"translate("+t+"px,0) translateZ(0)"})},s.instantMoveTo=function(t){w.find(".sliker__track").css({"transition-duration":"0s","-webkit-transform":"translate("+t+"px,0) translateZ(0)","-ms-transform":"translate("+t+"px,0) translateZ(0)",transform:"translate("+t+"px,0) translateZ(0)"})},s.afficher_cache=function(){y(".sliker-isolation").fadeIn()},s.buffering_imgs=function(){for(var t=x-s.settings.buffering_nbr;t<=x+s.settings.buffering_nbr;t++){if(void 0===w.find(".sliker__item:nth-child("+t+") img[data-sliker-src]").attr("src")){var e=w.find(".sliker__item:nth-child("+t+") img[data-sliker-src]").attr("data-sliker-src");w.find(".sliker__item:nth-child("+t+") img[data-sliker-src]").attr("src",e)}}},s.appuyer=function(t){if(w.find(".sliker__track").stop(),m=1,0==C)v=Math.round(t.pageX-u.left);else{var e=t.originalEvent.touches[0];v=Math.round(e.pageX-u.left)}k=w.find(".sliker__track").position(),k=Math.round(k.left),0==C?w.find(".sliker__window").mousemove(function(t){g=Math.round(t.pageX-u.left),s.bouger(t)}):w.find(".sliker__window").bind("touchmove",function(t){var e=t.originalEvent.touches[0];return g=Math.round(e.pageX-u.left),s.bouger(t),!1})},s.bouger=function(t){var e=k+(g-v);return w.find(".sliker__track").css({"transition-duration":"0s","-webkit-transform":"translate("+e+"px,0px) translateZ(0)","-moz-transform":"translate("+e+"px,0px) translateZ(0)","-ms-transform":"translate("+e+"px,0px) translateZ(0)","-o-transform":"translate("+e+"px,0px) translateZ(0)",transform:"translate("+e+"px,0px) translateZ(0)"}),g-v<h/8*-1&&(_=0,p=1),h/8<g-v&&(p=0,_=1),!1},s.lacher=function(t){1==m&&((m=0)==C?w.find(".sliker__window").unbind("mousemove"):w.find(".sliker__window").unbind("touchmove"),1==p?(p=0,c<(x+=1)&&(x=c),1==s.settings.isolement&&0==C&&s.afficher_cache()):1==_&&(_=0,(x-=1)<1&&(x=1),1==s.settings.isolement&&0==C&&s.afficher_cache()),s.defilement_images())},s.reset=function(){if(1==s.settings.liquid&&w.find(".sliker__window .sliker__item").width(w.find(".sliker__window").width()),w.find(".rajout").remove(),(i=w.find(".sliker__item").outerWidth(!0))||(i=20),l=w.find(".sliker__window").width()/i,o=Math.floor(l),.8<l-o&&(o+=1),o<1&&(o=1),o<s.settings.nbr_li&&(s.settings.nbr_li=o),r=i*s.settings.nbr_li,d=Math.ceil(w.find(".sliker__item").length),(c=Math.ceil((d-(o-s.settings.nbr_li))/s.settings.nbr_li))<=1&&(c=1,clearTimeout(f)),1==s.settings.loop&&(c=Math.ceil(d/s.settings.nbr_li)),c<x&&(x=c),1==w.find(".sliker__item--selected").length?x=w.find(".sliker__item--selected").index()+1:w.find(".sliker__item:first-child").addClass("sliker__item--selected"),s.instantMoveTo(-1*(x-1)*i),1==c||0==c?w.find(".sliker__arrow-left, .sliker__arrow-right").css("visibility","hidden"):1==s.settings.loop?w.find(".sliker__arrow-left, .sliker__arrow-right").css("visibility","visible"):1==x?(w.find(".sliker__arrow-left").css("visibility","hidden"),w.find(".sliker__arrow-right").css("visibility","visible")):x==c?(w.find(".sliker__arrow-left").css("visibility","visible"),w.find(".sliker__arrow-right").css("visibility","hidden")):w.find(".sliker__arrow-left, .sliker__arrow-right").css("visibility","visible"),w.find(".sliker__bullets").remove(),w.find(".sliker__pages").remove(),1==s.settings.bullets&&1<c)if(s.settings.bullets_limit>=c){w.find(".sliker__window").after('<ul class="sliker__bullets"></ul>');for(var t=1;t<=c;t++)w.is("[data-bullet]")?w.find(".sliker__bullets").append('<li class="sliker__bulletitem">'+w.attr("data-bullet")+"</li>"):w.find(".sliker__bullets").append('<li class="sliker__bulletitem"><span class="sliker__bullet-classic">"+i+"</span></li>')}else{if(w.is("[data-arrow]"))var e=w.attr("data-arrow");else e="fa fa-chevron";w.find(".sliker__window").after('<div class="sliker__pages"><div class="sliker__pages-wrap"></div></div>'),w.find(".sliker__pages .sliker__pages-wrap").append('<span class="sliker__pages-btn-left"><i class="'+e+'-left"></i></span>'),w.find(".sliker__pages .sliker__pages-wrap").append('<span class="sliker__pages-text"><span class="sliker__pages-text-nbr">'+x+"</span>/"+c+"</span>"),w.find(".sliker__pages .sliker__pages-wrap").append('<span class="sliker__pages-btn-right"><i class="'+e+'-right"></i></span>')}if(w.find(".sliker__bulletitem:nth-child("+x+")").addClass("sliker__bulletitem--selected"),1==s.settings.loop)for(t=0;t<=2*o;t++)w.find(".sliker__item:nth-child("+t+")").clone().addClass("rajout").appendTo(w.find(".sliker__track"));u=w.find(".sliker__window").offset(),h=w.find(".sliker__window li").width()},s.init()},y.fn.sliker=function(e){return this.each(function(){if(void 0===y(this).data("sliker")){var t=new y.sliker(this,e);y(this).data("sliker",t)}})}}(jQuery),function(s){function t(){s(".vert_center").each(function(t,e){var i=s(e).parent().actual("height"),a=s(e).actual("height");s(this).attr("data-haut_par",i),s(this).attr("data-haut",a);var n=(i-a)/2;s(this).is(".perc")?(n=n/i*100,s(e).css("top",n+"%")):s(e).css("top",n)})}function e(){o.forEach(function(t){var e=0;s("[data-equalize-height="+t+"]").removeAttr("style"),s("[data-equalize-height="+t+"]").each(function(){s(this).height()>e&&(e=s(this).height())}),s("[data-equalize-height="+t+"]").height(e)})}function i(i){i.fadeOut(function(){if(0<i.find("iframe").length){var t=i.find("iframe"),e=t.attr("src");t.attr("src",""),t.attr("src",e)}})}function a(t){var e=s("#"+t);e.is(".generated")||(e.contents().wrapAll("<div class='content_wrapper'>"),e.contents().wrapAll("<div class='margin_wrapper'>"),e.contents().wrapAll("<div class='vert_wrapper'>"),e.contents().wrapAll("<div class='hor_wrapper'>"),e.contents().wrapAll("<div class='center_wrapper'>"),e.find(".content_wrapper").append("<span class='close cross'><i class='fa fa-times'></i></span>"),e.addClass("generated"),s.event.trigger({type:"autopopup_created",id_popup:t})),e.fadeIn()}function n(){if(0<s(".lift_pusher").length)var t=s(".lift_pusher").outerHeight();else t=0;0<s(".content_lift").length&&s(window).scrollTop()>s(".content_lift").offset().top-t?s(".lift").addClass("fixed"):s(".lift").removeClass("fixed")}function r(){s(".parallax").each(function(){var t=s(this).offset().top-s(window).height();t<0&&(t=0,s(this).css("background-position","50% 0%"));var e=s(this).offset().top+s(this).height(),i=(s(window).scrollTop()-t)/(e-t)*100;0<i&&i<100&&s(this).css("background-position","50% "+i+"%")})}function l(){1<=s(".take_the_rest").length&&s(".take_the_rest").each(function(t,e){var i=s(e).parent().height(),a=s(e).position().top;s(e).is(".full")?s(e).height(i):s(e).height(i-a)})}s(document).ready(function(){t()}),s(window).on("load",function(){t()}),s(document).ready(function(){s("[data-equalize-height]").each(function(){-1!=s.inArray(s(this).attr("data-equalize-height"),o)||o.push(s(this).attr("data-equalize-height"))}),e()}),s(window).resize(function(){e()});var o=[];s("body").on("click",".expend",function(t){if(s(t.target).hasClass("link_block"));else if(s(t.target).parents(".link_block").length);else{if(0<s(this).find(".link").length)var e=s(this).find(".link").attr("href");else e=s(this).find("a").attr("href");s(this).find(".link").is("[target=_blank]")?window.open(e,"_blank"):window.location=e}}),s("body").on("click",".autopopup .close",function(){i(s(this).parents(".autopopup"))}),s("body").on("click","[id^='popup_']",function(t){(s(t.target).is(".autopopup")||s(t.target).is(".vert_wrapper"))&&i(s(this))}),s("[data-popup]").click(function(){return a(s(this).attr("data-popup")),!1}),s(document).ready(function(){s(".autopopup.test").each(function(){return a(s(this).attr("id")),!1})}),s(document).ready(function(){s("rowing tr:nth-child(even) td").addClass("odd")}),s(document).ready(function(){n()}),s(window).scroll(function(){n()}),s(document).ready(function(){r()}),s(window).scroll(function(){r()}),s("i.icon-info-sign").hover(function(){s("body").append('<div id="qtip_nike"></div>');var t=s(this).offset(),e=s(this).attr("data-text");s("#qtip_nike").html(e),s("#qtip_nike").prepend('<i class="icon-info-sign"></i>'),s("#qtip_nike").css("top",t.top+10),s("#qtip_nike").css("left",t.left-230)},function(){s("#qtip_nike").remove()}),s(document).ready(function(){l()}),s(window).resize(function(){l()}),s(window).on("load",function(){l()}),s("[data-fast-scroll-cmd]").click(function(){var t=s(this).attr("data-fast-scroll-cmd"),e=s("[data-fast-scroll-target="+t+"]"),i=s("[data-fast-scroll-exclusion="+t+"]").outerHeight();i||(i=0),console.log(i);var a=e.offset();return a=a.top-i,console.log(a),s("html,body").animate({scrollTop:a},500),!1}),s("#mobile_menu .navbar li>span, #mobile_menu .navbar li>a").click(function(){var t=s(this).closest("li");if(0<t.children(".submenu").length)return t.is(".open")?t.removeClass("open"):t.addClass("open"),!1})}(jQuery),function(d){function e(){d(".ffx-checkskin input").each(function(){if(d(this).is(":checked")){var t=d(this).parents(".ffx-checkskin");t.addClass("ffx-checkskin--checked"),t.is(".ffx-checkskin--icon")&&t.parent().is(".ffx-fieldset")&&t.prevAll().addClass("ffx-checkskin--checked")}else d(this).parents(".ffx-checkskin").removeClass("ffx-checkskin--checked")})}function a(){d(".ffx-align-names-container").each(function(t,e){var i=0;d(e).find("[data-ffx-align-names]").each(function(){d(this).removeAttr("style"),d(this).actual("width")>=i&&(i=d(this).actual("width"))}),d(e).find("[data-ffx-align-names]").width(i)})}function n(){d("[data-radio-auto-menu] input").each(function(){1==d(this).parents(".ffx-fieldset").find("input:checked").length?d(this).is(":checked")&&t(d(this).parents("[data-radio-auto-menu]")):1==d(this).parents(".ffx-fieldset").find(".uncheck_default").length&&t(d(this).parents(".ffx-fieldset").find(".uncheck_default"))})}function t(t){var e=d(t).attr("data-radio-auto-menu"),a=new Array;for(d(t).parents(".ffx-fieldset").find("[data-radio-auto-menu]").each(function(){a.push(d(this).attr("data-radio-auto-menu"))}),i=0;i<a.length;i++){d("[data-target~="+a[i]+"]").each(function(){d(this).hide(),d(this).not(".no_disabled").find("input,select,textarea").attr("disabled","disabled"),d(this).filter(".empty_input").find("input,select,textarea").val("")})}var n=d("[data-target~="+e+"]");d(n).show(),d(n).find("input,select,textarea").removeAttr("disabled")}function s(){d("[data-checkbox-auto-menu] input").each(function(){d(this).is(":checked")?r(d(this).parents("[data-checkbox-auto-menu]"),"-yes"):r(d(this).parents("[data-checkbox-auto-menu]"),"-no")})}function r(t,e){var i=d(t).attr("data-checkbox-auto-menu");d("[data-target="+i+"-yes]").hide(),d("[data-target="+i+"-no]").hide(),d(t).is(".checkbox-disabled")&&(d("[data-target="+i+"-yes]").find("input, textarea, select").attr("disabled","disabled"),d("[data-target="+i+"-no]").find("input, textarea, select").attr("disabled","disabled")),d("[data-target="+i+e+"]").show(),d(t).is(".checkbox-disabled")&&d("[data-target="+i+e+"]").find("input, textarea, select").removeAttr("disabled")}function l(){d("[data-ffx-select-automenu]").each(function(){o(d(this),d(this).find("option:checked"))})}function o(t,e){var a=d(t).attr("data-ffx-select-automenu")+"-"+d(e).attr("data-key"),n=new Array;for(d(t).find("option").each(function(){n.push(d(t).attr("data-ffx-select-automenu")+"-"+d(this).attr("data-key"))}),i=0;i<n.length;i++){d("[data-ffx-select-target~="+n[i]+"]").each(function(){d(this).hide(),d(this).not(".no_disabled").find("input,select,textarea").attr("disabled","disabled"),d(this).filter(".empty_input").find("input,select,textarea").val("")})}var s=d("[data-ffx-select-target~="+a+"]");d(s).show(),d(s).find("input,select,textarea").removeAttr("disabled")}function c(){d("[data-lang-menu] [data-lang]").each(function(){1==d(this).parents("[data-lang-menu]").find("[data-lang].selected").length?d(this).is(".selected")&&f(d(this)):f(d(this).parents("[data-lang-menu]").find("[data-lang]:first"))})}function f(t){var e=d(t).parents("[data-lang-menu]").attr("data-lang-menu"),i=e+"-"+d(t).attr("data-lang");d(t).parents("[data-lang-menu]").find("[data-lang]").removeClass("selected"),d(t).addClass("selected"),d("[data-lang-category="+e+"]").hide(),d("[data-lang-target~="+i+"]").show()}function u(t){d(t).is("[data-name-safe]")&&(d(t).attr("name",d(t).attr("data-name-safe")),d(t).removeAttr("data-name-safe"));var e=d(t).attr("name"),i=e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&");d(t).parents("label").next("input.uncheck-safe[name='"+i+"']").remove(),d(t).is(":checked")||(d('<input class="uncheck-safe" type="hidden" name="'+e+'" value="0">').insertAfter(d(t).parents("label")),d(t).attr("data-name-safe",e),d(t).removeAttr("name"))}function h(){d(".ffx-error").each(function(){if(1==d(this).parents(".label,label").length)var t=d(this).parents(".label,label");else t=d(this).parents(".lane, fieldset");var e=t.find("input, select, textarea");if(0<e.length){var i=e.offset().left+14-t.offset().left,a=e.offset().top-25-t.offset().top;d(this).css({left:i+"px",top:a+"px"})}})}function p(){d(".sortable").sortable({handle:".move",update:function(t,e){k(d(this).find("[data-group]"))},stop:function(t,e){if(e.item.parent().is(".ffx-children-wrapper")){g(i=e.item.parent().children(".category"))}else{var i=e.item.attr("data-group");g(d("[data-group="+i+"]"))}}})}function _(t){var e,i=d(t).attr("data-group"),a=d("[data-group="+i+"]").first(),n=d("[data-group="+i+"]").last(),s=d(a).clone(!0).addClass("ffx-clone");d.event.trigger({type:"form_element_before_cloned",original:a}),d(e=s).find('input[type="text"],input[type="password"],textarea').val(""),d(e).find("input, textarea").removeAttr("checked"),d(e).find(".checked").removeClass("checked"),d(e).find(".ffx-children-wrapper").remove(),d(e).find("input, textarea, select").removeAttr("readonly"),d(s).insertAfter(n),k(t),d(s).is(".manual_increment")&&function(t,e,i,a){if(t.addClass("manual_increment"),e.is("[data-group-cpt]")){var n=e.attr("data-group-cpt");n++}else n=t.prevAll("[data-group="+i+"]").length;d("[data-group="+i+"]").attr("data-group-cpt",n),t.attr("data-this-cpt",n);var s=a.find("[data-formflex-base]").first().addBack().attr("data-formflex-base");t.find("[data-lang-iso]").attr("data-formflex-base",s);var r=s+"["+n+"]";1<=t.find("[data-lang-iso]").length?t.find("[data-formflex-base]").each(function(){var n=d(this).attr("data-lang-iso");d(this).find("[data-name]").each(function(){var t=d(this).attr("data-name");if(d(this).is("[data-inner_child]")){var e=d(this).attr("data-inner_child"),i=r+"["+e+"]["+n+"][0]["+t+"]";d(this).attr("name",i)}else{var a=r+"["+t+"]["+n+"]";d(this).attr("name",a)}})}):t.find("[data-formflex-base]").addBack().each(function(){1<=d(this).find("[data-name]").length?d(this).find("[data-name]").each(function(){var t=d(this).attr("data-name"),e=r+"["+t+"]";d(this).attr("name",e)}):d(this).find("input, textarea, select").each(function(){d(this).attr("name",r)})})}(s,a,i,n),g(d("[data-group="+i+"]")),d.event.trigger({type:"form_element_cloned",element:s,original:a})}function g(t){var e=0;t.each(function(){d(this).find(".sortable_get_position:first").val(e),e++})}function m(t){var e=t.parent();t.remove(),k(t),g(e.children(".category")),d.event.trigger({type:"element_deleted",new_item:t})}function k(t){var e=t.attr("data-group"),i=d("[data-group="+e+"]").last();d("[data-group="+e+"]").removeClass("dupplicate_wrapper"),i.addClass("dupplicate_wrapper")}d(document).ready(function(){e()}),d(document).on("formflex_refresh",function(t){e()}),d(document).ready(function(){d("body").on("change",".ffx-checkskin input",function(){console.log("lklklk"),e()})}),d("body").on("mousedown",".ffx-checkskin",function(){0==d(this).find("input").prop("disabled")&&d(this).addClass("ffx-checkskin--mousedown")}),d("body").on("mouseup",function(){d(".ffx-checkskin").removeClass("ffx-checkskin--mousedown")}),d(document).ready(function(){a()}),d(document).on("formflex_refresh",function(t){a()}),d(document).ready(function(){n()}),d(document).on("formflex_refresh",function(t){n()}),d("body").on("change","[data-radio-auto-menu] input",function(){d(this).is(":checked")&&t(d(this).parents("[data-radio-auto-menu]"))}),d(document).ready(function(){s()}),d(document).on("formflex_refresh",function(t){s()}),d("body").on("change","[data-checkbox-auto-menu] input",function(){d(this).is(":checked")?r(d(this).parents("[data-checkbox-auto-menu]"),"-yes"):r(d(this).parents("[data-checkbox-auto-menu]"),"-no")}),d(document).ready(function(){l()}),d(document).on("formflex_refresh",function(t){l()}),d("body").on("change","[data-ffx-select-automenu]",function(){o(d(this),d(this).find("option:checked"))}),d(document).ready(function(){c()}),d(document).on("formflex_refresh",function(t){c()}),d("body").on("click","[data-lang-menu] [data-lang]",function(){f(d(this))}),d(document).ready(function(){d("input[data-uncheck-safe]").each(function(){u(d(this))})}),d(document).on("formflex_refresh",function(t){d("input[data-uncheck-safe]").each(function(){u(d(this))})}),d("body").on("change","input[data-uncheck-safe]",function(){u(d(this))}),d(document).ready(function(){h()}),d(document).on("formflex_refresh",function(t){h()}),d(document).ready(function(){d("[data-group]").each(function(){k(d(this))}),1<=d(".sortable").length&&p()}),d(document).on("formflex_refresh",function(t){d("[data-group]").each(function(){k(d(this))}),1<=d(".sortable").length&&p()}),d("body").on("click",".ffx-round-icon--dupplicate",function(t){return t.preventDefault(),_(d(this).closest("[data-group]")),!1}),d("body").on("click","[data-ffx-children-add]",function(t){return t.preventDefault(),function(t){var e=d(t).attr("data-ffx-children-add"),i=d("[data-ffx-child-template="+e+"]");d(t).closest(".category").find(".ffx-children-wrapper").length<1&&(1<=d(t).parents(".sortable").length?(d(t).closest(".category").append('<div class="sortable ffx-children-wrapper">'),p()):d(t).closest(".category").append('<div class="ffx-children-wrapper">'));var a=d(t).closest(".category").find(".ffx-children-wrapper:first"),n=d(t).closest(".category"),s=d(i).clone(!0).removeAttr("data-ffx-child-template");a.append(s);var r=d(t).closest("[data-formflex-base]").attr("data-formflex-base");if(a.is("[data-child-cpt]")){var l=a.attr("data-child-cpt");l++}else l=s.prevAll(".category").length;a.attr("data-child-cpt",l);var o=n.find("[data-lang-category]").attr("data-lang-category");s.find("[data-lang-iso]").each(function(){var t=d(this).attr("data-lang-iso"),e=d(this).closest("[data-this-cpt]").attr("data-this-cpt");d(this).attr("data-lang-target",o+"-"+t),d(this).attr("data-lang-category",o);var i=r+"["+e+"][children]["+t+"]["+l+"]";d(this).find("input, textarea").attr("data-structure",i)}),s.find("[data-name]").each(function(){d(this).attr("name",d(this).attr("data-structure")+"["+d(this).attr("data-name")+"]")}),c(),g(n.find(".category")),d.event.trigger({type:"child_added",new_item:s})}(d(this)),!1}),d("body").on("click",".ffx-round-icon--delete",function(){return 0<d(this).parents(".category").length?m(d(this).closest(".category")):m(d(this).closest("[data-group]")),!1})}(jQuery),jQuery,console.log("jquery is working in my theme");