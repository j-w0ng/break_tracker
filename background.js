chrome.browserAction.onClicked.addListener(button)

function button(tab) {
    var msg = {
        txt: "breakStart"
    }
    chrome.tabs.sendMessage(tab.id, msg);
}