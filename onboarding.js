let step = 1;

function selectCard(el) {
    document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
}

function nextStep() {
    if (step < 4) {
        step++;
        document.getElementById("bar").style.width = (step * 25) + "%";
        alert("Step " + step + " (ডেমো)");
    } else {
        alert("Onboarding Complete!");
        window.location.href = "index.html";
    }
}
