var readlinesync = require("readline-sync");
var chalk = require("chalk");
const { printTable } = require('console-table-printer');
console.log(chalk.bold.rgb(10, 100, 240)("Welcome to the Quiz - DO YOU KNOW MEET?\n"));
var userName = readlinesync.question(chalk.bold.rgb(255,255,0)
 ("Your name :- "));
console.log("\n")

console.log(chalk.rgb(255,255,0).bold("Hello",userName,"\n\n"));
var score = 0;

function test(question,answer,items,num,lastQuestion){
  console.log(chalk.rgb(72,209,204).bold("Q"+num+")",question));
var index = readlinesync.keyInSelect(items,null,{cancel:false});
  //console.log(index, items[index]);

if(items[index]===answer){
  console.log(chalk.rgb(124,252,0).bold("Correct!"));
  score++;
}
else{
  console.log(chalk.bold.rgb(255,0,0)("Oops Wrong Answer!!!"));
}
console.log(chalk.rgb(124,252,0).bold("Current Score is",score));
  if(num!=lastQuestion){
    console.log("-----------------")
  }
}
var questionSet = [{
  question:"What's my Name? ",
  answer:"Meet",
  items:["Meet","Rahul","Roahn","Rohit"]
},{
  question:"Where do I belong to? ",
  answer:"Ahmedabad",
  items:["Ahmedabad", "Baroda","Delhi","Jaipur"]
},{
  question:"Fav color of mine?? ",
  answer:"Blue",
  items:["Black","Green","Blue","Violet"]
},{
  question:"Most prefered language of me? ",
  answer:"Javascript",
  items:["Javascript","Java","Python","Ruby"]
},{
  question:"My surname is??? ",
  answer:"Lukka",
  items:["Sharma","Pandey","Lukka","Joshi"]
},{
  question:"My birth falls on which month??? ",
  answer:"June",
  items:["January","March","June","December"]
},{
  question:"What's birth year of me? ",
  answer:"1998",
  items:["1996","1997","1998","1999"]
},{
  question:"What's birth date of me? ",
  answer:"29",
  items:["04","13","22","29"]
}];
// var questionSet = [{
//   question:"What is his name?",
//   answer:"Meet",
//   items:["Meet","Rahul","Roahn","Rohit"]
// },{
//   question:"What he likes",
//   answer:"Maggi",
//   items:["Tomato","ZOmato","Maggi","None"]
// }];
// console.log("hell")
for(var i=0;i<questionSet.length;i++){
  var currentObj = questionSet[i];
  // console.log(currentObj.question)
  test(currentObj.question,currentObj.answer,currentObj.items,i+1,questionSet.length);
}
//score message when all questions will be over
console.log(chalk.rgb(244, 255, 0).bold("======================="))
console.log(chalk.rgb(192, 255, 2).bold("You scored",score,"out of",questionSet.length));
console.log(chalk.rgb(244, 255, 0).bold("======================="))


var leaderBoard = [{
  name:"Rohit",
  score:"8"
},{
  name:"Ragini",
  score:"6"
}]

function printLeaderBoard(){
  
    console.log(chalk.green("This is Leaderboard for above quiz"));
    // console.log("name :-",leaderBoard[0].name,"& score :-",leaderBoard[0].score);
    // console.log("name :-",leaderBoard[1].name,"score :-",leaderBoard[1].score);

    

    const leader_board = [
  ({ Index: 1, Name:leaderBoard[0].name , Score: 8 }),
  ({ Index: 2, Name: leaderBoard[1].name, Score: 6 })
];
printTable(leader_board);
}


printLeaderBoard();
compareScore(score);

function compareScore(){
    if(score>leaderBoard[1].score){
      if(score>leaderBoard[0].score){
        console.log("HEY, You just created new record of highest score, just send the screenshot of this message to provided email id t update Highscore table")
      }
      else{
        console.log("HEY, you cracked the second high score just now, send screenshot of this message to provided email id to update Highscore table.")
      }
    }
  else{
    console.log("Try Again for next time to beat highscore. All the best")
  }
}
// function QNA(ques,ans,num,lastQuestion){
//   dynamicOptions(ques,ans,num);
//   var userAnswer = readlinesync.question("Choose from above options :- ");
  
//   if(userAnswer === ans){
//     console.log(chalk.green("Correct!"));
//     score++;
//   }
//   else{
//     console.log(chalk.redBright("Oops Wrong Answer!!!!!!!"))
    
//   }
//   console.log("Updated Score is ",score);
//   if(num!=lastQuestion){
//   console.log("-----------------")
//   }
// }
// function dynamicOptions(ques,ans,num){
// if(num==1){
//   var animals = ['Meet', 'Rahul', 'ROhan', 'Rohit'];
//   var index = readlinesync.keyInSelect(animals, 'Which name?');
//   console.log(index, animals[index]);
//   // console.log("Q"+num+") "+ques);
//   // console.log("A) Meet      C) Rahul")
//   // console.log("B) ROhan     D) Rohit ")
//   }
// if(num==2){
//   console.log("Q"+num+") "+ques);
//   console.log("A) Rajkot      C) Delhi")
//   console.log("B) Hyderabad   D) Ahmedabad ")
//   }
// if(num==3){
//   console.log("Q"+num+") "+ques);
//   console.log("A) Black      C) Purple")
//   console.log("B) Blue       D) Red ")
//   }
// if(num==4){
//   console.log("Q"+num+") "+ques);
//   console.log("A) Javascript C) Java")
//   console.log("B) Ruby       D) Python ")
//   }
// if(num==5){
//   console.log("Q"+num+") "+ques);
//   console.log("A) Sharma     C) Lukka")
//   console.log("B) Joshi      D) Goyal ")
//   }
// if(num==6){
//   console.log("Q"+num+") "+ques);
//   console.log("A) June       C) May")
//   console.log("B) January    D) Decemeber ")
//   }
// if(num==7){
//   console.log("Q"+num+") "+ques);
//   console.log("A) 1999       C) 1998")
//   console.log("B) 1997       D) 1996 ")
//   }
// if(num==8){
//   console.log("Q"+num+") "+ques);
//   console.log("A) 04         C) 12")
//   console.log("B) 20         D) 29 ")
//   }
// }

// var set = [{
//   q1:"What's my Name? ",
//   a1:"a"
// },{
//   q1:"Where do I belong to? ",
//   a1:"d"
// },{
//   q1:"Fav color of him?? ",
//   a1:"b"
// },{
//   q1:"Most prefered language of him? ",
//   a1:"a"
// },{
//   q1:"His surname is??? ",
//   a1:"c"
// },{
//   q1:"His birth falls on which month??? ",
//   a1:"a"
// },{
//   q1:"What's birth year of him? ",
//   a1:"c"
// },{
//   q1:"What's birth date of him? ",
//   a1:"d"
// }];

// for (let i=0;i<set.length;i++){
//   QNA(set[i].q1,set[i].a1,i+1,set.length);
// }
