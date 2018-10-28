/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var filterButton = document.querySelector("p + button");
var downloadButton = document.querySelector("article button:first-of-type");
var heartButton = document.querySelector("article button:nth-of-type(3)");
var header = document.querySelector("header");
var aantalLikes = document.querySelector("article section>section:last-of-type p:last-of-type");
var greenBall = document.querySelector("article button:nth-of-type(2) img:nth-of-type(2)");
var notificatieBubbel = document.querySelector("header ul li:first-of-type img:first-of-type");


function collapse() {
    var filterForm = document.querySelector("button + section");
    var arrow = document.querySelector("button img");
    filterForm.classList.toggle("showFilters");
    arrow.classList.toggle("turnArrow");
}

function changeButtontext() {
    downloadButton.textContent = "Gedownload";
}

function changeLikecount() {
    aantalLikes.textContent = "aantal likes: 628";
}

function deleteClassAfterDownload() {
    header.classList.remove("headerAfterDownload");
}

function deleteClassAfterBubbles() {
    header.classList.remove("headerAfterBubbles");
}

function downloadAnimatie() {
    downloadButton.classList.add("startDownload");
    greenBall.classList.add("startDownload");
    header.classList.add("headerAfterDownload");
    setTimeout(changeButtontext, 1000);
    setTimeout(deleteClassAfterDownload, 2000);
}

function heartAnimatie() {
    heartButton.classList.toggle("startHeart");
    header.classList.add("headerAfterBubbles");
    notificatieBubbel.classList.add("buttonAfterBubbles");
    setTimeout(changeLikecount, 100);
    setTimeout(deleteClassAfterBubbles, 2000);
}

downloadButton.addEventListener("click", downloadAnimatie);
heartButton.addEventListener("click", heartAnimatie);
filterButton.addEventListener("click", collapse);