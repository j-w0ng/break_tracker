var clicks = 0;
var extensionStatus = false;
var onBreak = true;

chrome.runtime.onMessage.addListener(function updateClicks(msg, sender, sendResponse) {
        console.log(msg.message);
        console.log(clicks);
        if (msg.message === "updateCounter") 
        {
            clicks += 1;
        }
    }
);

chrome.runtime.onMessage.addListener(function updateClicks(msg, sender, sendResponse) {
  if (msg.message === "turnOnExtension") 
  {
      extensionStatus = true;
  }
}
);

chrome.runtime.onMessage.addListener(function updateClicks(msg, sender, sendResponse) {
  if (msg.message === "turnOffExtension") 
  {
    extensionStatus = false;
  }
}
);

chrome.runtime.onMessage.addListener(function updateClicks(msg, sender, sendResponse) {
  if (msg.message === "breakBegin") 
  {
      onBreak = true;
  }
}
);

chrome.runtime.onMessage.addListener(function updateClicks(msg, sender, sendResponse) {
  if (msg.message === "breakOver") 
  {
      onBreak = false;
  }
}
);

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if(message.method === "getClicks"){
      sendResponse(clicks);
    }
  });

  chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if(message.method === "statusUpdate"){
      sendResponse(extensionStatus);
    }
  });

  chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if(message.method === "breakStatus"){
      console.log(onBreak);
      sendResponse(onBreak);
    }
  });


chrome.alarms.onAlarm.addListener(function(alarm) {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "breakEnd"});
        onBreak = false;
      });
    alert("Break Over");
});

