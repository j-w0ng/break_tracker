console.log("Chrome extension go");

let paragraph = document.getElementsByTagName("p");
        for (elt of paragraph) {
        elt.style['blur'] = '#FFFFFF';
        }

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(msg, sender, sendResponse) {
    console.log(msg.txt);
    if (msg.txt === "breakStart") {
        let paragraph = document.getElementsByTagName("p");
        for (elt of paragraph) {
        elt.style['color'] = '#000000';
        }
    }
}