// Global scope
var globalVar="I am global variable";
let glbalLet = "I am also global , but scoped with let";
const globalConst="I am a globla constant";

{
    //Block scope
    var blockVar="I am block scoped var";
    let blockLet ="i am a block scoped let";
    const blockConst = "I am a block-scoped const";
}
function show(){
    var functionVar="I am a block scoped var";
    let functionLet="I am a blocked scoped let";
    const functionConst="I am a blocked scoped const";
}
show()
console.log(functionVar);
console.log(functionLet);
console.log(functionConst);