let heart = document.getElementById('heart');
let likes = document.querySelector('.likes');

heart.addEventListener('click', function(){
    if(heart.className=="fa-regular fa-heart"){
        heart.className = "fa-solid fa-heart";
        heart.style.fontSize = '24px';
        heart.style.marginRight = '7px';
        likes.innerHTML = '89,669 likes';
    }else{
       heart.className = "fa-regular fa-heart";
       likes.innerHTML = '89,668 likes';
    }
})
