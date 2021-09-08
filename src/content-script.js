let button = document.createElement("button");
button.innerHTML = "Export naar CSV";
button.classList.add("btn", "btn-success");
button.style.display = "block";

let insertLocation = document.getElementsByName("Glade")[0];
if (insertLocation != null) {
    insertLocation.prepend(button);
}

let editorLocation = [...document.querySelectorAll("h3")]
    .filter(a => a.textContent.includes("Editor"))[0]
if (editorLocation != null) {
    editorLocation.prepend(button);
}

const colors = ["l", "p", "b", "e", "y", "o", "r", "g", "w"]

button.addEventListener("click", function () {
    let items = Array.from(document.getElementsByClassName("field-container")[0].querySelectorAll(".field-block"))
        .map((item) => {
            let child = item.firstChild;
            let type = child.getAttribute('type');
            const number = child.getAttribute('value');

            switch (type) {
                case "wood": case "bush": case "stone":
                    return "q";
                case "bomb":
                    return "x" + number;
                case "goal":
                    return "t" + number
                case "bonus":
                    return "m" + number;
                case "turn":
                    return "d" + number;
                case "start":
                    return "s" + number
                case "color":
                    return colors[number];
            }

        });

    const rows = [];
    while (items.length > 0) {
        const chunk = items.splice(0, 20);
        rows.push(chunk);
    }

    let csvContent = "data:text/csv;charset=utf-8,"
        + rows.map(e => e.join(";")).join("\n");

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "glade.csv");
    document.body.appendChild(link);

    link.click();

});

/**
q	obstacle
x	bomb	seconds (steps) till explosions
t	target (doel)	number of target
m	money (bonus)	2 ^ x is the bonus gained
d	turner (draai)	1-3 times turning to the left, 0 is random turn
s	start	0-3 is direction, clock-wise with 0 being north
w	white square
g	gray square
r	red square
o	orange square
y	yellow square
e	green square
b	blue square
p	purple square
l	black square
 */