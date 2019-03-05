        //1 task
var year = prompt('Какой сейчас год?');
if(year === 2015) { alert('Вы правы!') } else { alert('Ты что с луны свалился? 2015')};


        //2 task
var number = prompt('Введите любое число');
if (number > 0) { 
  alert(1)
} 
else if(number == 0){
      alert(0);
} else if(number < 0){
  alert(-1);
}

        //3 task
var login = prompt('Введите логин');
if(login === 'admin'){
    var password = prompt('Введите пароль');
    if(password === 'passw0rd') {
        alert('Welcome home!')
    } else if(login === null) {
        alert('Canceled');
    } else {
      alert('Wrong password');
      }
} else if(login === null) {
  alert('Canceled');
} else {
alert('Access denied');
}


        //4 task
var a = 1, b = 2;
var result = (a + b >= 3) ?  'Yep!' : 'Noup!';


        //5 task


var text = (name == 'admin') ? 'Hi' : (name == 'manager') ? 'Hello' : (name === '')? 'No login' : '';


         //6 task
function numberToString(num) {
    var res=String(num);
    console.log(res);
}
numberToString(123);


         //7 task
function stringToNumber(str) {
    var resFunc=parseInt(str);
    console.log(resFunc);
    
}
stringToNumber('123');