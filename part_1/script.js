var likes = document.querySelector(".like-number");

var likeCount = 3;

// function that increases likeCount and puts that number in the correct place in the document
function like() {
    likeCount++;
    likes.innerText = likeCount;
}
