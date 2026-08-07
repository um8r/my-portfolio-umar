// ================= CONTACT FORM =================

document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {

            alert("Please fill all fields.");

            return;
        }

        alert(
            "Thank you " + name +
            "! Your message has been received."
        );

        document.getElementById("contactForm").reset();

    });


// ================= NAVBAR ACTIVE LINK =================

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});