 let posts = [
    {
        id : 0,
        fullName : "paolo belli",
        profilePic : "https://picsum.photos/200/300",
        date : "(12-02-2023)",
        postInfo : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        postImg : "https://picsum.photos/200/300",
        postLike : 28
    }
    ,
    {
        id : 1,
        fullName : "Puntatore Giancarlo",
        profilePic : "https://picsum.photos/200/300",
        date : "(12-21-2023)",
        postInfo : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        postImg : "",
        postLike : 5
    }
    ,
    {
        id : 2,
        fullName : "La giannella",
        profilePic : "https://picsum.photos/200/300",
        date : "(05-02-2023)",
        postInfo : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        postImg : "https://picsum.photos/200/300",
        postLike : 500
    }
    ,
    {
        id : 3,
        fullName : "Pasquale fò fò",
        profilePic : "https://picsum.photos/200/300",
        date : "(07-21-2023)",
        postInfo : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        postImg : "https://picsum.photos/200/300",
        postLike : 10000
    }
 ]
 // stampo
// ! prendo l'elemento
 const target = document.getElementById("container");


//funzione creazione del post 
let createPost = () =>{
}

//invoco la funzione in un ciclo
target.innerHTML = 
`<div  class="post">
    <div class="post__header">
    <div class="post-meta">
        <div class="post-meta__icon">
        <img class="profile-pic" src="https://unsplash.it/300/300?image=15" alt="Phil Mangione" />
        </div>
        <div class="post-meta__data">
        <div class="post-meta__author">Phil Mangione</div>
        <div class="post-meta__time">4 mesi fa</div>
        </div>
    </div>
    </div>
    <div class="post__text">
    Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint
    voluptate recusandae architecto. Et nihil ullam aut alias.
    </div>
    <div class="post__image">
    <img src="https://unsplash.it/600/300?image=171" alt="" />
    </div>
    <div class="post__footer">
    <div class="likes js-likes">
        <div class="likes__cta">
        <button class="like-button js-like-button" href="#" data-postid="1">
            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
            <span class="like-button__label">Mi Piace</span>
        </button>
        </div>
        <div class="likes__counter">Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone</div>
    </div>
    </div>
</div>
`

