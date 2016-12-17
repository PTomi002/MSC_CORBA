;try {
/* module-key = 'com.k15t.scroll.scroll-platform:translation-ui-webresources', location = '/com/k15t/scroll/platform/ui/translation/translation-editor-template.soy' */
// This file was automatically generated from translation-editor-template.soy.
// Please don't edit this file by hand.

if (typeof Scroll == 'undefined') { var Scroll = {}; }
if (typeof Scroll.Versions == 'undefined') { Scroll.Versions = {}; }
if (typeof Scroll.Versions.Templates == 'undefined') { Scroll.Versions.Templates = {}; }
if (typeof Scroll.Versions.Templates.Translations == 'undefined') { Scroll.Versions.Templates.Translations = {}; }
if (typeof Scroll.Versions.Templates.Translations.Editor == 'undefined') { Scroll.Versions.Templates.Translations.Editor = {}; }


Scroll.Versions.Templates.Translations.Editor.translationStatusDialog = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p>', soy.$$escapeHtml(AJS.format("Is the translation to {0} complete?",opt_data.language.displayName)), '</p><p style="font-size: smaller;">', soy.$$escapeHtml(AJS.format("Click \x27\x27Complete\x27\x27 if the {0} translation reflects the content of the original language. If in doubt, you should click \x27Not (yet) Complete\x27.",opt_data.language.displayName)), '</p>');
  return opt_sb ? '' : output.toString();
};


