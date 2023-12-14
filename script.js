let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "Iphone", "PC", "Laptop", "Headphones", "Laptop Holder"]
let colors = ["red ", "green ", "blue"]
var count; 
var text= `<h1 class = "topic">There Is Products Avilable In Baraa's Store</h1>`;
    

document.write(text)

function x(){
    count = document.getElementById("input").value
    document.write(`<h1 class = "topic">This Is ${count} Products Avilable In Baraa's Store, We Have More</h1>`)
    for (i = 0; i < count; i++) {
    document.write(`<div class = "div">`);
    document.write(`<h2> [${i + 1}] ${products[i]}</h2>`);
    document.write(`</div>`);
    document.write(`<h3>Colors: ${colors.join(" | ")}</h3>`)
}
}