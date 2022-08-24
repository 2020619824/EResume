function toggleBtn(){
    const Btns = document.querySelector(".medias");
    const add = document.getElementById("add");
    const remove = document.getElementById("remove");
    const btn = document.querySelector(".medias").querySelectorAll("a");
    Btns.classList.toggle("open");
    if(Btns.classList.contains("open")){
        add.style.display = "none";
        remove.style.display = "block";
        btn.forEach((e, i) => {
            setTimeout(() => {
                left = 3 * i;
                e.style.left = left + "rem";
            }, 150 * i);
        });
    }
    else{
        add.style.display = "block";
        remove.style.display = "none";
        btn.forEach(e => {
            e.style.left = "0px";
        })
    }
    
}