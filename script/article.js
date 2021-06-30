function enlarge(event){
    var src = event.target.src;
    var modalImg = document.getElementById("modal-img");
    modalImg.src = src;
    var modal = document.getElementById("modal");
    modal.className ="modal-display";
    document.getElementsByTagName("html")[0].style.overflow = "hidden"
}

function closeModal(event){
    console.log(event)
    var modal = document.getElementById("modal");
    modal.className = "modal-hidden";
    document.getElementsByTagName("html")[0].style.overflowY = "scroll"
}