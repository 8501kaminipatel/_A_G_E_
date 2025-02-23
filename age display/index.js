let button = document.getElementById("button");
let date = document.getElementById("date");
let display = document.getElementById("display");

button.addEventListener('click', () => {
    let currdate = new Date();
    let birthdate = new Date(date.value);
    let ageYears = currdate.getFullYear() - birthdate.getFullYear();

    let monthDiff = currdate.getMonth() - birthdate.getMonth();
    let dayDiff = currdate.getDate() - birthdate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        ageYears--;
    }

    display.textContent = `You Are ${ageYears} Years Old`;
    date.value = "";
});