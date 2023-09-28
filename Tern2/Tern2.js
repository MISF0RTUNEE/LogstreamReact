function manyChecks() {
  let a = Math.floor(Math.random() * 20) + 1;
  console.log(`a = ${a}`);
  

  //if...else
  let b = "";
  if(a > 10){
    b+='a is bigger than 10 ';
  }
  else{
    b+='a is less than or equal to 10 ';
  }
  if(a===5){
    b+='an example of a special case';
  }
  if(a===15){
    b+='but a is not 15';
  }
  if(a>5){
    b+='and a is greater than 5';
  }
  else{
    b+='and a is less than or equal to 5 ';
  }
  if(a % 2){
    b+=' and a is odd';
  }
  else{
    b+=' and a is even ';
  }
  console.log("Результат if...else: " + b);



  //Switch
  let c = "";
  switch(true){
    case a>10:
      c+='a is bigger than 10 ';
      break;
    default:
      c+='a is less than or equal to 10 ';
  }
  switch(a){
    case 5:
      c+='an example of a special case';
      break;
  }
  switch(a){
    case 15:
      c+='but a is not 15';
      break;
  }
  switch(true){
    case a>5:
      c+= 'and a is greater than 5';
      break;
    default:
      c+='and a is less than or equal to 5 ';
  }
  switch(a % 2){
    case 1:
      c+=' and a is odd'
      break
    case 0:
      c+= ' and a is even '
  }
  console.log("Результат Switch " + c);

  return (
    a > 10 ? 'a is bigger than 10 ' : 'a is less than or equal to 10 ' + (a === 5 ? 'an example of a special case' : '')) + (a === 15 ? 'but a is not 15' : '')+ (a > 5 ? 'and a is greater than 5' : 'and a is less than or equal to 5 ') + (a % 2 ? ' and a is odd' : ' and a is even ');
}

console.log("Результат тернарного оператора: " + manyChecks());

// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()

