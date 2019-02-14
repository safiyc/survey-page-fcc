function checkboxCount() {
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
    }
}