const form = document.querySelector('.quiz-form');
const correctAnswer =['B', 'B', 'B', 'A'];
const result = document.querySelector('.result');

form.addEventListener('submit', e=>{
    e.preventDefault();

    let score=0;
    const userAnswers= [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //check answers
    userAnswers.forEach((answer, index)=>{
     if( answer === correctAnswer[index]){
     score +=25;}
});
    //console.log(score);
    //show on screen
    scrollTo(0,0);
   // result.querySelector('span').textContent=`${score}%`;
    result.classList.remove('d-none');

//window objects
//setTimeout(()=>{
  //  alert('hello ninja');
//},3000); 
/*let i =0;
const timer = setInterval(()=>{
    console.log('Isaac');
    i++;
    if(i === 5){
        clearInterval(timer);
    }
},1000);*/
//animating the score
let output = 0;
const timer = setInterval(()=>{
    result.querySelector('span').textContent=`${output}%`; 
    if(output === score){
        clearInterval(timer);
    }else{
        output++;
    }
},10);
});