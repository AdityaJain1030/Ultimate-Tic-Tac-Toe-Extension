chrome.browserAction.onClicked.addListener(() => {
    chrome.tabs.create({active:true, url: "index.html"});
});

chrome.omnibox.onInputEntered.addListener(() => {
    chrome.tabs.create({active:true, url: "index.html"});
})