
function createPost(){
  var openPost= document.getElementById('create-post');
  openPost.style.display="block";
  var closeSignup = document.getElementsByClassName('close')[2];
  closeSignup.addEventListener("click",function(){
  openPost.style.display="none";

  })
}
