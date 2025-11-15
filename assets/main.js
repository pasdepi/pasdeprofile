dragElement(document.getElementById("main"));

function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const bar = document.getElementById("bar");
    const dragTarget = bar || elmnt;

    dragTarget.addEventListener("mousedown", dragMouseDown);

    const closeButton = document.querySelector(".X");
    if (closeButton) {
        closeButton.addEventListener("click", e => { 
            e.stopPropagation();
            elmnt.style.display = "none";
        });
    } 

    function dragMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.addEventListener("mousemove", elementDrag);
        document.addEventListener("mouseup", closeDragElement);
    }

    function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.removeEventListener("mousemove", elementDrag);
        document.removeEventListener("mouseup", closeDragElement);
    }
}

document.getElementById("pasdeicon").addEventListener("click", () => {
    const main = document.getElementById("main");
    main.style.display = "inline";
    main.style.top = "50px"
    main.style.left = "50px"
});



