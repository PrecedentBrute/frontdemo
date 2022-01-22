let clicks = 1;

function plusOne() {
    clicks += 1;
    document.getElementById("number").innerHTML = clicks;
}

function minusOne() {
    clicks -= 1;
    document.getElementById("number").innerHTML = clicks;
}