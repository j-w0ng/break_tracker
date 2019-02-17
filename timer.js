chrome.runtime.sendMessage({method:"getClicks"},function(response){
  document.getElementById("breakCounter").innerHTML = "Total Breaks: " + response;
  console.log(response);
});

var timer = {

  onHandler : function(e) {
      chrome.alarms.create("startTimer", {delayInMinutes: 1, periodInMinutes: 1} );
      chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "breakStart"});
        chrome.runtime.sendMessage({message: "updateCounter"});
      });
      window.close();
  },

  offHandler : function(e) {
      chrome.alarms.clear("startTimer");
      chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "breakEnd"});
      });
      window.close();
  },

  extensionStart : function(e) {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {"message": "turnOn"});
    });
    window.close();
  },

  extensionOff : function(e) {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {"message": "turnOff"});
    });
    window.close();
  },


  setup: function() {
      var t = document.getElementById("timerStart");
      t.addEventListener("click",  timer.onHandler );
      var t = document.getElementById("timerEnd");
      t.addEventListener("click",  timer.offHandler );
      var t = document.getElementById("turnOn");
      t.addEventListener("click",  timer.extensionStart);
      var t = document.getElementById("turnOff");
      t.addEventListener("click",  timer.extensionOff );
  }
};

document.addEventListener("DOMContentLoaded", function () {
timer.setup();
});