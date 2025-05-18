let go_to_left_button = document.getElementById("go_to_left_button");
let go_to_right_button = document.getElementById("go_to_right_button");
let big_images_holder = document.getElementById("big_images_holder");
let small_images_holder = document.getElementById("small_images_holder");
const totalScrollWidth = big_images_holder.scrollWidth; // total content width
const clientWidth = big_images_holder.clientWidth;

big_images_holder.addEventListener("scroll",(e)=>{
    const scrollLeft = big_images_holder.scrollLeft;
    let isAtEnd = (scrollLeft + clientWidth) >= totalScrollWidth 
    if (big_images_holder.scrollLeft !== 0) {
        go_to_left_button.style.backgroundColor = "#ffffffff";
    }else{
        go_to_left_button.style.backgroundColor = "#ffffff55";
    }
    if (isAtEnd) {
        go_to_right_button.style.backgroundColor = "#ffffff55";
    }
    else{
        go_to_right_button.style.backgroundColor = "#ffffffff";
    }
    let count = Math.floor(scrollLeft/420);
    (scrollLeft%420 != 0) ? count++ :count;
    small_images_holder.querySelector(".selected").classList.remove("selected");
    small_images_holder.children[count].classList.add("selected");
})

go_to_left_button.addEventListener("click",(e)=>{
    big_images_holder.scrollBy({ left: -clientWidth, behavior: "smooth" });
});


go_to_right_button.addEventListener("click",(e)=>{
    big_images_holder.scrollBy({ left: clientWidth, behavior: "smooth" });
})

small_images_holder.addEventListener("click", (e) => {
    console.log("CLICKED");
    const previouslySelected = document.querySelector(".selected");
    const children = Array.from(small_images_holder.children);
    if (e.target.tagName === "IMG") {
        previouslySelected.classList.remove("selected");
        e.target.classList.add("selected");
        const indexOfClicked = children.indexOf(e.target);
        const indexOfPreviouslySelected = children.indexOf(previouslySelected);
        let difference = indexOfClicked - indexOfPreviouslySelected;
        big_images_holder.scrollLeft = (indexOfClicked*420);
    }
});