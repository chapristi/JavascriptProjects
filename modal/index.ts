const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn?.addEventListener("click", ():void => {
    modal?.classList.add("open-modal");
});
closeBtn?.addEventListener("click", ():void => {
    modal?.classList.remove("open-modal");
});
