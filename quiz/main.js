var questions = [
	["1.What does HTML stand for?", "Hypertext Machine language.", "Hypertext and links markup language.", "Hypertext Markup Language.","None", "3"],
	["2.How is document type initialized in HTML5.?", "</DOCTYPE HTML>", "<!DOCTYPE HTML>",
	"</DOCTYPE>", "</DOCTYPE html>","2"],
	["3.Which of the following HTML Elements is used for making any text bold ?", "<b>", "<i>", "<li>", "<p>","1"],
	["4.Which of the following HTML element is used for creating an unordered list?", " ol", " l", "ul", "li","3"],
	["5.Which of the following characters indicate closing of a tag?", ".", "/" , "!", "%","2"],
	["6.What is the font-size of the h1 heading tag?", "  3.5em", "  3em", " 2em", "2.5em","3"],
	["7.How many heading tags are there in HTML5?", "6", "  5", "4", "3","1"],
	["8.What is the purpose of using div tags in HTML?", " For creating Different styles.", "for creating differnet sections", "for adding headings", "for adding titles","2"],
	["9.Which of the following tags is used to make a portion of text italic in HTML?", "<i>", "<italic>", "<style=i>", "<style>=<italic>","1"],
	["10.In which Olympic Games, Indian hockey team won Gold medal?", "8", "10", "9", "11","3"],
	
	];
var quiz=document.getElementById("quiz");
var ques= document.getElementById("question");
var opt1=document.getElementById("option1");
var opt2=document.getElementById("option2");
var opt3=document.getElementById("option3");
var opt4=document.getElementById("option4");
var res=document.getElementById("result");
var nextbutton= document.getElementById("next");

var tques=questions.length;
var score=0;
var quesindex=0;

function give_ques(quesindex) 
{
	ques.textContent=questions[quesindex][0];
	opt1.textContent=questions[quesindex][1];
	opt2.textContent=questions[quesindex][2];
	opt3.textContent=questions[quesindex][3];
	opt4.textContent=questions[quesindex][4];
	 return;
};
give_ques(0);
function nextques()
{
	var selected_ans= document.querySelector('input[type=radio]:checked');
	if(!selected_ans)
		{
			alert("SELECT AN OPTION");
			return;
		
		}

	if(selected_ans.value==questions[quesindex][5])
		{
			score=score+1;
		}
	selected_ans.checked=false;
	     quesindex++;
	     if(quesindex==tques-1)
	     	nextbutton.textContent="Finish";
	     if(quesindex==tques)
	     {
          quiz.style.display='none';
          result.style.display='';
		  finalscore=score+"/10";
		  localStorage.setItem("quizscore", finalscore)
          result.textContent="Your score is :"+localStorage.getItem("quizscore");
            return;
	     }
        give_ques(quesindex);

}
