const chalk = require('chalk');
const log = console.log;
console.log(chalk.blue.bgRed.bold("Hello\n"));  // output
var newGin=require("readline-sync");     
var usname=newGin.question("What's your name?\n");//input
console.log("Welcome "+chalk.red.bold(usname)+"! Let's Start!\n");  //concatenation
console.log(chalk.black.bold.bgWhite("There are 5 General knowledge questions in Level 1 you have to answer.\nIf you pass You go to Level 2. ")); 
var points=0;
var myquestions=[{                         //array of object
         question:chalk.yellow.bold("\nQ 1. Which is the biggest continent in the world?")+chalk.cyan.bold("\na.North America\nb.Australia\nc.Asia\nAnswer:"),
         answer:"c"
},
{
         question:chalk.yellow.bold("\nQ 2. Which is longest river in the world?")+chalk.cyan.bold("\na.Nile\nb.Amazon\nc.Niger\nAnswer:"),
         answer:"a"
},
{
         question:chalk.yellow.bold("\nQ 3. Which is the largest ocean in the world?")+chalk.cyan.bold("\na.Pacific Ocean\nb.Indian Ocean\nc.Atlantic Ocean\nAnswer:"),
         answer:"a"
},
{
         question:chalk.yellow.bold("\nQ 4.  Which is India’s first super computer?")+chalk.cyan.bold("\na.param80000\nb.Param8000\nc.param800\nAnswer:"),
         answer:"b"
},
{
         question:chalk.yellow.bold("\nQ 5.  Which bank is called bankers bank of India?")+chalk.cyan.bold("\na.Punjab National Bank\nb.Reserve Bank of India \nc.State Bank of India\nAnswer:"),
         answer:"b"    
},
{
         question:chalk.yellow.bold("\nQ 6.  Which is largest animal in the world?")+chalk.cyan.bold("\na.Shark.\nb.Blue whale\nc.Elephant\nAnswer:"),
         answer:"b"
},
{
         question:chalk.yellow.bold("\nQ 7.  Which is largest animal on land?")+chalk.cyan.bold("\na.Crocodile\nb.White Elephant\nc.African Elephant\nAnswer:"),
         answer:"c"
},
{
         question:chalk.yellow.bold("\nQ 8. Which is largest island in the world?")+chalk.cyan.bold("\na.Hawaii\nb.Andaman Nicobar\nc.Greenland\nAnswer:"),
         answer:"c"
},
{
         question:chalk.yellow.bold("\nQ 9. Which is largest flower in the world?")+chalk.cyan.bold("\na.Rafflesia\nb.Jasmine\nc.Balloon Flower\nAnswer:"),
         answer:"a"
},
{
         question:chalk.yellow.bold("\nQ 10. Which is the 29th state of India?")+chalk.cyan.bold("\na.Uttarakhand\nb.Telangana\nc.Uttar Pradesh\nAnswer:"),
         answer:"b"
},
{
         question:chalk.yellow.bold("\nQ 11.  Tsunami is a word in which language?")+chalk.cyan.bold("\na.Hindi\nb.Urdu\nc.Japanese\nAnswer:"),
         answer:"c"
},
{
         question:chalk.yellow.bold("\nQ 12. Which is the smallest country in the world?")+chalk.cyan.bold("\na.Vatican City\nb.Bhutan\nc.Nepal\nAnswer:"),
         answer:"a"
},
{
         question:chalk.yellow.bold("\nQ 13.  Which state has the longest coastal line in India?")+chalk.cyan.bold("\na.Gujarat\nb.Kerala\nc.Karnataka\nAnswer:"),
         answer:"a"
},
{
         question:chalk.yellow.bold("\nQ 14. Which continent is known as Dark Continent?")+chalk.cyan.bold("\na.South America\nb.Australia\nc.Africa\nAnswer:"),
         answer:"c"
},
{
         question:chalk.yellow.bold("\n15. On which river the Uri dam is constructed?")+chalk.cyan.bold("\na.Beas\nb.Jhalam\nc.Sutlej\nAnswer:"),
         answer:"b"
},
]
var highscore=[
{
         name:"Karthik",
         points:"13"

},
{
         name:"Dinesh",
         points:"10"

},
{
         name:"Nil",
         points:"0"

}

]
for(i=0;i<5;i++)
{
  var current=myquestions[i];
  check(current.question,current.answer);
  
}
function check(question,answer)
{
  var userans= newGin.question(question);
  if(userans==answer)
  {
    console.log(chalk.green.bold("\nCorrect!, Answer was "+answer));
    points=points+1;
    console.log(chalk.green.bold("\nCurrent Score "+points));
  }else{
    console.log(chalk.red.bold("\nWrong!, Answer was "+answer+"\nCurrent Score "+points));
    
  }
}
if(points>=4){
        console.log(chalk.black.bold.bgWhite("\nYAY! You made it to level 2.\nIf you pass You go to Finale."));
        for(i=5;i<10;i++)
{
  var current=myquestions[i];
  check(current.question,current.answer);
  
}
}
if(points>=8)
{
  console.log(chalk.black.bold.bgWhite("\nWoo Hoo! You made it to Finale."));
  for(i=10;i<15;i++)
{
  var current=myquestions[i];
  check(current.question,current.answer);
  
}
}
console.log(chalk.magenta.bold("\nFinal Score "+points)+"\n"+chalk.bold("\nHigh Scores"));
highscore.map(points => console.log(points));
if(highscore[0].points<points)
{
  console.log(chalk.white.bold.bgBlack("\nContact Me!, You have beaten the highscore "));
}
