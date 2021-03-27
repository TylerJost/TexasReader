// searchUT = function(word){
//     var query = word.linkUrl;
//    chrome.tabs.create({url: "http://ezproxy.lib.utexas.edu/login?url=" + query});
//  };


// chrome.contextMenus.create({
//  title: "Search in UT Austin database",
//  contexts:["link"],  // ContextType
//  onclick: searchUT // A callback function
// });
reloadUT = function(word){
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
        chrome.tabs.create({url: "http://ezproxy.lib.utexas.edu/login?url="+tabs[0].url})
    });
}

chrome.contextMenus.create({
    title: "Reload through UT Austin proxy",
    contexts:["all"],  // ContextType
    onclick: reloadUT // A callback function
   });


