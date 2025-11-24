// let inp = document.querySelector("input");
// let buttons = document.querySelectorAll("button");

// let buttonArray = Array.from(buttons);

// let str = "";

// buttonArray.forEach((btn) => {
//     btn.addEventListener("click", (e) => {

//         if (e.target.innerHTML === "DEL") {
//             str = str.slice(0, str.length - 1);
//             inp.value = str;

//         } else if (e.target.innerHTML === "AC") {
//             str = "";
//             inp.value = str;
//         } else if (e.target.innerHTML === "=") {
//             str = eval(str);
//             inp.value = str;
//         } else {
//             str += e.target.innerHTML;
//             inp.value = str;
//         }
//     });
// });





let inp = document.querySelector("input");
let buttons = document.querySelectorAll("button");

let buttonArray = Array.from(buttons);

let str = "";

buttonArray.forEach((btn) => {
    btn.addEventListener("click", (event) => {

        if (event.target.innerHTML === "DEL") {
            str = str.slice(0, str.length - 1);
            inp.value = str;
        } else if (event.target.innerHTML === "AC") {
            str = "";
            inp.value = str;
        } else if (event.target.innerHTML === "=") {
            str = eval(str);
            inp.value = str;
        } else {
            str += event.target.innerHTML;
            inp.value = str;
        }
    });
});