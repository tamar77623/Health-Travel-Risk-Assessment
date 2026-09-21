let select1 = document.getElementById('select1');
let inp1 = document.getElementById('inp1');
let select2 = document.getElementById('select2');
let inp2 = document.getElementById('inp2');
let btn = document.getElementById('btn');
let h3 = document.getElementById('h3');
let score = 0;
let small = document.getElementById('small')
function h3text(){
    setTimeout(() => {
        h3.innerText = '';
    }, 1700);
}
btn.onclick = function(){
    if(select1.value === ""){
        h3.innerText = 'Please Select Your country';
        h3text();
        return;
    }
    if(select2.value === ""){
        h3.innerText = 'Please select hasChronicDiseases';
        h3text();
        return;
    }
    if(inp1.value === ""){
        h3.innerText = 'Please Enter Your Age';
        h3text();
        return;
    }
    if(inp2.value === ""){
        h3.innerText = 'Please Length of stay in days';
        h3text()
        return;
    }
    RiskScore();
}
function RiskScore() {
    let age = Number(inp1.value);
    if (age < 12 || age > 60) {
        score += 2;
    }
    if (select2.value === "yes") {
        score += 3;
    }
    let duration = Number(inp2.value);
    if (duration > 30) {
        score += 2;
    } else if (duration >= 10) {
        score += 1;
    }
    if (select1.value === "africa" || select1.value === "tropical") {
        score += 3;
    } else if (select1.value === "asian") {
        score += 1;
    }
    console.log(score);
    if (score >= 6) {
        small.innerText = 'The risk is very high';
        small.style.color = 'red';
    } else if (score >= 5) {
        small.innerText = 'The risk is moderate; the decision is yours';
        small.style.color = 'orange';
    } else if (score >= 2) {
        small.innerText = "The risk is low, you can enjoy the trip";
        small.style.color = 'green';
    } else {
        small.innerText = 'No risk';
        small.style.color = 'gray';
    }
}