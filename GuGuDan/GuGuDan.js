const input = document.getElementById("numberinput");
const btnResult = document.getElementById("btn_result");
const txtresult = document.getElementById("txt_result");
const form = document.getElementById('gugudan');

var number1 = Math.ceil(Math.random() * 9) + 1;
var number2 = Math.ceil(Math.random() * 9) + 1;
var result = number1 * number2 ;

var word = document.createElement('div');
word.textContent = `${number1} 곱하기 ${number2} 는 ?`
document.body.append(word);

form.addEventListener('submit', function callback(e){
    e.preventDefault();

    console.log("hello");
    console.log(input.value);
    
    if (result === Number(input.value)){
        txtresult.textContent = '딩동댕';        
    } else {
        txtresult.textContent = '땡';
    }
});