Scroll.Versions.Templates.Translations.Editor.originalSidebar = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="sv-original"><div class="sv-original-contdainer"><span id="sv-original-caption">', soy.$$escapeHtml("Original Language"), '</span></div><div id="sv-original-expandcollapse-toolbar" class="aui-toolbar"><div class="toolbar-group"><span class="toolbar-item"><a href="#" id="sv-original-expandcollapse" class="toolbar-trigger sv-tt" data-tooltip="', soy.$$escapeHtml("Show or hide original language."), '"><span class="icon">', soy.$$escapeHtml("sv.Common.Words.Expand"), '</span></a></span></div></div><div id="sv-original-content">', opt_data.content, '</div></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.k15t.scroll.scroll-platform:translation-ui-webresources', location = '/com/k15t/scroll/platform/ui/translation/translation-editor.js' */
(function(e){AJS.toInit(function(){if(Scroll.Versions.Context.space===undefined||!Scroll.Versions.Context.space.isTranslationsEnabled){return}if(d()){if(b()){c();a()}}else{f()}});var d=function(){return(window.location.href.indexOf("/editpage.action")!=-1)||window.location.href.indexOf("/createpage.action")!=-1};var b=function(){return !Scroll.Versions.Context.user.currentLanguage.isOriginal};var a=function(){var k;var j=function(){AJS.Confluence.Editor.addSaveHandler(g)};var g=function(){var l=Scroll.Versions.Context.user.currentLanguage;if(k){k.remove();k=null}k=new AJS.Dialog({height:240,width:480,closeOnOutsideClick:true,id:"translation-status-dialog"});k.addHeader("Translation Status","sv-dialog-heading");k.addPanel("",Scroll.Versions.Templates.Translations.Editor.translationStatusDialog({language:l}),"sv-browse-pagetree");k.addButton("Not (yet) Complete",function(){k.remove();i()});k.addButton("Complete",function(m,n){h();i()},"insert-button");k.addLink("Cancel",function(m,n){k.remove();k=null});k.show();return false};var i=function(){AJS.Confluence.Editor.removeAllSaveHandlers();e("#editpageform, #createpageform").submit()};var h=function(){e("<input>").attr({type:"hidden",name:"sv.translation.complete",value:"true"}).appendTo("#editpageform, #createpageform")};j()};var c=function(){var k=41;var r="sv-original";var l,j,p,o;var s=function(){var y=(AJS.params.pageId!="0")?AJS.params.pageId:q("fromPageId");var w='<iframe src="'+contextPath+"/plugins/com.k15t.scroll.platform/viewOriginalLanguageSource.action?pageId="+y+'"></iframe>';var v={};try{v=JSON.parse(AJS.Cookie.read(r))}catch(x){}p=e("#editpageform, #createpageform").innerWidth();j=v.width||p/3;l=e(Scroll.Versions.Templates.Translations.Editor.originalSidebar({content:w})).appendTo("#editpageform, #createpageform");o=e("#wysiwygTextarea_ifr");n(true);m();e("#sv-original-expandcollapse").click(function(z){if(l.hasClass("sv-original-expanded")){n()}else{i(true)}z.preventDefault()});e("#sv-original-collapse").click(function(z){n();z.preventDefault()});e(window).resize(g);if(v.right){h()}if(v.expanded){i(false)}e.fn.tooltip&&e(".sv-tt.toolbar-trigger").tooltip({gravity:"nw",title:function(){return e(this).data("tooltip")}});var u=AJS.Confluence.Editor.showPreview;AJS.Confluence.Editor.showPreview=function(z){u(z);if(z){e("#sv-original").hide()}else{e("#sv-original").show()}};setInterval(g,120)};var n=function(u){var v={width:k+"px"};if(l.hasClass("sv-original-right")){v.left=(p-k)+"px"}if(u){l.css(v);m()}else{var w=e("#sv-original-content, #sv-original-caption");w.animate({opacity:0},100).promise().done(function(){l.removeClass("sv-original-expanded");l.animate(v,250,function(){o.animate({opacity:0},100,function(){m();w.add(o).animate({opacity:1})})})})}};var q=function(u){return decodeURI((RegExp(u+"=(.+?)(&|$)").exec(location.search)||[,null])[1])};var i=function(u){var w=u?250:0;var v={width:j+"px"};if(l.hasClass("sv-original-right")){v.left=(p-j)+"px"}var x=e("#sv-original-content, #sv-original-caption");x.animate({opacity:0},100).promise().done(function(){l.addClass("sv-original-expanded");l.animate(v,w,function(){o.animate({opacity:0},100,function(){m();x.add(o).css("filter","").animate({opacity:1})})})})};var t=function(){l.removeClass("sv-original-right");m()};var h=function(){l.addClass("sv-original-right");m()};var m=function(){var u=l.hasClass("sv-original-expanded"),v=l.hasClass("sv-original-right");if(!v){l.css({left:0})}o.css({"margin-left":v?"":"auto"});l.resizable("destroy");if(u){l.resizable({minWidth:220,start:function(){e("body").append('<div id="sv-resize-mask"/>')},stop:function(){e("#sv-resize-mask").remove()},handles:v?"w":"e"})}g()};var g=function(){p=e("#editpageform, #createpageform").innerWidth();var v=l.hasClass("sv-original-expanded"),w=l.hasClass("sv-original-right");if(v){j=l.outerWidth(true)+6;o.css({width:(p-j)+"px"});l.resizable("option","maxWidth",p-100)}else{o.css({width:(p-k)+"px"})}l.css({height:(o.outerHeight()+2)+"px"}).offset({top:o.offset().top-1});if(l.hasClass("sv-original-right")){l.css({left:(p-l.outerWidth(true))+"px"})}var u=e("#editor-precursor");if(u){u.css({left:(l.outerWidth(true)+6)+"px"})}AJS.Cookie.save(r,JSON.stringify({expanded:v,right:w,width:j}))};s()};var f=function(){var i=function(){if(b()){g()}};var g=function(){var j=Scroll.Versions.Context.user.currentLanguage;if(Scroll.Versions.Context.user.permissions.Translate){e("#editPageLink").attr("title",AJS.format("{0} translation",j.displayName)).find("span").html(h())}else{e("#editPageLink").remove()}};var h=function(){if(AJS.Meta.get("build-number")>=5780){return'<span class="aui-icon aui-icon-small aui-iconfont-edit"></span> '+"Translat\u003cu\u003ee\u003c/u\u003e"}else{return "Translat\u003cu\u003ee\u003c/u\u003e"}};i()}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
