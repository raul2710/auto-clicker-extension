var clickInterval = null;
const refreshHivemindButton = document.querySelector('btn btn-link m-0 mr-1 p-0 btn-primary btn-sm');

function startClicker(){
    clickInterval = setInterval(()=>{refreshHivemindButton.click()}, 1000);
}

function stopClicker(){
    clearInterval(clickInterval);
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {

        if (request.action === "startClick"){
            startClicker();
        }
        else if (request.action === "stopClick") {
            console.log("Start beep");
            stopClicker();
        }
    }
);