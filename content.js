var clickInterval = null;
var refreshHivemindButton = null;
var listRefreshHivemindButton = null;
var intTimedelay = 5;

console.log('\n\n\nStart...\n\n\n');

function startClicker(timeDelay){
    
    intTimedelay = parseInt(timeDelay);

    listRefreshHivemindButton = document.querySelectorAll('.widget-header.pr-2.pl-2.m-0>span>b');

    console.log(refreshHivemindButton);

    listRefreshHivemindButton.forEach(element => {
        if (element.textContent === 'Hivemind Feedback') {
            refreshHivemindButton = element.parentElement.parentElement.querySelector('.fa.fa-refresh.text-primary').parentElement;
        }
    });

    clickInterval = setInterval(()=>{
        listRefreshHivemindButton = document.querySelectorAll('.widget-header.pr-2.pl-2.m-0>span>b');
    
        console.log(refreshHivemindButton);
    
        listRefreshHivemindButton.forEach(element => {
            if (element.textContent === 'Hivemind Feedback') {
                refreshHivemindButton = element.parentElement.parentElement.querySelector('.fa.fa-refresh.text-primary').parentElement;
            }
        });
        
        refreshHivemindButton.click();
    }, intTimedelay*1000);
}

function stopClicker(){
    clearInterval(clickInterval);
    clickInterval = null;
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(request.delayTime);
        if (request.action === "startClick"){
            console.log("Start beep");
            startClicker(request.delayTime);
        }
        else if (request.action === "stopClick") {
            console.log("Stop beep");
            stopClicker();
        }
        if (request.action === "isStart") {
            if (clickInterval) {
                console.log('true');
                sendResponse({isStart:"true"});
            }
            else {
                console.log('false');
                sendResponse({isStart:"false"});
            }
        } 
    }
);