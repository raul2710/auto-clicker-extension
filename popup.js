const btnInit = document.querySelector('.btnstart');
var rangeMin = document.getElementById('minuteRange');
var inputSec = document.getElementById('inputSec');
var showMinute = document.getElementById('showMinute');

var isStart = false;
var counter = 0;
var counterInterval = null;
var clickInterval = null;
var itemClickable = null;

const [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true
})

// function stopCounter(){
//     clearInterval(counterInterval);
//     counterInterval = null;
// }

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

function startClicker(){
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: ()=>{
            itemClickable = document.getElementById('addbtn');
            clickInterval = setInterval(()=>{itemClickable.click()}, 1000);
        }
    })
}
function stopClicker(){
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: ()=>{
            itemClickable = document.getElementById('addbtn');
            clearInterval(clickInterval);
        }
    })
}


btnInit.addEventListener('click', async ()=>{
    if (!isStart) {
        startClicker();

        isStart = true;
        btnInit.textContent = 'Stop';
        btnInit.classList.add('btnstart-stop');
    } else {
        stopClicker();

        isStart = false;
        btnInit.textContent = 'Start';
        btnInit.classList.remove('btnstart-stop');
    }
})