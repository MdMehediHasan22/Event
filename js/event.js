console.log('This is separate JS file');

//option 2 we will use
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

//option 3
const makeBlueButton = document.getElementById('makeBlue');
makeBlueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
//option 4 
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click',makePink);
function makePink(){
    document.body.style.backgroundColor = 'pink';
}
//option 4 Final we will use max
document.getElementById('make-golden').addEventListener('click',function (){
    document.body.style.backgroundColor = 'goldenrod';
 })