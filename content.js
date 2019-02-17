console.log("LOGGING");


chrome.runtime.onMessage.addListener(
    function gotMessage(msg, sender, sendResponse) {
    console.log(msg.message);
    if (msg.message === "breakStart") {
        location.reload();  
    }
    if (msg.message === "breakEnd") {
        let paragraph = document.getElementsByTagName("p");
        for (elt of paragraph) {
            elt.innerHTML = "SHOULD YOU BE HERE STILL?"
            elt.style["color"] = "#FF69B4";
        }
    }
    if (msg.message === "turnOn") {
        let paragraph = document.getElementsByTagName("p");
        for (elt of paragraph) {
            elt.innerHTML = "You Should Be Studying"
            elt.style["color"] = "#FF69B4";
        }
    }
    if (msg.message === "turnOff") {
        alert("Is that a good idea?");
        location.reload();
    }
});