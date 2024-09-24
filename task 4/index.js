


for (let i = 1; i <= 6; i++) {
    let card = document.getElementById("card" + i);
    let image = document.getElementById("image" + i);

    card.onclick = function() {
        resetBorders();
        image.style.borderStyle = "solid";
        image.style.borderColor = "red";
        image.style.borderWidth = "2px";
    };
}

function resetBorders() {
    for (let i = 1; i <= 6; i++) {
        let image = document.getElementById("image" + i);
        image.style.border = "none";
    }
}

let imageInputs = document.getElementsByName("image");
let handleGenerate = document.getElementById("sub");
let text = document.getElementById("text");

handleGenerate.onclick = function() {
    let newImage = null;
    for (let i = 0; i < imageInputs.length; i++) {
        if (imageInputs[i].checked) {
            newImage = imageInputs[i].value;
            break;
        }
    }

    if (newImage) {
        let newWindow = window.open("", "", "width=500,height=500");
        newWindow.document.write(`
            <img src="${newImage}" style="width:70%;height:auto;margin-left:15%;">
            <p style="color: #0da978;text-align: center;">${text.value}</p>
            <div><input type="button" value="Close Preview" style="margin-left:40%;" onclick="window.close()"></div>
        `);
    } else {
        alert("Please select an image.");
    }
};
