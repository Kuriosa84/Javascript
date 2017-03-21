/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


window.addEventListener('load', function() {
    var seconds = 0;
    setTitleSeconds();
    document.getElementById("leButton").addEventListener('click', buttonClick);
    document.getElementById("leButton").addEventListener('click', countClicks);
    document.getElementById("goAfter3Seconds").addEventListener('click', goElsewhere);
    if(localStorage.clickCount) {
        localStorage.clickCount = Number(localStorage.clickCount) + 1;
    } else {
        localStorage.clickCount = 0;
    }
    document.getElementById("counterDiv").innerHTML = localStorage.clickCount;
    
    //övning 1 och 2
    function buttonClick(event) {
        //screenX resp. screenY ger position på hela skärmen
        //clientX resp. clientY ger position i fönstret
        document.getElementById("myDiv").innerHTML = "Du tryckte på knappen! Position: " + event.screenX + " " + event.screenY;
        document.getElementById("myDiv").innerHTML += "<br>" + event.clientX + " " + event.clientY;
    }
    
    //övning 3
    function goElsewhere() {
        setTimeout(function(){window.location = "http://www.google.com";}, 3000);
    }
    
    //övning 4
    function setTitleSeconds() {
        
        setInterval(function(){seconds++; document.title = seconds + " sekunder." ;},1000);
    }
    
    //övning 5
    function countClicks() {
        if(localStorage.clickCount) {
            localStorage.clickCount = Number(localStorage.clickCount) + 1;
        } else {
            localStorage.clickCount = 1;
        }
        document.getElementById("counterDiv").innerHTML = localStorage.clickCount;
    }
    
    //övning 6
    function enVanligFunktion(event) {
        console.log('Användaren klickade! Sidan är förresten ' + innerWidth + ' bildpunkter bred.');
        event.stopPropagation();
    }

    document.getElementById('rubrik').addEventListener('click', enVanligFunktion);
    addEventListener('click', function () { alert('Detta skall inte visas när man klickar på rubriken.'); });
    
    
    //övrigt
    console.log(document.getElementById('rubrik'));
    console.log(document.getElementsByTagName('p'));
    console.log(document.getElementsByClassName('intro'));
    console.log(document.querySelectorAll('body > p'));
});

