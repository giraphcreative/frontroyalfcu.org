!function(a){"use strict";a.fn.fitVids=function(e){var t,i,o={customSelector:null,ignore:null};return document.getElementById("fit-vids-style")||(t=document.head||document.getElementsByTagName("head")[0],(i=document.createElement("div")).innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',t.appendChild(i.childNodes[1])),e&&a.extend(o,e),this.each(function(){var e=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];o.customSelector&&e.push(o.customSelector);var n=".fitvidsignore";o.ignore&&(n=n+", "+o.ignore);e=a(this).find(e.join(","));(e=(e=e.not("object object")).not(n)).each(function(){var e,t,i=a(this);0<i.parents(n).length||"embed"===this.tagName.toLowerCase()&&i.parent("object").length||i.parent(".fluid-width-video-wrapper").length||(i.css("height")||i.css("width")||!isNaN(i.attr("height"))&&!isNaN(i.attr("width"))||(i.attr("height",9),i.attr("width",16)),e=("object"===this.tagName.toLowerCase()||i.attr("height")&&!isNaN(parseInt(i.attr("height"),10))?parseInt(i.attr("height"),10):i.height())/(isNaN(parseInt(i.attr("width"),10))?i.width():parseInt(i.attr("width"),10)),i.attr("name")||(t="fitvid"+a.fn.fitVids._count,i.attr("name",t),a.fn.fitVids._count++),i.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*e+"%"),i.removeAttr("height").removeAttr("width"))})})},a.fn.fitVids._count=0}(window.jQuery||window.Zepto),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?e(require("jquery")):e(window.jQuery||window.Zepto)}(function(l){function e(){}function d(e,t){m.ev.on(i+e+b,t)}function u(e,t,i,n){var o=document.createElement("div");return o.className="mfp-"+e,i&&(o.innerHTML=i),n?t&&t.appendChild(o):(o=l(o),t&&o.appendTo(t)),o}function p(e,t){m.ev.triggerHandler(i+e,t),m.st.callbacks&&(e=e.charAt(0).toLowerCase()+e.slice(1),m.st.callbacks[e]&&m.st.callbacks[e].apply(m,l.isArray(t)?t:[t]))}function f(e){return e===t&&m.currTemplate.closeBtn||(m.currTemplate.closeBtn=l(m.st.closeMarkup.replace("%title%",m.st.tClose)),t=e),m.currTemplate.closeBtn}function a(){l.magnificPopup.instance||((m=new e).init(),l.magnificPopup.instance=m)}var m,n,h,o,g,t,c="Close",v="BeforeClose",y="MarkupParse",w="Open",r="Change",i="mfp",b="."+i,C="mfp-ready",s="mfp-removing",x="mfp-prevent-close",k=!!window.jQuery,I=l(window);e.prototype={constructor:e,init:function(){var e=navigator.appVersion;m.isLowIE=m.isIE8=document.all&&!document.addEventListener,m.isAndroid=/android/gi.test(e),m.isIOS=/iphone|ipad|ipod/gi.test(e),m.supportsTransition=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1}(),m.probablyMobile=m.isAndroid||m.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),h=l(document),m.popupsCache={}},open:function(e){if(!1===e.isObj){m.items=e.items.toArray(),m.index=0;for(var t,i=e.items,n=0;n<i.length;n++)if((t=(t=i[n]).parsed?t.el[0]:t)===e.el[0]){m.index=n;break}}else m.items=l.isArray(e.items)?e.items:[e.items],m.index=e.index||0;if(!m.isOpen){m.types=[],g="",e.mainEl&&e.mainEl.length?m.ev=e.mainEl.eq(0):m.ev=h,e.key?(m.popupsCache[e.key]||(m.popupsCache[e.key]={}),m.currTemplate=m.popupsCache[e.key]):m.currTemplate={},m.st=l.extend(!0,{},l.magnificPopup.defaults,e),m.fixedContentPos="auto"===m.st.fixedContentPos?!m.probablyMobile:m.st.fixedContentPos,m.st.modal&&(m.st.closeOnContentClick=!1,m.st.closeOnBgClick=!1,m.st.showCloseBtn=!1,m.st.enableEscapeKey=!1),m.bgOverlay||(m.bgOverlay=u("bg").on("click"+b,function(){m.close()}),m.wrap=u("wrap").attr("tabindex",-1).on("click"+b,function(e){m._checkIfClose(e.target)&&m.close()}),m.container=u("container",m.wrap)),m.contentContainer=u("content"),m.st.preloader&&(m.preloader=u("preloader",m.container,m.st.tLoading));var o=l.magnificPopup.modules;for(n=0;n<o.length;n++){var a=(a=o[n]).charAt(0).toUpperCase()+a.slice(1);m["init"+a].call(m)}p("BeforeOpen"),m.st.showCloseBtn&&(m.st.closeBtnInside?(d(y,function(e,t,i,n){i.close_replaceWith=f(n.type)}),g+=" mfp-close-btn-in"):m.wrap.append(f())),m.st.alignTop&&(g+=" mfp-align-top"),m.fixedContentPos?m.wrap.css({overflow:m.st.overflowY,overflowX:"hidden",overflowY:m.st.overflowY}):m.wrap.css({top:I.scrollTop(),position:"absolute"}),!1!==m.st.fixedBgPos&&("auto"!==m.st.fixedBgPos||m.fixedContentPos)||m.bgOverlay.css({height:h.height(),position:"absolute"}),m.st.enableEscapeKey&&h.on("keyup"+b,function(e){27===e.keyCode&&m.close()}),I.on("resize"+b,function(){m.updateSize()}),m.st.closeOnContentClick||(g+=" mfp-auto-cursor"),g&&m.wrap.addClass(g);var r=m.wH=I.height(),s={};m.fixedContentPos&&(!m._hasScrollBar(r)||(c=m._getScrollbarSize())&&(s.marginRight=c)),m.fixedContentPos&&(m.isIE7?l("body, html").css("overflow","hidden"):s.overflow="hidden");var c=m.st.mainClass;return m.isIE7&&(c+=" mfp-ie7"),c&&m._addClassToMFP(c),m.updateItemHTML(),p("BuildControls"),l("html").css(s),m.bgOverlay.add(m.wrap).prependTo(m.st.prependTo||l(document.body)),m._lastFocusedEl=document.activeElement,setTimeout(function(){m.content?(m._addClassToMFP(C),m._setFocus()):m.bgOverlay.addClass(C),h.on("focusin"+b,m._onFocusIn)},16),m.isOpen=!0,m.updateSize(r),p(w),e}m.updateItemHTML()},close:function(){m.isOpen&&(p(v),m.isOpen=!1,m.st.removalDelay&&!m.isLowIE&&m.supportsTransition?(m._addClassToMFP(s),setTimeout(function(){m._close()},m.st.removalDelay)):m._close())},_close:function(){p(c);var e=s+" "+C+" ";m.bgOverlay.detach(),m.wrap.detach(),m.container.empty(),m.st.mainClass&&(e+=m.st.mainClass+" "),m._removeClassFromMFP(e),m.fixedContentPos&&(e={marginRight:""},m.isIE7?l("body, html").css("overflow",""):e.overflow="",l("html").css(e)),h.off("keyup.mfp focusin"+b),m.ev.off(b),m.wrap.attr("class","mfp-wrap").removeAttr("style"),m.bgOverlay.attr("class","mfp-bg"),m.container.attr("class","mfp-container"),!m.st.showCloseBtn||m.st.closeBtnInside&&!0!==m.currTemplate[m.currItem.type]||m.currTemplate.closeBtn&&m.currTemplate.closeBtn.detach(),m.st.autoFocusLast&&m._lastFocusedEl&&l(m._lastFocusedEl).focus(),m.currItem=null,m.content=null,m.currTemplate=null,m.prevHeight=0,p("AfterClose")},updateSize:function(e){var t;m.isIOS?(t=document.documentElement.clientWidth/window.innerWidth,t=window.innerHeight*t,m.wrap.css("height",t),m.wH=t):m.wH=e||I.height(),m.fixedContentPos||m.wrap.css("height",m.wH),p("Resize")},updateItemHTML:function(){var e=m.items[m.index];m.contentContainer.detach(),m.content&&m.content.detach();var t=(e=!e.parsed?m.parseEl(m.index):e).type;p("BeforeChange",[m.currItem?m.currItem.type:"",t]),m.currItem=e,m.currTemplate[t]||(i=!!m.st[t]&&m.st[t].markup,p("FirstMarkupParse",i),m.currTemplate[t]=!i||l(i)),o&&o!==e.type&&m.container.removeClass("mfp-"+o+"-holder");var i=m["get"+t.charAt(0).toUpperCase()+t.slice(1)](e,m.currTemplate[t]);m.appendContent(i,t),e.preloaded=!0,p(r,e),o=e.type,m.container.prepend(m.contentContainer),p("AfterChange")},appendContent:function(e,t){(m.content=e)?m.st.showCloseBtn&&m.st.closeBtnInside&&!0===m.currTemplate[t]?m.content.find(".mfp-close").length||m.content.append(f()):m.content=e:m.content="",p("BeforeAppend"),m.container.addClass("mfp-"+t+"-holder"),m.contentContainer.append(m.content)},parseEl:function(e){var t,i=m.items[e];if((i=i.tagName?{el:l(i)}:(t=i.type,{data:i,src:i.src})).el){for(var n=m.types,o=0;o<n.length;o++)if(i.el.hasClass("mfp-"+n[o])){t=n[o];break}i.src=i.el.attr("data-mfp-src"),i.src||(i.src=i.el.attr("href"))}return i.type=t||m.st.type||"inline",i.index=e,i.parsed=!0,m.items[e]=i,p("ElementParse",i),m.items[e]},addGroup:function(t,i){function e(e){e.mfpEl=this,m._openClick(e,t,i)}var n="click.magnificPopup";(i=i||{}).mainEl=t,i.items?(i.isObj=!0,t.off(n).on(n,e)):(i.isObj=!1,i.delegate?t.off(n).on(n,i.delegate,e):(i.items=t).off(n).on(n,e))},_openClick:function(e,t,i){if((void 0!==i.midClick?i:l.magnificPopup.defaults).midClick||!(2===e.which||e.ctrlKey||e.metaKey||e.altKey||e.shiftKey)){var n=(void 0!==i.disableOn?i:l.magnificPopup.defaults).disableOn;if(n)if(l.isFunction(n)){if(!n.call(m))return!0}else if(I.width()<n)return!0;e.type&&(e.preventDefault(),m.isOpen&&e.stopPropagation()),i.el=l(e.mfpEl),i.delegate&&(i.items=t.find(i.delegate)),m.open(i)}},updateStatus:function(e,t){var i;m.preloader&&(n!==e&&m.container.removeClass("mfp-s-"+n),i={status:e,text:t=!t&&"loading"===e?m.st.tLoading:t},p("UpdateStatus",i),e=i.status,m.preloader.html(t=i.text),m.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),m.container.addClass("mfp-s-"+e),n=e)},_checkIfClose:function(e){if(!l(e).hasClass(x)){var t=m.st.closeOnContentClick,i=m.st.closeOnBgClick;if(t&&i)return!0;if(!m.content||l(e).hasClass("mfp-close")||m.preloader&&e===m.preloader[0])return!0;if(e===m.content[0]||l.contains(m.content[0],e)){if(t)return!0}else if(i&&l.contains(document,e))return!0;return!1}},_addClassToMFP:function(e){m.bgOverlay.addClass(e),m.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),m.wrap.removeClass(e)},_hasScrollBar:function(e){return(m.isIE7?h.height():document.body.scrollHeight)>(e||I.height())},_setFocus:function(){(m.st.focus?m.content.find(m.st.focus).eq(0):m.wrap).focus()},_onFocusIn:function(e){if(e.target!==m.wrap[0]&&!l.contains(m.wrap[0],e.target))return m._setFocus(),!1},_parseMarkup:function(o,e,t){var a;t.data&&(e=l.extend(t.data,e)),p(y,[o,e,t]),l.each(e,function(e,t){return void 0===t||!1===t||void(1<(a=e.split("_")).length?0<(i=o.find(b+"-"+a[0])).length&&("replaceWith"===(n=a[1])?i[0]!==t[0]&&i.replaceWith(t):"img"===n?i.is("img")?i.attr("src",t):i.replaceWith(l("<img>").attr("src",t).attr("class",i.attr("class"))):i.attr(a[1],t)):o.find(b+"-"+e).html(t));var i,n})},_getScrollbarSize:function(){var e;return void 0===m.scrollbarSize&&((e=document.createElement("div")).style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),m.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)),m.scrollbarSize}},l.magnificPopup={instance:null,proto:e.prototype,modules:[],open:function(e,t){return a(),(e=e?l.extend(!0,{},e):{}).isObj=!0,e.index=t||0,this.instance.open(e)},close:function(){return l.magnificPopup.instance&&l.magnificPopup.instance.close()},registerModule:function(e,t){t.options&&(l.magnificPopup.defaults[e]=t.options),l.extend(this.proto,t.proto),this.modules.push(e)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},l.fn.magnificPopup=function(e){a();var t,i,n,o=l(this);return"string"==typeof e?"open"===e?(t=k?o.data("magnificPopup"):o[0].magnificPopup,i=parseInt(arguments[1],10)||0,n=t.items?t.items[i]:(n=o,(n=t.delegate?o.find(t.delegate):n).eq(i)),m._openClick({mfpEl:n},o,t)):m.isOpen&&m[e].apply(m,Array.prototype.slice.call(arguments,1)):(e=l.extend(!0,{},e),k?o.data("magnificPopup",e):o[0].magnificPopup=e,m.addGroup(o,e)),o};function T(){E&&(_.after(E.addClass(S)).detach(),E=null)}var S,_,E,j="inline";l.magnificPopup.registerModule(j,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){m.types.push(j),d(c+"."+j,function(){T()})},getInline:function(e,t){if(T(),e.src){var i,n=m.st.inline,o=l(e.src);return o.length?((i=o[0].parentNode)&&i.tagName&&(_||(S=n.hiddenClass,_=u(S),S="mfp-"+S),E=o.after(_).detach().removeClass(S)),m.updateStatus("ready")):(m.updateStatus("error",n.tNotFound),o=l("<div>")),e.inlineElement=o}return m.updateStatus("ready"),m._parseMarkup(t,{},e),t}}});function O(){P&&l(document.body).removeClass(P)}function M(){O(),m.req&&m.req.abort()}var P,z="ajax";l.magnificPopup.registerModule(z,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){m.types.push(z),P=m.st.ajax.cursor,d(c+"."+z,M),d("BeforeChange."+z,M)},getAjax:function(n){P&&l(document.body).addClass(P),m.updateStatus("loading");var e=l.extend({url:n.src,success:function(e,t,i){i={data:e,xhr:i};p("ParseAjax",i),m.appendContent(l(i.data),z),n.finished=!0,O(),m._setFocus(),setTimeout(function(){m.wrap.addClass(C)},16),m.updateStatus("ready"),p("AjaxContentAdded")},error:function(){O(),n.finished=n.loadError=!0,m.updateStatus("error",m.st.ajax.tError.replace("%url%",n.src))}},m.st.ajax.settings);return m.req=l.ajax(e),""}}});var A;l.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=m.st.image,t=".image";m.types.push("image"),d(w+t,function(){"image"===m.currItem.type&&e.cursor&&l(document.body).addClass(e.cursor)}),d(c+t,function(){e.cursor&&l(document.body).removeClass(e.cursor),I.off("resize"+b)}),d("Resize"+t,m.resizeImage),m.isLowIE&&d("AfterChange",m.resizeImage)},resizeImage:function(){var e,t=m.currItem;t&&t.img&&m.st.image.verticalFit&&(e=0,m.isLowIE&&(e=parseInt(t.img.css("padding-top"),10)+parseInt(t.img.css("padding-bottom"),10)),t.img.css("max-height",m.wH-e))},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,A&&clearInterval(A),e.isCheckingImgSize=!1,p("ImageHasSize",e),e.imgHidden&&(m.content&&m.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(t){var i=0,n=t.img[0],o=function(e){A&&clearInterval(A),A=setInterval(function(){0<n.naturalWidth?m._onImageHasSize(t):(200<i&&clearInterval(A),3===++i?o(10):40===i?o(50):100===i&&o(500))},e)};o(1)},getImage:function(e,t){var i,n=0,o=function(){e&&(e.img[0].complete?(e.img.off(".mfploader"),e===m.currItem&&(m._onImageHasSize(e),m.updateStatus("ready")),e.hasSize=!0,e.loaded=!0,p("ImageLoadComplete")):++n<200?setTimeout(o,100):a())},a=function(){e&&(e.img.off(".mfploader"),e===m.currItem&&(m._onImageHasSize(e),m.updateStatus("error",r.tError.replace("%url%",e.src))),e.hasSize=!0,e.loaded=!0,e.loadError=!0)},r=m.st.image,s=t.find(".mfp-img");return s.length&&((i=document.createElement("img")).className="mfp-img",e.el&&e.el.find("img").length&&(i.alt=e.el.find("img").attr("alt")),e.img=l(i).on("load.mfploader",o).on("error.mfploader",a),i.src=e.src,s.is("img")&&(e.img=e.img.clone()),0<(i=e.img[0]).naturalWidth?e.hasSize=!0:i.width||(e.hasSize=!1)),m._parseMarkup(t,{title:function(e){if(e.data&&void 0!==e.data.title)return e.data.title;var t=m.st.image.titleSrc;if(t){if(l.isFunction(t))return t.call(m,e);if(e.el)return e.el.attr(t)||""}return""}(e),img_replaceWith:e.img},e),m.resizeImage(),e.hasSize?(A&&clearInterval(A),e.loadError?(t.addClass("mfp-loading"),m.updateStatus("error",r.tError.replace("%url%",e.src))):(t.removeClass("mfp-loading"),m.updateStatus("ready"))):(m.updateStatus("loading"),e.loading=!0,e.hasSize||(e.imgHidden=!0,t.addClass("mfp-loading"),m.findImageSize(e))),t}}});var B;l.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,t,i,n,o,a,r=m.st.zoom,s=".zoom";r.enabled&&m.supportsTransition&&(t=r.duration,i=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),i="all "+r.duration/1e3+"s "+r.easing,n={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},e="transition";return n["-webkit-"+e]=n["-moz-"+e]=n["-o-"+e]=n[e]=i,t.css(n),t},n=function(){m.content.css("visibility","visible")},d("BuildControls"+s,function(){m._allowZoom()&&(clearTimeout(o),m.content.css("visibility","hidden"),(e=m._getItemToZoom())?((a=i(e)).css(m._getOffset()),m.wrap.append(a),o=setTimeout(function(){a.css(m._getOffset(!0)),o=setTimeout(function(){n(),setTimeout(function(){a.remove(),e=a=null,p("ZoomAnimationEnded")},16)},t)},16)):n())}),d(v+s,function(){if(m._allowZoom()){if(clearTimeout(o),m.st.removalDelay=t,!e){if(!(e=m._getItemToZoom()))return;a=i(e)}a.css(m._getOffset(!0)),m.wrap.append(a),m.content.css("visibility","hidden"),setTimeout(function(){a.css(m._getOffset())},16)}}),d(c+s,function(){m._allowZoom()&&(n(),a&&a.remove(),e=null)}))},_allowZoom:function(){return"image"===m.currItem.type},_getItemToZoom:function(){return!!m.currItem.hasSize&&m.currItem.img},_getOffset:function(e){var t=e?m.currItem.img:m.st.zoom.opener(m.currItem.el||m.currItem),i=t.offset(),n=parseInt(t.css("padding-top"),10),e=parseInt(t.css("padding-bottom"),10);i.top-=l(window).scrollTop()-n;n={width:t.width(),height:(k?t.innerHeight():t[0].offsetHeight)-e-n};return(B=void 0===B?void 0!==document.createElement("p").style.MozTransform:B)?n["-moz-transform"]=n.transform="translate("+i.left+"px,"+i.top+"px)":(n.left=i.left,n.top=i.top),n}}});function N(e){var t;!m.currTemplate[F]||(t=m.currTemplate[F].find("iframe")).length&&(e||(t[0].src="//about:blank"),m.isIE8&&t.css("display",e?"block":"none"))}var F="iframe";l.magnificPopup.registerModule(F,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){m.types.push(F),d("BeforeChange",function(e,t,i){t!==i&&(t===F?N():i===F&&N(!0))}),d(c+"."+F,function(){N()})},getIframe:function(e,t){var i=e.src,n=m.st.iframe;l.each(n.patterns,function(){if(-1<i.indexOf(this.index))return this.id&&(i="string"==typeof this.id?i.substr(i.lastIndexOf(this.id)+this.id.length,i.length):this.id.call(this,i)),i=this.src.replace("%id%",i),!1});var o={};return n.srcAction&&(o[n.srcAction]=i),m._parseMarkup(t,o,e),m.updateStatus("ready"),t}}});function L(e){var t=m.items.length;return t-1<e?e-t:e<0?t+e:e}function H(e,t,i){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,i)}l.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var a=m.st.gallery,e=".mfp-gallery";if(m.direction=!0,!a||!a.enabled)return!1;g+=" mfp-gallery",d(w+e,function(){a.navigateByImgClick&&m.wrap.on("click"+e,".mfp-img",function(){if(1<m.items.length)return m.next(),!1}),h.on("keydown"+e,function(e){37===e.keyCode?m.prev():39===e.keyCode&&m.next()})}),d("UpdateStatus"+e,function(e,t){t.text&&(t.text=H(t.text,m.currItem.index,m.items.length))}),d(y+e,function(e,t,i,n){var o=m.items.length;i.counter=1<o?H(a.tCounter,n.index,o):""}),d("BuildControls"+e,function(){var e,t;1<m.items.length&&a.arrows&&!m.arrowLeft&&(t=a.arrowMarkup,e=m.arrowLeft=l(t.replace(/%title%/gi,a.tPrev).replace(/%dir%/gi,"left")).addClass(x),t=m.arrowRight=l(t.replace(/%title%/gi,a.tNext).replace(/%dir%/gi,"right")).addClass(x),e.click(function(){m.prev()}),t.click(function(){m.next()}),m.container.append(e.add(t)))}),d(r+e,function(){m._preloadTimeout&&clearTimeout(m._preloadTimeout),m._preloadTimeout=setTimeout(function(){m.preloadNearbyImages(),m._preloadTimeout=null},16)}),d(c+e,function(){h.off(e),m.wrap.off("click"+e),m.arrowRight=m.arrowLeft=null})},next:function(){m.direction=!0,m.index=L(m.index+1),m.updateItemHTML()},prev:function(){m.direction=!1,m.index=L(m.index-1),m.updateItemHTML()},goTo:function(e){m.direction=e>=m.index,m.index=e,m.updateItemHTML()},preloadNearbyImages:function(){for(var e=m.st.gallery.preload,t=Math.min(e[0],m.items.length),i=Math.min(e[1],m.items.length),n=1;n<=(m.direction?i:t);n++)m._preloadItem(m.index+n);for(n=1;n<=(m.direction?t:i);n++)m._preloadItem(m.index-n)},_preloadItem:function(e){var t;e=L(e),m.items[e].preloaded||((t=m.items[e]).parsed||(t=m.parseEl(e)),p("LazyLoad",t),"image"===t.type&&(t.img=l('<img class="mfp-img" />').on("load.mfploader",function(){t.hasSize=!0}).on("error.mfploader",function(){t.hasSize=!0,t.loadError=!0,p("LazyLoadError",t)}).attr("src",t.src)),t.preloaded=!0)}}});var R="retina";l.magnificPopup.registerModule(R,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){var i,n;1<window.devicePixelRatio&&(i=m.st.retina,n=i.ratio,1<(n=isNaN(n)?n():n)&&(d("ImageHasSize."+R,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/n,width:"100%"})}),d("ElementParse."+R,function(e,t){t.src=i.replaceSrc(t,n)})))}}}),a()});var jaaulde=window.jaaulde||{};jaaulde.utils=jaaulde.utils||{},jaaulde.utils.cookies=function(){var n={expiresAt:null,path:"/",domain:null,secure:!1},t=function(e){var t,i;return"object"!=typeof e||null===e?t=n:(t={expiresAt:n.expiresAt,path:n.path,domain:n.domain,secure:n.secure},"object"==typeof e.expiresAt&&e.expiresAt instanceof Date?t.expiresAt=e.expiresAt:"number"==typeof e.hoursToLive&&0!==e.hoursToLive&&((i=new Date).setTime(i.getTime()+60*e.hoursToLive*60*1e3),t.expiresAt=i),"string"==typeof e.path&&""!==e.path&&(t.path=e.path),"string"==typeof e.domain&&""!==e.domain&&(t.domain=e.domain),!0===e.secure&&(t.secure=e.secure)),t},o=function(e){return("object"==typeof(e=t(e)).expiresAt&&e.expiresAt instanceof Date?"; expires="+e.expiresAt.toGMTString():"")+"; path="+e.path+("string"==typeof e.domain?"; domain="+e.domain:"")+(!0===e.secure?"; secure":"")},a=function(){for(var t,e,i,n,o={},a=document.cookie.split(";"),r=0;r<a.length;r+=1){e=(t=a[r].split("="))[0].replace(/^\s*/,"").replace(/\s*$/,"");try{i=decodeURIComponent(t[1])}catch(e){i=t[1]}if("object"==typeof JSON&&null!==JSON&&"function"==typeof JSON.parse)try{n=i,i=JSON.parse(i)}catch(e){i=n}o[e]=i}return o},e=function(){};return e.prototype.get=function(e){var t,i,n=a();if("string"==typeof e)t=void 0!==n[e]?n[e]:null;else if("object"==typeof e&&null!==e)for(i in t={},e)void 0!==n[e[i]]?t[e[i]]=n[e[i]]:t[e[i]]=null;else t=n;return t},e.prototype.filter=function(e){var t,i={},n=a();for(t in"string"==typeof e&&(e=new RegExp(e)),n)t.match(e)&&(i[t]=n[t]);return i},e.prototype.set=function(e,t,i){if("object"==typeof i&&null!==i||(i={}),null==t)t="",i.hoursToLive=-8760;else if("string"!=typeof t){if("object"!=typeof JSON||null===JSON||"function"!=typeof JSON.stringify)throw new Error("cookies.set() received non-string value and could not serialize.");t=JSON.stringify(t)}i=o(i);document.cookie=e+"="+encodeURIComponent(t)+i},e.prototype.del=function(e,t){var i,n={};for(i in"object"==typeof t&&null!==t||(t={}),"boolean"==typeof e&&!0===e?n=this.get():"string"==typeof e&&(n[e]=!0),n)"string"==typeof i&&""!==i&&this.set(i,null,t)},e.prototype.test=function(){var e=!1;return this.set("cT","data"),"data"===this.get("cT")&&(this.del("cT"),e=!0),e},e.prototype.setOptions=function(e){n=t(e="object"!=typeof e?null:e)},new e}(),window.jQuery&&function(r){r.cookies=jaaulde.utils.cookies;var e={cookify:function(a){return this.each(function(){var e,t,i,n=["name","id"],o=r(this);for(e in n)if(!isNaN(e)&&"string"==typeof(t=o.attr(n[e]))&&""!==t){o.is(":checkbox, :radio")?o.attr("checked")&&(i=o.val()):i=o.is(":input")?o.val():o.html(),"string"==typeof i&&""!==i||(i=null),r.cookies.set(t,i,a);break}})},cookieFill:function(){return this.each(function(){for(var e,t,i=["name","id"],n=r(this),o=function(){return!!(e=i.pop())};o();)if("string"==typeof(t=n.attr(e))&&""!==t){null!==(t=r.cookies.get(t))&&(n.is(":checkbox, :radio")?n.val()===t?n.attr("checked","checked"):n.removeAttr("checked"):n.is(":input")?n.val(t):n.html(t));break}})},cookieBind:function(t){return this.each(function(){var e=r(this);e.cookieFill().change(function(){e.cookify(t)})})}};r.each(e,function(e){r.fn[e]=this})}(window.jQuery),jQuery(document).ready(function(e){var t,i=e(".emergency-bar-container");i.length&&(t=i.attr("class").replace(" red","").replace(" orange","").replace(" yellow","").replace(" green","").replace(" navy","").replace(" blue","").replace(" teal","").replace("emergency-bar-container",""),null==e.cookies.get("emergency-"+t+"shown")&&(e(".emergency-bar-container").addClass("show"),e(".emergency-bar-container .fa-close").click(function(){e(".emergency-bar-container").removeClass("show"),e.cookies.set("emergency-"+t+"shown","true")})))}),jQuery(document).ready(function(i){function e(){matchMedia("only screen and (min-width: 768px)").matches&&i(".three-quarter").height()>i(".sidebar").height()?i(".sidebar").height(i(".three-quarter").height()+50):i(".sidebar").height("auto")}var t=i("header nav"),n=t.find("button.menu-toggle"),o=t.find(".nav-menu"),t=i(".content-area img, .site-content img");t.removeAttr("width").removeAttr("height"),n.click(function(){o.is(":visible")?o.hide():o.show(),o.find("a").click(function(){var e=i(this).parent("li"),t=i(this).next("ul");!t.is(":visible")&&e.hasClass("menu-item-has-children")&&(event.preventDefault(),e.addClass("open"),t.show())})}),i(".content a:not(.previous):not(.next):not(.lightbox-iframe), a.off-site, .nav-menu a").click(function(e){e.preventDefault();var t=i(this),e=t.attr("href");t.hasClass("bypass")||e.match(/frontroyalfcu.test/i)||e.match(/frontroyalfcu.org/i)||e.match(/mortgages.cumortgage.net/i)||e.match(/cumortgage.mycuhomeadvantage.com/i)||e.match(/frontroyalfcu.cuconnections.com/i)||e.match(/www.camsbycbs4.net/i)||"#"===e.charAt(0)||"/"===e.charAt(0)?location.href=e:confirm("You are leaving frontroyalfcu.org and entering a third party website that is not a part of Front Royal Federal Credit Union.  The content you are about to view is produced by a third party unaffiliated to Front Royal Federal Credit Union. Front Royal FCU takes no responsibility for the content of the page.")&&window.open(e,"_blank")}),i("button[data-url]").click(function(){window.location.href=i(this).attr("data-url")}),setTimeout(function(){e()},1e3),i(window).resize(e)}),function(e,t,i,n,o){e.GoogleAnalyticsObject=i,e.ga=e.ga||function(){(e.ga.q=e.ga.q||[]).push(arguments)},e.ga.l=+new Date,n=t.createElement("script"),o=t.getElementsByTagName("script")[0],n.async=1,n.src="https://www.google-analytics.com/analytics.js",o.parentNode.insertBefore(n,o)}(window,document,"ga"),ga("create","UA-38315794-50","auto"),ga("send","pageview"),window.matchMedia||(window.matchMedia=function(){"use strict";var t,e,i,n=window.styleMedia||window.media;return n||(t=document.createElement("style"),e=document.getElementsByTagName("script")[0],i=null,t.type="text/css",t.id="matchmediajs-test",e?e.parentNode.insertBefore(t,e):document.head.appendChild(t),i="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle,n={matchMedium:function(e){e="@media "+e+"{ #matchmediajs-test { width: 1px; } }";return t.styleSheet?t.styleSheet.cssText=e:t.textContent=e,"1px"===i.width}}),function(e){return{matches:n.matchMedium(e||"all"),media:e||"all"}}}()),jQuery(document).ready(function(n){var o,a,r,i,s,c,l,d;n(".products")&&(o=n(".products"),a=o.find(".product-list"),r=1,a.length&&(i=o.find("button.product-nav"),s=o.find("button.product-nav.next"),c=o.find("button.product-nav.previous"),l=a.find(".product").length,(d=function(){var e=a.width(),t=o.find(".product"),t=t.width()+2*parseFloat(t.css("margin-right").replace("px",""))+2*parseFloat(t.css("padding-right").replace("px","")),t=Math.round(e/t),t=Math.ceil(l/t);1<r&&c.prop("disabled",!1),r==t&&s.prop("disabled",!0),1==r&&c.prop("disabled",!0),r<t&&s.prop("disabled",!1),1==r&&r==t&&(i.addClass("unnecessary"),a.addClass("no-nav"))})(),i.click(function(){var e=n(this).attr("class").replace("product-nav ",""),t=a.width(),i=o.find(".product"),i=i.width()+2*parseFloat(i.css("margin-right").replace("px",""))+2*parseFloat(i.css("padding-right").replace("px","")),i=Math.round(t/i);Math.ceil(l/i);"next"==e&&(a.css("text-indent",parseInt(a.css("text-indent"))-t),r+=1,d()),"previous"==e&&(a.css("text-indent",parseInt(a.css("text-indent"))+t),r-=1,d(),0<parseInt(a.css("text-indent"))&&a.css("text-indent",0))}),n(window).resize(function(){a.css("text-indent",0),r=1,d()})))}),jQuery(document).ready(function(l){l(".showcase").each(function(){var i,n,o,a,r,t=l(this),s=0,c=t.find(".slide").size();void 0!==t&&(i=t.find(".slide.visible"),n=t.find(".slide").last(),o=function(){var e=a(),t=e.next(".slide");t.length||(t=i),e.attr("class","slide hide-left"),t.attr("class","slide visible"),setTimeout(function(){e.attr("class","slide")},400),r()},a=function(){return t.find(".slide.visible")},r=function(){var e=a();e.find("img");console.log(Math.floor(e.height())),t.height(Math.floor(e.height()))},setTimeout(function(){r(),1<c&&(s=setInterval(o,1e4))},500),l(window).resize(function(){a();r()}),t.find(".showcase-nav a").click(function(){var e,t;l(this).hasClass("previous")?(e=a(),(t=e.prev(".slide")).length||(t=n),e.attr("class","slide"),t.attr("class","slide visible"),setTimeout(function(){e.attr("class","slide hide-left")},400),r()):o(),1<c&&clearInterval(s)}),t.find(".showcase-nav a.previous").hover(function(){t.find(".slide:not(.visible)").attr("class","slide hide-left")}),t.find(".showcase-nav a.next").hover(function(){t.find(".showcase .slide:not(.visible)").attr("class","slide")}))})}),jQuery(document).ready(function(i){i(".tab-content:first").length&&i(".tab-nav li").click(function(){var e=i(this).attr("class"),t=i(".tab-container").offset().top;i(".tab-content:not(."+e+"):visible").slideUp("slow"),i(".tab-content."+e+":hidden").slideDown("slow"),i("html,body").animate({scrollTop:t},700)}),i(".area-tabs").length&&(i(".area-tab-navigation li:first-child").click(function(){i(".area-tab-navigation li.active").removeClass("active"),i(this).addClass("active"),i(".area-tab-content.minors").removeClass("active").hide(),i(".area-tab-content.majors").addClass("active").show()}),i(".area-tab-navigation li:nth-child(2)").click(function(){i(".area-tab-navigation li.active").removeClass("active"),i(this).addClass("active"),i(".area-tab-content.majors").removeClass("active").hide(),i(".area-tab-content.minors").addClass("active").show()}))}),jQuery(document).ready(function(i){1<i(".testimonial").length&&setInterval(function(){var e=i(".testimonial:visible"),t=e.next(".testimonial");0==t.length&&(t=i(".testimonial:first")),e.hide(),t.show()},2e4)});