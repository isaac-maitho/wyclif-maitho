let password =true;
password ? console.log('it is correct') : console.log('it is incorrect');
//else if statement
let stopLight='';
if(stopLight==='green'){console.log('Go!');}
else if (stopLight==='yellow'){console.log('Wait!');}
else if (stopLight==='red'){console.log('Stop!');}
else {console.log('Caution!');}
// switch keyword
let finalPosition='second place';
switch(finalPosition){
case 'first place':console.log('gold medal');
break;
case 'second place':console.log('silder medal');
break;
default:console.log('no medal');
break;
}