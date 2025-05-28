node = document.querySelector("#menu-button");
node.addEventListener("click",() => {
    navNode = document.querySelector("#nav-container");
    navNode.classList.toggle("nav-animation");

    topNode = document.getElementById("top-bar");
    topNode.classList.toggle("top-bar");

    middleNode = document.getElementById("middle-bar");
    middleNode.classList.toggle("middle-bar");

    bottomNode = document.getElementById("bottom-bar");
    bottomNode.classList.toggle("bottom-bar");
});