function filePicker()
{
 
///////////////////////////////////////////////////////////////////////////File-Picker

//Components.utils.import("resource://gre/modules/FileUtils.jsm");
//Components.utils.import("resource://gre/modules/NetUtil.jsm");

const nsIFilePicker = Components.interfaces.nsIFilePicker;

var fp = Components.classes["@mozilla.org/filepicker;1"]
                   .createInstance(nsIFilePicker);
fp.init(window, "Dialog Title", nsIFilePicker.modeGetFolder);
fp.appendFilters(nsIFilePicker.filterAll | nsIFilePicker.filterText);

var rv = fp.show();
if (rv == nsIFilePicker.returnOK || rv == nsIFilePicker.returnReplace) {

  var file = fp.file;
  //alert(file);
  // Get the path as string. Note that you usually won't
  // need to work with the string paths.
  var path = fp.file.path;
  //alert(path);
  // work with returned nsILocalFile...
  return path;
}




//////////////////////////////////////////////////////////////////////////File-picker

}
