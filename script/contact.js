document.querySelectorAll(".input").forEach((element) => {
    element.addEventListener("blur", (event) => {
    if(event.target.value != "") {
        event.target.nextElementSibling.classList.add("filled");
    }
    else {
        event.target.nextElementSibling.classList.remove("filled");
    }
    });
});
$(".feedback").hide();
function togglePopup() {
    $(".feedback").slideToggle(750);
}
$(".reason_container").hide();
function showSelect() {
    $(".reason_container").slideDown(750);
}