const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-06-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];
const container = document.querySelector(".posts-list");


posts.forEach((element) => {
    container.innerHTML += 
    `
    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        ${element.author.image ? `<img class="profile-pic" src="${element.author.image}" alt="">` : `<div class="profile-pic-default">${element.author.name.split(" ").map((n)=>n[0]).join(".")}</div>` }                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${element.author.name}</div>
                        <div class="post-meta__time">${calcDate(element.created)}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${element.content}</div>
            <div class="post__image">
                <img src="${element.media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${element.id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${element.id}" class="js-likes-counter">${element.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `
    
})







const likesColor = document.querySelectorAll(".js-like-button")
const counter = document.querySelectorAll(".js-likes-counter")

likesColor.forEach((likesColor, index) => {
    likesColor.addEventListener("click", (event) => {
        event.preventDefault();
        const likeCounter = counter[index]
        console.log(likeCounter);
        if (likesColor.classList.contains("like-color")) {
            posts[index].likes--
        }
        else {
            posts[index].likes++
        }
        likesColor.classList.toggle("like-color")
        likeCounter.innerHTML = posts[index].likes;
    })
})




function calcDate(startingDate) {
    const date1 = new Date(`${startingDate}`);
    const date2 = new Date();

    const timeDifferenceInMilliseconds = date2.getTime() - date1.getTime();
    const monthDifference = timeDifferenceInMilliseconds / (1000 * 60 * 60 * 24 * 30)

    

    /* return Math.round(monthDifference) + " mesi fa" */

    if (Math.round(monthDifference) < 12) {
        return Math.round(monthDifference) + " mesi fa"
    }
    else if (Math.round(monthDifference) === 12) {
        return "1 anno fa"
    }
    else {
        const yearDifference = monthDifference / 12
        const minusMonth = monthDifference - (Math.round(yearDifference) * 12)
        return Math.round(yearDifference) + " anno e " + Math.round(minusMonth) + " mesi fa";
    }
}




