section.Login
  p.Login-text2 Let's get in touch !
  .Login-modal
    .Login-modalOverlay
    .Login-modalContent
      .Login-firstContainer
        img.Login-logo(src='../src/img/logo.png', alt='')
        .Login-textContainer
          p Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
      .Login-secondContainer
        form(method='POST')
          .Login-formulaireField
            input.Login-field(type='text', name='username')
            input.Login-field(type='text', name='password')
          .Login-formulaireButton
            input#buttonRegister.Login-button(type='button', name='register', value='Créer un compte')
            input.Login-button(type='button', name='login', value='Connexion')
  .Login-modal2
    .Login-modalOverlay2
    .Login-modalContent2
      .Login-firstContainer2
        img.Login-logo2(src='../src/img/logo.png', alt='')
      .Login-secondContainer2
        form(method='POST')
          .Login-formulaireField2
            input.Login-field2(type='text', name='username')
            input.Login-field2(type='email', name='email')
            input.Login-field2(type='text', name='password')
            input.Login-field2(type='text', name='password')
          .Login-formulaireButton2
            input.Login-button2(type='button', name='register', value='Créer un compte')
            
                 script(src='login.js')
                 
                 
                 






.Login{
  &-modal{
    display: none;
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    @include for-size(tablet-portrait-up){
    z-index: 10;
  }
  }
  &-modalOverlay{
    position: fixed;
    top:0;
    left:0;
    background:#fff;
    z-index:-1;
    width: 100%;
    height: 100%;
    @include for-size(tablet-portrait-up){
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .12);

  }
  }
  &-logo{
    width:132px;
    height:58px;
    @include for-size(tablet-portrait-up){
    margin-bottom:3vh;
  }
  }
  &-textContainer{
    @include for-size(tablet-portrait-up){
    width:40vh;
  }
  }
  &-modalContent{
    background:white;
    @include for-size(tablet-portrait-up){
    display:flex;
    margin :20vh auto;
    width: 60vw;
    height: 60vh;

  }
  }
  &-firstContainer{
    display:flex;
    margin-left:25px;
    margin-right:25px;
    margin-bottom:10vh;
    margin-top:20vh;
    @include for-size(tablet-portrait-up){
    margin-bottom:0vh;
    margin-left:25px;
    display:block;
  }
  }
  &-secondContainer{
    margin-top:20vh;
  }

  &-formulaireField{
    display:flex;
    flex-direction:column;
    margin-left:25px;
    @include for-size(tablet-portrait-up){
    float:right;
    margin-right:25px;
  }
  }
  &-formulaireButton{
    display:flex;
    justify-content: space-between;
    margin-right:25px;
    margin-left:25px;
    @include for-size(tablet-portrait-up){
    float:right;
    margin-left:0;
    margin-right:25px;
  }
}
  &-field{
    width:95%;
    height:7vh;
    background:#F7F7F7;
    border:#707070;
    margin-bottom:3vh;
    font-size:15px;
    @include for-size(tablet-portrait-up){
    width:25vw;
  }
  }
  &-button{
    width:38vw;
    @include for-size(tablet-portrait-up){
    width:10vw;
    height:5vh;
    margin-left:25px;
  }
  }





  &-modal2{
    display: none;
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    @include for-size(tablet-portrait-up){
    z-index: 10;
  }
  }
  &-modalOverlay2{
    position: fixed;
    top:0;
    left:0;
    background:#fff;
    z-index:-1;
    width: 100%;
    height: 100%;
    @include for-size(tablet-portrait-up){
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .12);

  }
  }
  &-logo2{
    width:132px;
    height:58px;
    display:none;
    @include for-size(tablet-portrait-up){
    margin-bottom:3vh;
    display:block;
  }
  }
  &-textContainer2{
    display:none;
    @include for-size(tablet-portrait-up){
    width:40vh;
    display:block;
  }
  }
  &-modalContent2{
    background:white;
    @include for-size(tablet-portrait-up){
    display:flex;
    margin :20vh auto;
    width: 60vw;
    height: 60vh;

  }
  }
  &-firstContainer2{
    display:flex;
    margin-left:25px;
    margin-right:25px;
    margin-bottom:10vh;
    margin-top:10vh;
    @include for-size(tablet-portrait-up){
    margin-bottom:0vh;
    margin-left:25px;
    display:block;
  }
  }
  &-secondContainer2{
    margin-top:10vh;
  }

  &-formulaireField2{
    display:flex;
    flex-direction:column;
    margin-left:25px;
    @include for-size(tablet-portrait-up){
    float:right;
    margin-right:25px;
  }
  }
  &-formulaireButton2{
    display:flex;
    justify-content: space-between;
    margin-right:25px;
    margin-left:25px;
    float:right;
    @include for-size(tablet-portrait-up){
    margin-left:0;
    margin-right:25px;
  }
}
  &-field2{
    width:95%;
    height:7vh;
    background:#F7F7F7;
    border:#707070;
    margin-bottom:3vh;
    font-size:15px;
    @include for-size(tablet-portrait-up){
    width:25vw;
  }
  }
  &-button2{
    width:38vw;
    @include for-size(tablet-portrait-up){
    width:10vw;
    height:5vh;
    margin-left:25px;
  }
  }
}












import 'flexboxgrid';
import './style/style.scss';

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