function editPost(){
    
    document.getElementById('blogTitleNew').contentEditable = true;
    document.getElementById("blogTitleNew").style.cursor = "pointer";
    document.getElementById("blogTitleNew").focus();  
    
    document.getElementById('blogBody').contentEditable = true;
    document.getElementById("blogBody").style.cursor = "pointer";
    document.getElementById("blogBody").focus();    
    document.getElementById('editPost').innerHTML = 'Save <i class="fa fa-floppy-o fa-lg" ></i>';    
    document.getElementById('editPost').onclick = function() { savePost(); }
}

function savePost(){
   document.getElementById('blogBody').innerHTML = document.getElementById('blogBody').innerHTML;
   document.getElementById('blogTitleNew').innerHTML = document.getElementById('blogTitleNew').innerHTML;
   document.getElementById('blogBody').contentEditable = false;
   document.getElementById('blogTitleNew').contentEditable = false;
   document.getElementById('editPost').innerHTML = 'Edit <i class="fa fa-pencil-square-o fa-lg" ></i>';
   document.getElementById('editPost').onclick = function() { editPost(); }
   document.getElementById("blogBody").style.cursor = "auto";
   document.getElementById("blogTitleNew").style.cursor = "auto";
   document.getElementById("blogBody").blur();
   document.getElementById("blogTitleNew").blur();
}