const displayHead = document.getElementById("display-head");
const displayMain = document.getElementById("display-main");

function clickNum(num){
    if(displayMain.textContent != 0){
        let display = displayMain.textContent + num;
        displayMain.textContent = display;
    } else {
        displayMain.textContent = num;
    } 
}

function operate(o){
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

        displayHead.textContent = answer +  o;
        displayMain.textContent = "0";
    } else {
        displayHead.textContent = displayMain.textContent + o;
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