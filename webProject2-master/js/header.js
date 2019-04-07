
function openSignin(){
  var signinContent = document.getElementById('signinContent');
  signinContent.style.display="block";
  var closeSignIn = document.getElementsByClassName('close')[0];
  closeSignIn.addEventListener("click",function(){
    signinContent.style.display="none";
  })
  var openForm = document.getElementById("openform")
  openForm.addEventListener("click",function(){
  openSignup();
  signinContent.style.display="none";

  })
}
function openSignup(){
  var signUpcontent= document.getElementById('signupContent');
  signUpcontent.style.display="block";
  var closeSignup = document.getElementsByClassName('close')[1];
  closeSignup.addEventListener("click",function(){
  signUpcontent.style.display="none";

  })
}
