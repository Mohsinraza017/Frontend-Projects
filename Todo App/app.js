// let inp = document.querySelector("input");
// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");

// btn.addEventListener("click", () => {
//     let item = document.createElement("li");
//     item.innerText = inp.value;
//     inp.value = "";
//     ul.appendChild(item);

//     let delBtn = document.createElement("button");
//     delBtn.innerText = "Delete";
//     delBtn.classList.add("delete");
//     item.appendChild(delBtn);

// });


// ul.addEventListener("click", (event) => {
//     if (event.target.nodeName === "BUTTON") {
//         let listItem = event.target.parentElement;
//         listItem.remove();
//     }
// });


let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");


btn.addEventListener("click", () => {
    let item = document.createElement("li");
    item.innerText = inp.value;
    inp.value = "";
    ul.appendChild(item);

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
});

ul.addEventListener("click", (event) => {
    if (event.target.nodeName === "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});