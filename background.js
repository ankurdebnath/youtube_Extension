chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    var url = tab.url;
    // if (changeInfo.url !== undefined && info.status == "loading" && url !== null) {
    	chrome.tabs.sendMessage(tab.id, "Changed");
    // }
});
chrome.tabs.onCreated.addListener(function(tabId, changeInfo, tab) {
//     var url = tab.url;
//     if (info.status == "complete" && url !== null) {
    	chrome.tabs.sendMessage(tab.id, "Changed");
//     }
});