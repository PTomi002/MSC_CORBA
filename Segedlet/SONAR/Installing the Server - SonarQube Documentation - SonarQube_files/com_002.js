;try {
/* module-key = 'com.k15t.scroll.scroll-platform:tinymce-scm-info', location = '/com/k15t/scroll/platform/ui/tinymce/plugin/scm-info/scm-info.js' */
(function(d){if(AJS.Meta.get("content-type")!="page"){return}function g(m,l){return m.length>l?jQuery.trim(m).substring(0,l).split(" ").join(" ")+"...":m}function k(){return Scroll.Versions.Context.workingVersion.versionId==="current"}function j(){return d("#sv-infoline.sv-unversioned-page").length!==0||(Scroll.Versions.Context.page!==undefined&&Scroll.Versions.Context.page.isUnversionedPage)}function h(){return AJS.Meta.get("new-page")===false||d("#sv-infoline.sv-scheduled-modification").length!==0}function c(){if(Scroll.Versions.Context.page===undefined||Scroll.Versions.Context.page.isFallbackChange||Scroll.Versions.Context.page.isUnresolvedChange||(Scroll.Versions.Context.page.isUnversionedPage&&Scroll.Versions.Context.workingVersion.versionId!=="current")){return true}else{return false}}function i(){return Scroll.Versions.Context.modules!==undefined&&Scroll.Versions.Context.modules.TranslationManagement.isEnabledInSpace&&Scroll.Versions.Context.modules.TranslationManagement.isActive}function e(){return Scroll.Versions.Context.modules!==undefined&&Scroll.Versions.Context.modules.VersionManagement.isEnabledInSpace&&Scroll.Versions.Context.modules.VersionManagement.isActive}function f(){if(e()){d(".aui-toolbar2-secondary").prepend(com.k15t.confluence.sv.toolbarButtonVersionInfo({workingVersion:g(Scroll.Versions.Context.workingVersion.name,9)}));if(k()&&j()){if(c()){b(com.k15t.confluence.sv.scmInlineDialog({title:"Creating unversioned page",description:"Your are creating a new unversioned page."}),"#rte-version-info")}else{b(com.k15t.confluence.sv.scmInlineDialog({title:"Editing unversioned page",description:"Your are editing an unversioned page."}),"#rte-version-info")}}else{if(k()&&!j()){var l=b(com.k15t.confluence.sv.scmInlineDialog({title:"Currently published version",description:"Are you sure you want to edit the currently published version of the page? The changes will be overridden if you publishing to same space."}),"#rte-version-info");if(AJS.Meta.get("new-page")===false){l.show();d("#inline-dialog-scm-info").addClass("scm-warning")}}else{if(c()){var l=b(com.k15t.confluence.sv.scmInlineDialog({title:"New versioned page",description:AJS.format("You are creating a new version of this page in version {0}",g(Scroll.Versions.Context.workingVersion.name,20))}),"#rte-version-info");if(h()&&!j()){l.show();d("#inline-dialog-scm-info").addClass("scm-warning")}}else{b(com.k15t.confluence.sv.scmInlineDialog({title:"Editing versioned page",description:AJS.format("The page was changed in this version. You are editing the page in version {0}",g(Scroll.Versions.Context.workingVersion.name,20))}),"#rte-version-info")}}}}}function a(){if(i()){d(".aui-toolbar2-secondary").prepend(com.k15t.confluence.sv.toolbarButtonLanguageInfo({lang:Scroll.Versions.Context.user.currentLanguage.encodedKey}));b(com.k15t.confluence.sv.scmInlineDialog({title:"Page Language",description:AJS.format("You are editing the {0} translation of this page.",Scroll.Versions.Context.user.currentLanguage.displayName)}),"#rte-lang-info")}}function b(n,l){var m=AJS.InlineDialog(d(l),"scm-info",function(p,o,q){p.html(n);q();return false},{hideDelay:600});d(".scm-dialog-close").live("click",m.hide);return m}AJS.toInit(function(){if(!d("body").hasClass("contenteditor")){return}a();f();if(i()){d("#rte-lang-info").addClass("rte-separator-info")}else{d("#rte-version-info").addClass("rte-separator-info")}tinymce.create("tinymce.plugins.scm.SCMInfo",{getInfo:function(){return{longname:"Current Version Information Panel for Scroll Content Management",version:"1.0.0",author:"K15t",authorurl:"http://www.K15t.com"}}});tinymce.PluginManager.add("scm-info",tinymce.plugins.scm.SCMInfo)})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.k15t.scroll.scroll-platform:tinymce-scm-info', location = '/com/k15t/scroll/platform/ui/tinymce/plugin/scm-info/scm-info-template.soy' */
// This file was automatically generated from scm-info-template.soy.
// Please don't edit this file by hand.

if (typeof com == 'undefined') { var com = {}; }
if (typeof com.k15t == 'undefined') { com.k15t = {}; }
if (typeof com.k15t.confluence == 'undefined') { com.k15t.confluence = {}; }
if (typeof com.k15t.confluence.sv == 'undefined') { com.k15t.confluence.sv = {}; }


com.k15t.confluence.sv.toolbarButtonVersionInfo = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class="aui-buttons scm-toolbar-group"><li id="rte-version-info" class="rte-scm-info"><a href="#" class="toolbar-trigger aui-button"><span class="trigger-text">', soy.$$escapeHtml(opt_data.workingVersion), '</span></a></li></ul>');
  return opt_sb ? '' : output.toString();
};


com.k15t.confluence.sv.toolbarButtonLanguageInfo = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class="aui-buttons scm-toolbar-group"><li id="rte-lang-info" class="rte-scm-info"><a href="#" class="toolbar-trigger aui-button"><span class="trigger-text">', soy.$$escapeHtml(opt_data.lang), '</span></a></li></ul>');
  return opt_sb ? '' : output.toString();
};


com.k15t.confluence.sv.scmInlineDialog = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<h3>', soy.$$escapeHtml(opt_data.title), '<span class="scm-dialog-close">✕</span></h3><p>', soy.$$escapeHtml(opt_data.description), '</p>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
