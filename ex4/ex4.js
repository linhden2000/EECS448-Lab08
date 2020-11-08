function applyChanges(){
    let borderColor = document.getElementById("border").value;
    console.log(borderColor)
    let backgroundColor = document.getElementById("background").value;
    let borderWidth = document.getElementById("borderWidth").value;
    let backgroundWidth = document.getElementById("bgWidth").value;
    let text = document.getElementById("text");
    if(borderColor === "red" || borderColor === "Red"){
        text.style.borderColor = "red";
    }
    else if(borderColor === "blue" || borderColor === "Blue"){
        text.style.borderColor = "blue";
    }
    else if(borderColor === "green" || borderColor === "Green"){
        text.style.borderColor = "green";
    }
    
    if(backgroundColor === "red" || backgroundColor === "Red"){
        text.style.backgroundColor = "red";
    }
    else if(backgroundColor === "blue" || backgroundColor === "Blue"){
        text.style.backgroundColor = "blue";
    }
    else if(backgroundColor === "green" || backgroundColor === "Green"){
        text.style.backgroundColor = "green";
    }

    if(borderWidth !== ""){
        text.style.borderWidth = borderWidth + "px";
    }

    if(backgroundWidth !== ""){
        text.style.width = backgroundWidth + "%";
    }
}