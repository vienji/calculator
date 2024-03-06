const displayHead = document.getElementById("display-head");
const displayMain = document.getElementById("display-main");

function clickOne(){
    if(displayMain.textContent != 0){
        let display = displayMain.textContent + 1;
        displayMain.textContent = display;
    } else {
        displayMain.textContent = 1;
    }  
}

function clickTwo(){
    if(displayMain.textContent != 0){
        let display = displayMain.textContent + 2;
        displayMain.textContent = display;
    } else {
        displayMain.textContent = 2;
    }  
}

function clickThree(){
    if(displayMain.textContent != 0){
        let display = displayMain.textContent + 3;
        displayMain.textContent = display;
    } else {
        displayMain.textContent = 3;
    }  
}

function clickFour(){
    if(displayMain.textContent != 0){
        let display = displayMain.textContent + 4;
        displayMain.textContent = display;
    } else {
        displayMain.textContent = 4;
    }  
}

function clickFive(){
    if(displayMain.textContent != 0){
        let display = displayMain.textContent + 5;
        displayMain.textContent = display;
    } else {
        displayMain.textContent = 5;
    }  
}

function clickSix(){
    if(displayMain.textContent != 0){
        let display = displayMain.textContent + 6;
        displayMain.textContent = display;
    } else {
        displayMain.textContent = 6;
    }  
}

function clickSeven(){
    if(displayMain.textContent != 0){
        let display = displayMain.textContent + 7;
        displayMain.textContent = display;
    } else {
        displayMain.textContent = 7;
    }  
}

function clickEight(){
    if(displayMain.textContent != 0){
        let display = displayMain.textContent + 8;
        displayMain.textContent = display;
    } else {
        displayMain.textContent = 8;
    }  
}

function clickNine(){
    if(displayMain.textContent != 0){
        let display = displayMain.textContent + 9;
        displayMain.textContent = display;
    } else {
        displayMain.textContent = 9;
    }  
}

function clickZero(){
    if(displayMain.textContent != 0){
        let display = displayMain.textContent + 0;
        displayMain.textContent = display;
    }  
}

function add(){
    let header = displayHead.textContent;
    if(header != ""){
        let answer = Number(header.substring(0, header.length - 1));

        if(header.charAt(header.length - 1) == "+"){
            answer += Number(displayMain.textContent);
        } else if (header.charAt(header.length - 1) == "-") {
            answer -= Number(displayMain.textContent);
        } else if (header.charAt(header.length - 1) == "/") {
            answer /= Number(displayMain.textContent);
        } else if (header.charAt(header.length - 1) == "*") {
            answer *= Number(displayMain.textContent);
        }

        displayHead.textContent = answer +  "+";
        displayMain.textContent = "0";
    } else {
        displayHead.textContent = displayMain.textContent + "+";
        displayMain.textContent = "0";
    }
}

function subtract(){
    let header = displayHead.textContent;
    if(header != ""){
        let answer = Number(header.substring(0, header.length - 1));

        if(header.charAt(header.length - 1) == "+"){
            answer += Number(displayMain.textContent);
        } else if (header.charAt(header.length - 1) == "-") {
            answer -= Number(displayMain.textContent);
        } else if (header.charAt(header.length - 1) == "/") {
            answer /= Number(displayMain.textContent);
        } else if (header.charAt(header.length - 1) == "*") {
            answer *= Number(displayMain.textContent);
        }

        displayHead.textContent = answer + "-";
        displayMain.textContent = "0";
    } else {
        displayHead.textContent = displayMain.textContent + "-";
        displayMain.textContent = "0";
    }
}

function divide(){
    let header = displayHead.textContent;
    if(header != ""){
        let answer = Number(header.substring(0, header.length - 1));

        if(header.charAt(header.length - 1) == "+"){
            answer += Number(displayMain.textContent);
        } else if (header.charAt(header.length - 1) == "-") {
            answer -= Number(displayMain.textContent);
        } else if (header.charAt(header.length - 1) == "/") {
            answer /= Number(displayMain.textContent);
        } else if (header.charAt(header.length - 1) == "*") {
            answer *= Number(displayMain.textContent);
        }

        displayHead.textContent = answer + "/";
        displayMain.textContent = "0";
    } else {
        displayHead.textContent = displayMain.textContent + "/";
        displayMain.textContent = "0";
    }
}

function multiply(){
    let header = displayHead.textContent;
    if(header != ""){
        let answer = Number(header.substring(0, header.length - 1));

        if(header.charAt(header.length - 1) == "+"){
            answer += Number(displayMain.textContent);
        } else if (header.charAt(header.length - 1) == "-") {
            answer -= Number(displayMain.textContent);
        } else if (header.charAt(header.length - 1) == "/") {
            answer /= Number(displayMain.textContent);
        } else if (header.charAt(header.length - 1) == "*") {
            answer *= Number(displayMain.textContent);
        }

        displayHead.textContent = answer + "*";
        displayMain.textContent = "0";
    } else {
        displayHead.textContent = displayMain.textContent + "*";
        displayMain.textContent = "0";
    }
}

function equals(){
    let header = displayHead.textContent;
    if(header != ""){
        let answer = Number(header.substring(0, header.length - 1));

        if(header.charAt(header.length - 1) == "+"){
            answer += Number(displayMain.textContent);
        } else if (header.charAt(header.length - 1) == "-") {
            answer -= Number(displayMain.textContent);
        } else if (header.charAt(header.length - 1) == "/") {
            answer /= Number(displayMain.textContent);
        } else if (header.charAt(header.length - 1) == "*") {
            answer *= Number(displayMain.textContent);
        }

        displayHead.textContent = "";
        displayMain.textContent = answer;
    } 
}

function clearDisplay(){
    displayHead.textContent = "";
    displayMain.textContent = "0";
}

function del(){
    let amount = displayMain.textContent;
    if(amount.length > 0 && amount != 0){
        displayMain.textContent = amount.substring(0, amount.length - 1);
        if(displayMain.textContent.length == 0){
            displayMain.textContent = "0";
        }
    }   
}