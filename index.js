function scuberGreetingForFeet(somevalue){
  if(somevalue <= 400){
    return `This one is on me!`;
  }
  else if(somevalue < 2500 && somevalue > 2000){
    return `I will gladly take your thirty bucks.`;
  }
  else if(somevalue > 2000 ){
    return `No can do.`;
  }
}
scuberGreetingForFeet(199);

function ternaryCheckCity(city){
  if(city === 'NYC'){
    return `Ok, sounds good.`;
  }
  else{
    return `No go.`;
  }
}
ternaryCheckCity("NYC");

function switchOnCharmFromTip(tip){
  if(tip === "generous"){
    return 'Thank you so much.';
  }
  else if(tip === "not as generous"){
    return 'Thank you.';
  }
  else{
    return 'Bye.';
  }
}
switchOnCharmFromTip("generous");