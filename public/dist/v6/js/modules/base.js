define(function(require,exports){require("components").tween;var _registerMap=new Hash({"always-0":function(hook){var topBannerEl=$("navigator"),scrollTopEl=$("scrolltop"),headerEl=$("header");68>hook?(topBannerEl.setStyle({position:"static"}),headerEl.setStyle({height:"70px"}),scrollTopEl.hide()):(topBannerEl.setStyle({position:"fixed"}),headerEl.setStyle({height:"102px"}),scrollTopEl.show())}});exports.init=function(){$("scrolltop").observe("click",function(){$(window).scrollTo(0)}),YYMG.isIE6?$("scrolltop").remove():Event.observe(window,"scroll",function(){var viewPort=document.viewport,offsets=viewPort.getScrollOffsets(),yOffset=offsets[1];_registerMap.each(function(pair){-1!=pair.key.indexOf("always")?pair.value(yOffset):yOffset==pair.key&&pair.value(yOffset)})}),Event.observe(document,"keydown",function(evt){evt.keyCode==Event.KEY_ESC&&$$(".dialog").each(function(dialog){dialog.remove()})})}});