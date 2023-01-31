// function that searches for .like-number elements in the parent element of the button clicked and increments the inner HTML
function like(element) {
    var parent = element.parentElement;
    console.log(parent);
    likeCount = parent.querySelector(".like-number");
    likeCount.innerHTML++;
}
