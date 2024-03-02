const object = document.querySelector(".input")

const themeToggle = function(value) {
    object.style.background = value === "on" ? "red" : "blue";
}

let myfunction = function(value) {
    for (let i = 1; i <= value; i++){
        let result = '';
        for (let j = 1; j <= i; j++){
            result += `${j} `;
        }
        console.log(result)
    }
} 


myfunction(8)