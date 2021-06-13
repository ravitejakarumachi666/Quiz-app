const question_list=[
    {
        ques:'What is  the value of (2+3)?',
        a_option:6,
        b_option:3,
        c_option:5,
        d_option:4,
        ans:'c'
    },
    {
        ques:'What is the full form of HTML?',
        a_option:'Hyper Text Markup Language',
        b_option:'Hyper Toast Markup Language',
        c_option:'Higher Text Marker Language',
        d_option:'None of these',
        ans:'a'
    },
    {
        ques:'What is the value of (1+0-1)?',
        a_option:2,
        b_option:-1,
        c_option:3,
        d_option:0,
        ans:'d'
    }
]
const question=document.querySelector("#question");
const container=document.querySelector(".container");
const next1=document.querySelector("#next");
const aoption=document.querySelector('#option1');
const boption=document.querySelector('#option2');
const coption=document.querySelector('#option3');
const doption=document.querySelector('#option4');
let i=0;
let correct_answers=0;
displayquestion();

function displayquestion(){
    
   question.textContent=question_list[i].ques;
   aoption.textContent=question_list[i].a_option;
   boption.textContent=question_list[i].b_option;
   coption.textContent=question_list[i].c_option;
   doption.textContent=question_list[i].d_option;
}
next1.addEventListener('click',function(){
    
    
        let selected_answer=document.querySelector('input[name="select"]:checked').value;
        if(selected_answer===question_list[i].ans){
            correct_answers++;
            i++;
            if(i==question_list.length){
               container.innerHTML=`<h2>Your Score is ${correct_answers}/3</h2><button onclick="location.reload()">Reload</button> `;
            }
            else{
              displayquestion();
            }
        }
        else{
            i++;
            if(i==question_list.length){
                container.innerHTML=`<h2>Your Score is ${correct_answers}/3</h2><button onclick="location.reload()">Reload</button> `;
             }
             else{
               displayquestion();
             }
        }
   
})

