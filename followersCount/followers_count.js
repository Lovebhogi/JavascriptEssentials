let count = 0;

function increaseCount() {
    count++
}
function displayCount() {
    document.getElementById('countDisplay').innerHTML=count;

}
function increasedCount() {
    count++;
    displayCount();
}

function checkCountValue() {
    if (count===10){
        alert("Your instagram post gained 10 followers");
    } else if (count===20) {
        alert("your instagram post gain 20 followers");
    }
}
function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
}