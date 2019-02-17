var clicks = 0;

chrome.runtime.onMessage.addListener(function updateClicks(msg, sender, sendResponse) {
        console.log(msg.message);
        console.log(clicks);
        if (msg.message === "updateCounter") 
        {
            clicks += 1;
        }
    }
);

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if(message.method === "getClicks"){
      sendResponse(clicks);
    }
  });
  


chrome.alarms.onAlarm.addListener(function(alarm) {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "breakEnd"});
      });
    alert("Break Over");
});

