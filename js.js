
    const contactPopup = document.getElementById("contactPopup");
    const closeContact = document.getElementById("closeContact");


    const contactTriggers = document.querySelectorAll(
        'a[href="#contact"], .contact-trigger'
    );

    function openContactPopup(event) {
        if (event) event.preventDefault();

        contactPopup.classList.add("show");
        document.body.style.overflow = "hidden";

        closeContact.focus();
    }

    function closeContactPopup() {
        contactPopup.classList.remove("show");
        document.body.style.overflow = "";
    }

    contactTriggers.forEach(link => {
        link.addEventListener("click", openContactPopup);
    });

    closeContact.addEventListener("click", closeContactPopup);


    contactPopup.addEventListener("click", event => {
        if (event.target === contactPopup) {
            closeContactPopup();
        }
    });


    document.addEventListener("keydown", event => {
        if (
            event.key === "Escape" &&
            contactPopup.classList.contains("show")
        ) {
            closeContactPopup();
        }
    });


    const contactForm = document.getElementById("contactForm");
    const formStatus = document.getElementById("formStatus");

    contactForm.addEventListener("submit", event => {
        event.preventDefault();

        formStatus.textContent =
            "Your form is ready, but sending is not configured yet.";
    });
