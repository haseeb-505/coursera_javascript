const squareCheckBox = document.getElementById("square");
const widthContainer = document.getElementById("width-container");

squareCheckBox.addEventListener('change', function () {
    if (this.checked){
        console.log("value is checked/true");
        widthContainer.classList.add('hidden');
    } else {
        widthContainer.classList.remove('hidden');
    }
})

let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById("length").value);
    if (squareCheckBox.checked){
        var area = length * length
        
    } else {
        width = parseFloat(document.getElementById("width").value);
        area = length * width
    }
    
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

