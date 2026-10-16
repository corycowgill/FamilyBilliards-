'use strict';
// Native dialogs keep focus inside the game menus and support Escape.
function isPaused(){return Boolean(document.querySelector('dialog[open]'));}
function openGameDialog(id){cancelCharge();document.querySelectorAll('dialog[open]').forEach(d=>d.close());$(id).showModal();}
function closeGameDialogs(){document.querySelectorAll('dialog[open]').forEach(d=>d.close());canvas.focus();}
function showResult(){$('#resultTitle').textContent=mode==='solo'?'Table cleared!':names()[scores[0]>scores[1]?0:1]+' wins!';$('#resultScore').textContent=mode==='solo'?`15 balls. ${shotCount} shots. Nicely played.`:`North Side ${scores[0]} — ${scores[1]} South Side. Good game, Chicago.`;openGameDialog('#resultDialog');}
let pendingRestart=null;
function requestRestart(action){cancelCharge();if(shotCount&&!finished){pendingRestart=action;openGameDialog('#confirmDialog');}else{action();closeGameDialogs();}}
$('#menu').onclick=()=>openGameDialog('#gameMenu');
$('#help').onclick=()=>openGameDialog('#helpDialog');
$('#resume').onclick=closeGameDialogs;
$('#new').onclick=()=>requestRestart(reset);
$('#playAgain').onclick=()=>{reset();closeGameDialogs();};
$('#keepPlaying').onclick=()=>{pendingRestart=null;closeGameDialogs();};
$('#confirmRestart').onclick=()=>{const action=pendingRestart;pendingRestart=null;if(action)action();closeGameDialogs();};
document.querySelectorAll('[data-mode]').forEach(button=>{button.onclick=()=>{if(button.dataset.mode===mode){closeGameDialogs();return;}requestRestart(()=>{mode=button.dataset.mode;document.querySelectorAll('[data-mode]').forEach(b=>{b.classList.toggle('selected',b===button);b.querySelector('b').textContent=b===button?'●':'○';});$('#p0 b').textContent=mode==='solo'?'You':'North Side';$('#p1').style.display=mode==='solo'?'none':'';$('.versus').style.display=mode==='solo'?'none':'';$('#modeLabel').textContent=mode==='solo'?'SOLO PRACTICE':'FAMILY FACE-OFF';$('.match-center small').textContent=mode==='solo'?'CLEAR THE TABLE':'MOST BALLS WINS';reset();});};});
const fullscreenButton=$('#fullscreen');
if(!document.fullscreenEnabled){fullscreenButton.hidden=true;}else{fullscreenButton.onclick=async()=>{cancelCharge();try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{fullscreenButton.textContent='⛶';fullscreenButton.title='Fullscreen unavailable in this browser view';}};document.addEventListener('fullscreenchange',()=>fullscreenButton.setAttribute('aria-label',document.fullscreenElement?'Exit fullscreen':'Enter fullscreen'));}
