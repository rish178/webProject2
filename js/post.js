var likeCounter = 0;

//Edit Post functionalities
function editPost(){
    
    document.getElementById('blogTitleNew').contentEditable = true;
    document.getElementById("blogTitleNew").style.cursor = "pointer";
    document.getElementById('blogTitleNew').className = 'editableBlogTitle';
    document.getElementById("blogTitleNew").focus();  
    
    document.getElementById('blogBody').contentEditable = true;
    document.getElementById("blogBody").style.cursor = "pointer";
    document.getElementById("blogBody").focus();    
    document.getElementById('editPost').innerHTML = 'Save <i class="fa fa-floppy-o fa-lg" ></i>';    
    document.getElementById('editPost').onclick = function() { savePost(); }
}
//Save Post functionalities
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
   document.getElementById('blogTitleNew').className = '';
}
//Like Post functionalities
function likePost(){
    likeCounter = likeCounter + 1;
    if(likeCounter == 1){
        document.getElementById('LikePost').innerHTML = '<i class="fa fa-thumbs-up fa-lg"></i> Liked!';
        document.getElementById('likeInfo').innerText = '1 person likes this!';
    }else if(likeCounter > 1){
        document.getElementById('likeInfo').innerText = likeCounter + ' people have liked this!';
    }
}
//Commentfor Post functionalities
function addComment(comment){
    if(document.getElementById('blogAllComments').style.display === 'none'){
        document.getElementById('blogAllComments').style.display = 'block';
    }
    var commentItem = '<p class="comment">'+ comment.value +'</p>';
    document.getElementById('commentsContainer').innerHTML = document.getElementById('commentsContainer').innerHTML + commentItem;
}