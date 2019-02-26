chrome.runtime.sendMessage({method:"getClicks"},function(response){
  document.getElementById("breakCounter").innerHTML = "Total Breaks: " + response;
});

var timer = {

  onHandler : function(e) {
      chrome.alarms.create("startTimer", {delayInMinutes: 1, periodInMinutes: 1} );
      chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "breakStart"});
        chrome.runtime.sendMessage({message: "updateCounter"});
        chrome.runtime.sendMessage({message: "breakBegin"});
      });
      window.close();
  },

  offHandler : function(e) {
      chrome.alarms.clear("startTimer");
      chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "breakEnd"});
        chrome.runtime.sendMessage({message: "breakOver"});
      });
      window.close();
  },

  extensionStart : function(e) {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
      var activeTab = tabs[0];
      console.log("turnON");
      chrome.tabs.sendMessage(activeTab.id, {"message": "turnBreakTrackerOn"});
      chrome.runtime.sendMessage({message: "turnOnExtension"});
      chrome.runtime.sendMessage({message: "breakOver"});
    });
    window.close();
  },

  extensionOff : function(e) {
    chrome.alarms.clear("startTimer");
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {"message": "turnBreakTrackerOff"});
      chrome.runtime.sendMessage({message: "turnOffExtension"});
      chrome.runtime.sendMessage({message: "breakBegin"});
    });
    window.close();
  },


  setup: function() {
      var t = document.getElementById("timerStart");
      t.addEventListener("click",  timer.onHandler );
      var t = document.getElementById("timerEnd");
      t.addEventListener("click",  timer.offHandler );
      var t = document.getElementById("turnBreakTrackerOn");
      t.addEventListener("click",  timer.extensionStart);
      var t = document.getElementById("turnBreakTrackerOff");
      t.addEventListener("click",  timer.extensionOff );
  }
};

document.addEventListener("DOMContentLoaded", function () {
timer.setup();
});
