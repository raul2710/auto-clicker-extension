const btnInit = document.querySelector('.btnstart');
var rangeMin = document.getElementById('minuteRange');
var inputSec = document.getElementById('inputSec');
var showMinute = document.getElementById('showMinute');

var isStart = false;
var counter = 0;
var counterInterval = null;


const [tab] = await chrome.tabs.query({
    url: "https://console.sara.synkar.com/#/c3/robot?robot*",
    active: true,
    currentWindow: true
})

// function stopCounter(){
//     clearInterval(counterInterval);
//     counterInterval = null;
// }

// https://console.sara.synkar.com/#/c3/robot?robot*

// // const clickSimulate = ()=>{
// //     showMinute.textContent = counter;
// //     counter++;
// // }
// function testeStart(){
//     itemClickable = document.getElementById('addbtn');
    
//     clickInterval = setInterval(() => {
//         itemClickable.click();
//     }, 1000);
// }

// function testeStop(){
//     itemClickable = document.getElementById('addbtn');
    
//     chrome.scripting.executeScript({
//         target: {tabId: tab.id},
//         function: ()=>{
//             clearInterval(clickInterval);
//         }
//     })

// }

// function startCounter(){
//     counter = 0;
//     showMinute.textContent = counter;
//     // counterInterval = setInterval(clickSimulate, inputSec.value*1000);

//     chrome.scripting.executeScript({
//         target: {tabId: tab.id},
//         function: testeStart
//     })
// }


btnInit.addEventListener('click', async ()=>{
    if (!isStart) {
        await chrome.tabs.sendMessage(tab.id, { action: 'startClick' });

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