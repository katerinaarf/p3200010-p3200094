// script.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const realEstateOptions = document.getElementById("realEstateOptions");
    const locationOptions = document.getElementById("locationOptions");

    
    form.addEventListener("submit", function (event) {
        if (!validatePasswords()) {
            event.preventDefault(); 
        }
    });

    function validatePasswords() {
        const password = form.querySelector("#password").value;
        const confirmPassword = form.querySelector("#confirmPassword").value;
        const passwordError = form.querySelector("#passwordError");

        if (password !== confirmPassword) {
            passwordError.textContent = "Οι κωδικοί πρόσβασης δεν ταιριάζουν.";
            return false;
        } else {
            passwordError.textContent = "";
            return true;
        }
    }

    form.addEventListener("change", function () {
        const interests = form.querySelector("#interests").value;

        if (interests === "1") {
            realEstateOptions.classList.remove("hidden");
            locationOptions.classList.add("hidden");
        } else if (interests === "2") {
            realEstateOptions.classList.add("hidden");
            locationOptions.classList.add("hidden");
        } else if (interests === "3") {
            realEstateOptions.classList.add("hidden");
            locationOptions.classList.add("hidden");
        } else if (interests === "4") {
            realEstateOptions.classList.add("hidden");
            locationOptions.classList.add("hidden");
        }
    });

const vehicleOptions = document.getElementById("vehicleOptions");
form.addEventListener("change", function () {
    const vehicleInterest = form.querySelector('input[name="vehicleInterest"]:checked');

    if (vehicleInterest) {
        vehicleOptions.classList.remove("hidden");
    } else {
        vehicleOptions.classList.add("hidden");
    }
});

const appliancesOptions = document.getElementById("appliancesOptions");
form.addEventListener("change", function () {
    const appliancesInterest = form.querySelector('input[name="appliancesInterest"]:checked');

    if (appliancesInterest) {
        appliancesOptions.classList.remove("hidden");
    } else {
        appliancesOptions.classList.add("hidden");
    }
});


const technologyOptions = document.getElementById("technologyOptions");
form.addEventListener("change", function () {
    const technologyInterest = form.querySelector('input[name="technologyInterest"]:checked');

    if (technologyInterest) {
        technologyOptions.classList.remove("hidden");
    } else {
        technologyOptions.classList.add("hidden");
    }
});
});

