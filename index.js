const maintitle = document.querySelector('#title');
let CurValue= 0;


const btnDecrement = document.querySelector('#decrement');
const btnreset = document.querySelector('#reset');
const btnIncrement = document.querySelector('#Increment');

btnIncrement.addEventListener('click', () => {
    CurValue++;
    maintitle.textContent = CurValue;
});
btnDecrement.addEventListener('click', () => {
    CurValue--;
    maintitle.textContent = CurValue;
});

btnreset.addEventListener('click', () => {
    CurValue=0 ;
    maintitle.textContent = CurValue;
});