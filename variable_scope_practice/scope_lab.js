// Global Scope

var globalVar = "I'm a global variable.";
let globalLet = "I'm also a globale variable, but scoped with let.";
const globalConst = "I'm a global constant.";

// Block Scope
{
    var blockVar = "I'm a block-scope var";
    let blockLet = "I'm a block-scope let";
    const blockConst = "I'm a block-scope const.";
    // blockVar = "Hello How are you"; // reassingment of var was successful.

    // blockLet = "Block let reassigned"
    
}
// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

console.log("\nNow, we'll call block level messages to print.\n");

//Block Scope
blockVar = "Out of block reassignment. However, blockLet is not accessible out of block."; // out of block reassignment was successful
console.log(blockVar);
// console.log(blockLet);

// function scope
function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    }
    show();
    
    console.log(functionVar); // Throws ReferenceError
    console.log(functionLet); // Throws ReferenceError
    console.log(functionConst); // Throws ReferenceError