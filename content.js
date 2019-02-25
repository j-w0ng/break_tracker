console.log("LOGGING");

window.onload = function() {
chrome.runtime.sendMessage({method:"statusUpdate"},function(response){
    if (response) {
        let paragraph = document.getElementsByTagName("p");
        for (elt of paragraph) {
            elt.style["color"] = "#FFFFFF";
        }
        let header2 = document.getElementsByTagName("h2");
        for (elt of header2) {
            elt.style["color"] = "#FFFFFF";
        }
        let header3 = document.getElementsByTagName("h3");
        for (elt of header3) {
            elt.style["color"] = "#FFFFFF";
        }
        let header4 = document.getElementsByTagName("h4");
        for (elt of header4) {
            elt.style["color"] = "#FFFFFF";
        }
    }
})
}

chrome.runtime.onMessage.addListener(
    function gotMessage(msg, sender, sendResponse) {
        console.log(msg.message);
        if (msg.message === "breakStart") {
            location.reload();
            let paragraph = document.getElementsByTagName("p");
            for (elt of paragraph) {
                elt.style["color"] = "initial";
            }
            let header2 = document.getElementsByTagName("h2");
            for (elt of header2) {
                elt.style["color"] = "initial";
            }
            let header3 = document.getElementsByTagName("h3");
            for (elt of header3) {
                elt.style["color"] = "initial";
            }
            let header4 = document.getElementsByTagName("h4");
            for (elt of header4) {
                elt.style["color"] = "initial";
            }
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
        if (msg.message === "turnBreakTrackerOn") {
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
        if (msg.message === "turnBreakTrackerOff") {
            alert("Is that a good idea?");
            location.reload();
            let paragraph = document.getElementsByTagName("p");
            for (elt of paragraph) {
                elt.style["color"] = "initial";
            }
            let header2 = document.getElementsByTagName("h2");
            for (elt of header2) {
                elt.style["color"] = "initial";
            }
            let header3 = document.getElementsByTagName("h3");
            for (elt of header3) {
                elt.style["color"] = "initial";
            }
            let header4 = document.getElementsByTagName("h4");
            for (elt of header4) {
                elt.style["color"] = "initial";
            }
        }
    });