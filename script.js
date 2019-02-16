// Prevent more than 3 checkbox checks
function checkboxCount(el) {
    let count = 0;

    if (document.getElementById("survey-form").games.checked) {
        count = count + 1;
    }

    if (document.getElementById("survey-form").browsing.checked) {
        count = count + 1;
    }

    if (document.getElementById("survey-form").texting.checked) {
        count = count + 1;
    }

    if (document.getElementById("survey-form").calls.checked) {
        count = count + 1;
    }

    if (document.getElementById("survey-form").misc.checked) {
        count = count + 1;
    }

    if (count === 4) {
        alert("Please select only 3 checkboxes");
        el.checked = false;
    }
}

// Get current year
let date = new Date();
document.getElementById("copyright").textContent = date.getFullYear();