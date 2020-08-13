

const Questions = [{
    Question: "What does HTML stand for?",
    correctAnswer: "Hyper Text Markup Language",
    option: ["Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyper links and Markup Language",
        "Hyper Language"

    ]
},
{
    Question: "Which is the correct CSS syntax?",
    correctAnswer: "body{color:black;}",
    option: ["body{color:black;}",
        "body:color=black;",
        "{body:color=black;}",
        "body;color:black;}"

    ]
},
{
    Question: "How do you call a function named 'myFunction'?",
    correctAnswer: "myFunction()",
    option: ["call myFunction()",
        "call function myFunction()",
        "myFunction()",
        "function=myFunction()"

    ]
},
{
    Question: "What is the correct way to write a JavaScript array?",
    correctAnswer: "var colors=['red','blue','green']",
    option: ["var colors=(1:'red',2:'blue',3:'green'",
        "var colors=1=('red'),2='blue',3='green')",
        "var colors='red','blue','green'",
        "var colors=['red','blue','green']"

    ]
},
{
    Question: "How do you declare a JavaScript variable?",
    correctAnswer: "var carName",
    option: ["var carName",
        "variable carName",
        "v carName",
        "vara carName"

    ]
}
]

console.log("length" + Questions.length);
var QuesCounter = 0;
function next() {
    check(QuesCounter);
    if (QuesCounter == Questions.length - 1) {
        var q = document.getElementsByClassName("Questions")[0];
        q.style.display = 'none';
        var result_div = document.getElementById('result-div');
        result_div.style.display = 'block';
        var result = document.getElementById('result');
        result.innerHTML = score;

    }


    QuesCounter++;
    show(QuesCounter);



}
function show(e) {
    var q = document.getElementById("Question-text");
    q.innerHTML = `<h2> ${Questions[e].Question}</h2>
  
 
 <input type="radio" name="r1"  class="option"  value="${Questions[e].option[0]}"  />${Questions[e].option[0]}<br>
 <input type="radio" name="r1"  class="option"  value="${Questions[e].option[1]}" />${Questions[e].option[1]}<br>
 <input type="radio" name="r1"  class="option"  value="${Questions[e].option[2]}"  />${Questions[e].option[2]}<br>
 <input type="radio" name="r1"  class="option"  value= "${Questions[e].option[3]}" />${Questions[e].option[3]}<br>`

}

var score = 0;
var value = 0;
function check(e) {


    var type = document.getElementsByName("r1");

    for (var i = 0; i < type.length; i++) {


        if (type[i].checked) {

            if (type[i].value == Questions[e].correctAnswer) {

                score += 10;

            }



        }

    }

}
