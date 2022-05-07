function display(val){

    document.getElementById('result').value += val

    addToHistory(val);

    return val

    

}

function solve(){

    let x = document.getElementById('result').value

    let y = eval(x);

    document.getElementById('result').value = y

    addToHistory('=' + y);

    return y


}

function clearScreen(){

    document.getElementById('result').value = ''
    addToHistory(' ');

}

function addToHistory(value) {
    history += value;
    document.getElementById('history').innerText = history;
}

let history = ' ';


function dis(val) {
    document.getElementById("result").value += val;

    addToHistory(val);
  }