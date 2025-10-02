const popUp = document.querySelector('.popup');
const box = document.querySelector('.box');
const close = document.querySelector('.close');

popUp.addEventListener('click' , ()=>{
    popUp.classList.add('hidden');
    box.classList.remove('hidden');
    
close.addEventListener('click' , ()=>{
    box.classList.add('hidden')
    popUp.classList.remove('hidden')

});
})
