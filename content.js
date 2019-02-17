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
            elt.innerHTML = "SHOULD YOU STILL BE HERE?"
            elt.style["color"] = "#FF69B4";
        }
        let header2 = document.getElementsByTagName("h2");
        for (elt of header2) {
            elt.innerHTML = "SHOULD YOU STILL BE HERE?"
            elt.style["color"] = "#FF69B4";
        }
        let header3 = document.getElementsByTagName("h3");
        for (elt of header3) {
            elt.innerHTML = "SHOULD YOU STILL BE HERE?"
            elt.style["color"] = "#FF69B4";
        }
        let header4 = document.getElementsByTagName("h4");
        for (elt of header4) {
            elt.innerHTML = "SHOULD YOU STILL BE HERE?"
            elt.style["color"] = "#FF69B4";
        }
    }
    if (msg.message === "turnOn") {
        let paragraph = document.getElementsByTagName("p");
        for (elt of paragraph) {
            elt.innerHTML = "You Should Be Studying"
            elt.style["color"] = "#FF69B4";
        }
        let header2 = document.getElementsByTagName("h2");
        for (elt of header2) {
            elt.innerHTML = "You Should Be Studying"
            elt.style["color"] = "#FF69B4";
        }
        let header3 = document.getElementsByTagName("h3");
        for (elt of header3) {
            elt.innerHTML = "You Should Be Studying"
            elt.style["color"] = "#FF69B4";
        }
        let header4 = document.getElementsByTagName("h4");
        for (elt of header4) {
            elt.innerHTML = "You Should Be Studying"
            elt.style["color"] = "#FF69B4";
        }
    }
    if (msg.message === "turnOff") {
        alert("Is that a good idea?");
        location.reload();
    }
});