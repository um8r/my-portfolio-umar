/* =========================================
   PORTFOLIO JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       NAVBAR SCROLL EFFECT
    ========================================= */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {
            navbar.classList.add("navbar-scrolled");
        } else {
            navbar.classList.remove("navbar-scrolled");
        }

    });


    /* =========================================
       BACK TO TOP BUTTON
    ========================================= */

    const backToTop = document.querySelector(".back-to-top");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 500) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });


    /* =========================================
       CONTACT FORM
    ========================================= */

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();


            if (!name || !email || !subject || !message) {

                alert("Please fill in all fields.");

                return;
            }


            alert(
                "Thank you, " +
                name +
                "! Your message has been prepared."
            );


            /* Reset form */

            contactForm.reset();

        });

    }


    /* =========================================
       MOBILE NAVBAR
    ========================================= */

    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (
                navbarCollapse &&
                navbarCollapse.classList.contains("show")
            ) {

                const bsCollapse =
                    bootstrap.Collapse.getInstance(navbarCollapse);

                if (bsCollapse) {
                    bsCollapse.hide();
                }

            }

        });

    });


    /* =========================================
       ACTIVE NAVIGATION LINK
    ========================================= */

    const sections = document.querySelectorAll("section[id]");

    window.addEventListener("scroll", function () {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 100;

            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === "#" + currentSection) {
                link.classList.add("active");
            }

        });

    });

});