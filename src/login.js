import 'flexboxgrid';
import './styles/styles.scss';

var yeah = document.querySelector('.Login-text2');
var modal = document.querySelector('.Login-modal');
var modal2 = document.querySelector('.Login-modal2');
var overlay = document.querySelector('.Login-modalOverlay');
var overlay2 = document.querySelector('.Login-modalOverlay2');
var buttonRegister = document.querySelector('#buttonRegister')
var body = document.querySelector('body');

yeah.addEventListener('click',function(){
    modal.style.display = 'block';
    body.style.overflow = 'hidden';
})

buttonRegister.addEventListener('click',function(){
    modal.style.display='none';
    modal2.style.display='block';
})

overlay.addEventListener('click',function(){
    body.style.overflow = 'auto';
    modal.style.display = 'none';
})

overlay2.addEventListener('click',function(){
    body.style.overflow = 'auto';
    modal2.style.display = 'none';
})