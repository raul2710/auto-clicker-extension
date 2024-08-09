const btnInit = document.querySelector('.btnstart');
var rangeMin = document.getElementById('minuteRange');
var inputSec = document.getElementById('inputSec');
var showMinute = document.getElementById('showMinute');

var isStart = false;
var counter = 0;
var counterInterval = null;

const [tab] = await chrome.tabs.query({
    // url: "https://console.sara.synkar.com/#/c3/robot?robot*",
    active: true,
    currentWindow: true
})

const response = await chrome.tabs.sendMessage(tab.id, {action: 'isStart'});

if (response.isStart === "true") {
    console.log('true');
    isStart = true;
    btnInit.textContent = 'Stop';
    btnInit.classList.add('btnstart-stop');
}
  
btnInit.addEventListener('click', async ()=>{
    if (!isStart) {
        counterInterval = inputSec.value;
        console.log(counterInterval);
        await chrome.tabs.sendMessage(tab.id, { 
            action: 'startClick',
            delayTime: counterInterval
        });

        isStart = true;
        btnInit.textContent = 'Stop';
        btnInit.classList.add('btnstart-stop');
    } else {
        await chrome.tabs.sendMessage(tab.id, { action: 'stopClick' });

        isStart = false;
        btnInit.textContent = 'Start';
        btnInit.classList.remove('btnstart-stop');
    }
})