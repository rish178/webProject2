function deletePost(){
    var deletePost= document.getElementById('deletePost');
    deletePost.style.display="block";
    var closeSignup = document.getElementsByClassName('close')[2];
    closeSignup.addEventListener("click",function(){
    deletePost.style.display="none";
    })
  }

function confDel(value){
    var deletePost= document.getElementById('deletePost');
    deletePost.style.display="block";
    var cnfNo = document.getElementsById('cnfNo');
    var cnfYes = document.getElementsById('cnfYes');
    cnfNo.addEventListener("click",function(){
        deletePost.style.display="none";
    })
}

function showPost(){
    alert("show post");
    location.href = "post.html";
}