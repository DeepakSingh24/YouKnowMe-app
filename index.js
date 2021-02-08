const readLineSync=require('readline-sync');
const chalk=require('chalk');

var userName=readLineSync.question('What is your name?');
var welcomeMessage="Welcome "+userName;
console.log(chalk.blue.bgRed.bold(welcomeMessage));

const questionList=[{question:'Am I older than 25?',
 answer:'yes'},{ question:'Am i belong to Dhanbad?', answer:'yes'},{question:'Am I a developer?',answer:'yes'},{question:'On which technologies i used to work?',answer:'javascript'},{
   question:'Where do Live now?',answer:'bangalore'
 }
 ]

var score=0;
function playGame(question, answer){
  const userResponse=readLineSync.question(question);
  if(userResponse.toLowerCase()===answer.toLowerCase()) {
    score=score+1;
    console.log(chalk.black.bgYellow('Right'));
  }
  else {
    score=score-1;
    console.log(chalk.black.bgMagenta('Wrong'));
  }
    console.log('your score is ',score);
}
for(let i=0;i<questionList.length;i++) { 
  let question=questionList[i].question;
  let answer=questionList[i].answer;
  playGame(question,answer);
}
if(score>2){
  console.log(chalk.black.bgYellow('You know me well'));
}
else { 
  console.log(chalk.black.bgMagenta('U dont know me well'));
}
console.log('Thanks for playing the Game')

