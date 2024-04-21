function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}
//function wrapAdjective(adjective, flair = "*") {
    //return function(innerParam = "special") {
     // return `You are ${flair}${innerParam}${flair}!`;
   // };
  //}

  function wrapAdjective(flair = '*') {
    return function(adjective) {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  const result = wrapAdjective("||")("a dedicated programmer");
  console.log(result);
 