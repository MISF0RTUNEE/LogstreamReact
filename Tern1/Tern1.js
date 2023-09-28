let a = Math.floor(Math.random() * 100);
let b = a;
a = (a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7);
console.log(a);
// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()

if (b > 10){

}
else{
    b = b * 2;
}
if(b > 5){
    b = (2 * b) + 1;
}
else{
    if(b < 3){
        b = 1;
    }
    else{
        b = 2 * (b - 2)
    }
    if(b > 4){
        b = 5;
    }
    else{
        if(b % 2 == 0){
            b = 6;
        }
        else{
            b = 7;
        }
    }
}

console.log(b);