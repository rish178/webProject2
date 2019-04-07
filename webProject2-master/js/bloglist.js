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
    var cnfNo = document.getElementById('cnfNo');
    var cnfYes = document.getElementById('cnfYes');
    cnfNo.addEventListener("click",function(){
        deletePost.style.display="none";
    })
}

function showPost(){    
    location.href = "post.html";
}