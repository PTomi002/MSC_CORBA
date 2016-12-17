;try {
/* module-key = 'com.k15t.scroll.scroll-platform:dnd-overwrite-webresources', location = '/com/k15t/scroll/platform/ui/page/page-dnd-overwrite.js' */
(function(e){var b=false;var c=function(){if(!b){b=new Scroll.Versions.Dialog({height:240,width:640});b.addHeader("Versioning Issues caused by Page Attachments");b.addPanel("",Scroll.Versions.Page.Templates.dndInfo({workingVersion:Scroll.Versions.Context.workingVersion.name,targetVersion:Scroll.Versions.Context.targetVersion.name}),"sv-dnd-info");b.addButton("Close",function(){b.hide()})}b.show()};var a=true;var d=plupload.Uploader;plupload.Uploader=function(){d.apply(this,arguments);this.bind("BeforeUpload",function(){if(!a){c();return false}})};var f=AJS.DragAndDropUtils.init;AJS.DragAndDropUtils.init=function(){if(AJS.DragAndDrop.defaultDropHandler){var g=AJS.DragAndDrop.defaultDropHandler;AJS.DragAndDrop.defaultDropHandler=function(h){if(!a){AJS.DragAndDropUtils.preventDefault(h);AJS.DragAndDropUtils.stopPropagation(h);c()}else{return g.apply(this,arguments)}}}return f.apply(this,arguments)};AJS.toInit(function(){if(e("#sv-infoline").is(".sv-masterpage-no-fallback, .sv-fallback, .sv-no-matching-version, .sv-scheduled-removal")||(e("#sv-infoline").is(".sv-unversioned-page")&&Scroll.Versions.Context.workingVersion.versionId!="current")){AJS.log("[Scroll Versions] Suppressing attachment upload via drag and drop.");e(".gliffy-item.gliffy-start-button a").unbind("click").bind("click",function(g){g.preventDefault();g.stopPropagation();c();return false});e(".balsamiq_mockup a.balsamiq_mockup_link").unbind("click").bind("click",function(g){g.preventDefault();g.stopPropagation();c();return false});a=false}})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
